import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: "ID da transação é obrigatório" });
  }
  try {
    const response = await axios.get(
      `https://app.axipayments.com.br/api/v1/gateway/transactions/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-public-key": process.env.AXIPAY_PUBLIC_KEY!,
          "x-secret-key": process.env.AXIPAY_SECRET_KEY!,
        },
      }
    );
    return res.status(200).json(response.data);
  } catch (error: any) {
    const apiError = error.response?.data || error.message;
    return res
      .status(500)
      .json({ error: "Erro ao consultar status do Pix", details: apiError });
  }
}
