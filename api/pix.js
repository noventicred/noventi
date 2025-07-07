import axios from "axios";

// Função para validar CPF
function isValidCPF(cpf) {
  const cleanCPF = cpf?.replace(/\D/g, "") || "";
  return cleanCPF.length === 11 && /^\d{11}$/.test(cleanCPF);
}

// Função para validar email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função para sanitizar dados sensíveis nos logs
function sanitizeLogData(data) {
  const sanitized = { ...data };
  if (sanitized.client) {
    sanitized.client = {
      name: sanitized.client.name ? "***" : "❌",
      email: sanitized.client.email ? "***@***.com" : "❌",
      phone: sanitized.client.phone ? "***" : "❌",
      document: sanitized.client.document ? "***.***.***-**" : "❌",
    };
  }
  return sanitized;
}

async function handler(req, res) {
  // Headers de segurança
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método não permitido",
      allowedMethods: ["POST"],
    });
  }

  try {
    console.log("🔄 [INFO] Nova requisição PIX recebida");

    // Verificar variáveis de ambiente
    if (!process.env.AXIPAY_PUBLIC_KEY || !process.env.AXIPAY_SECRET_KEY) {
      console.error("❌ [SECURITY] Variáveis de ambiente não configuradas");
      return res.status(500).json({
        error: "Configuração do servidor incompleta",
      });
    }

    const { identifier, amount, client, dueDate, callbackUrl, products } =
      req.body;

    // Validações de entrada
    if (!identifier || !amount || !client || !dueDate) {
      console.warn("⚠️ [VALIDATION] Dados obrigatórios ausentes");
      return res.status(400).json({
        error: "Dados obrigatórios ausentes",
        required: ["identifier", "amount", "client", "dueDate"],
      });
    }

    // Validar amount
    const numericAmount = Number(amount);
    if (!numericAmount || numericAmount <= 0 || numericAmount > 50000) {
      console.warn("⚠️ [VALIDATION] Valor inválido:", numericAmount);
      return res.status(400).json({
        error: "Valor deve ser entre R$ 0,01 e R$ 50.000,00",
      });
    }

    // Validar dados do cliente
    if (!client.name || !client.email || !client.phone || !client.document) {
      console.warn("⚠️ [VALIDATION] Dados do cliente incompletos");
      return res.status(400).json({
        error: "Dados do cliente obrigatórios: name, email, phone, document",
      });
    }

    // Validar CPF
    if (!isValidCPF(client.document)) {
      console.warn("⚠️ [VALIDATION] CPF inválido fornecido");
      return res.status(400).json({
        error: "CPF inválido",
      });
    }

    // Validar email
    if (!isValidEmail(client.email)) {
      console.warn("⚠️ [VALIDATION] Email inválido fornecido");
      return res.status(400).json({
        error: "Email inválido",
      });
    }

    // Validar data de vencimento
    const dueDateObj = new Date(dueDate);
    const today = new Date();
    if (dueDateObj <= today) {
      console.warn("⚠️ [VALIDATION] Data de vencimento inválida");
      return res.status(400).json({
        error: "Data de vencimento deve ser futura",
      });
    }

    // Log sanitizado para auditoria
    console.log(
      "✅ [AUDIT] Dados validados:",
      sanitizeLogData({
        identifier,
        amount: numericAmount,
        client,
        dueDate,
      })
    );

    // Preparar produtos
    const productsPayload =
      products && Array.isArray(products) && products.length > 0
        ? products.map((p) => ({
            id: String(p.id || "item-001"),
            name: String(p.name || "Produto"),
            quantity: Number(p.quantity) || 1,
            price: Number(p.price) || numericAmount,
          }))
        : [
            {
              id: "iof-payment",
              name: "IOF - Imposto sobre Operações Financeiras",
              quantity: 1,
              price: numericAmount,
            },
          ];

    // Payload para AxiPayments
    const payload = {
      identifier: String(identifier),
      amount: numericAmount,
      client: {
        name: String(client.name).trim(),
        email: String(client.email).toLowerCase().trim(),
        phone: String(client.phone).replace(/\D/g, ""),
        document: String(client.document).replace(/\D/g, ""),
      },
      products: productsPayload,
      dueDate: dueDate,
      metadata: {
        origem: "noventicred-website",
        timestamp: new Date().toISOString(),
        version: "1.0",
      },
      callbackUrl:
        callbackUrl ||
        `${
          req.headers.origin || "https://noventicred.vercel.app"
        }/api/pix/callback`,
    };

    console.log("🔄 [API] Enviando requisição para AxiPayments");

    // Requisição para AxiPayments com timeout
    const response = await axios.post(
      "https://app.axipayments.com.br/api/v1/gateway/pix/receive",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "x-public-key": process.env.AXIPAY_PUBLIC_KEY,
          "x-secret-key": process.env.AXIPAY_SECRET_KEY,
          "User-Agent": "NoventiCred/1.0",
        },
        timeout: 30000, // 30 segundos
      }
    );

    console.log(
      "✅ [SUCCESS] PIX criado com sucesso - Status:",
      response.status
    );

    // Retornar apenas dados necessários
    const { data } = response;
    return res.status(200).json({
      success: true,
      transaction: {
        id: data.id,
        status: data.status || "pending",
        amount: numericAmount,
        dueDate: dueDate,
      },
      pix: {
        code: data.pixInformation?.qrCode || data.pix?.code,
        base64: data.pixInformation?.base64 || data.pix?.base64,
        image: data.pixInformation?.image || data.pix?.image,
      },
    });
  } catch (error) {
    // Log de erro sem expor dados sensíveis
    console.error("❌ [ERROR] Falha na criação do PIX:", {
      status: error.response?.status,
      code: error.code,
      message: error.message,
    });

    // Erro específico para timeout
    if (error.code === "ECONNABORTED") {
      return res.status(408).json({
        error: "Timeout na requisição. Tente novamente.",
      });
    }

    // Erro da API externa
    if (error.response?.status) {
      const apiError = error.response.data;
      return res.status(502).json({
        error: "Erro no processamento do pagamento",
        details: apiError?.message || "Serviço temporariamente indisponível",
      });
    }

    // Erro genérico
    return res.status(500).json({
      error: "Erro interno do servidor",
    });
  }
}

export default handler;
