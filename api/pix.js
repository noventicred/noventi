import axios from "axios";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { identifier, amount, client, dueDate, callbackUrl, products } =
      req.body;

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

    const payload = {
      identifier,
      amount,
      client,
      products: productsPayload,
      dueDate,
      metadata: { origem: "formulario-emprestimo" },
      callbackUrl,
    };

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

    return res.status(200).json(response.data);
  } catch (error) {
    const apiError = error.response?.data || error.message;
    return res
      .status(500)
      .json({ error: "Erro ao criar cobrança Pix", details: apiError });
  }
}

export default handler;
