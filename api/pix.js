import axios from "axios";

async function handler(req, res) {
  // Adicionar logs para debug
  console.log("🔍 [DEBUG] Método da requisição:", req.method);
  console.log(
    "🔍 [DEBUG] AXIPAY_PUBLIC_KEY existe:",
    !!process.env.AXIPAY_PUBLIC_KEY
  );
  console.log(
    "🔍 [DEBUG] AXIPAY_SECRET_KEY existe:",
    !!process.env.AXIPAY_SECRET_KEY
  );

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { identifier, amount, client, dueDate, callbackUrl, products } =
      req.body;

    console.log("🔍 [DEBUG] Dados recebidos:", {
      identifier,
      amount,
      client: client ? "✅ Presente" : "❌ Ausente",
      dueDate,
      callbackUrl,
      products: products ? "✅ Presente" : "❌ Ausente",
    });

    // Verificar se as variáveis de ambiente existem
    if (!process.env.AXIPAY_PUBLIC_KEY || !process.env.AXIPAY_SECRET_KEY) {
      console.error("❌ [ERROR] Variáveis de ambiente não configuradas");
      return res.status(500).json({
        error: "Configuração da API incompleta",
        details: "Variáveis de ambiente não encontradas",
      });
    }

    // Se não vier products do frontend, cria um default
    const productsPayload =
      products && Array.isArray(products) && products.length > 0
        ? products
        : [
            {
              id: "iof-001",
              name: "IOF",
              quantity: 1,
              price: amount,
            },
          ];

    // Payload corrigido conforme estrutura esperada: sale.payment.details
    const payload = {
      identifier,
      amount: Number(amount),
      client: {
        name: client.name,
        email: client.email,
        phone: client.phone,
        document: client.document,
      },
      products: productsPayload,
      dueDate,
      metadata: { origem: "formulario-emprestimo" },
      callbackUrl,
      // Estrutura corrigida conforme erro: sale.payment.details
      sale: {
        payment: {
          method: "pix",
          details: {
            qrcode_text: `Pagamento IOF - ${client.name || "Cliente"}`,
            expiration_minutes: 1440, // 24 horas
          },
        },
      },
    };

    console.log(
      "🔍 [DEBUG] Payload para AxiPay:",
      JSON.stringify(payload, null, 2)
    );

    const response = await axios.post(
      "https://app.axipayments.com.br/api/v1/gateway/pix/receive",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "x-public-key": process.env.AXIPAY_PUBLIC_KEY,
          "x-secret-key": process.env.AXIPAY_SECRET_KEY,
        },
      }
    );

    console.log("✅ [SUCCESS] Resposta da AxiPay:", response.status);
    return res.status(200).json(response.data);
  } catch (error) {
    console.error("❌ [ERROR] Erro na API:", {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
    });

    const apiError = error.response?.data || error.message;
    return res
      .status(500)
      .json({ error: "Erro ao criar cobrança Pix", details: apiError });
  }
}

export default handler;
