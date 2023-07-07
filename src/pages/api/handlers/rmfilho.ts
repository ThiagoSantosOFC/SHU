import { NextApiRequest, NextApiResponse } from "next";
import { IPessoa } from "../../../models/pessoa";
import PessoasDAO from "../../../utils/pessoasDAO";
import { connect, disconnect } from "../../../utils/mongo.config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dao = new PessoasDAO();

  if (req.method === "DELETE") {
    const { paiId, maeId, filhoId } = req.body;

    try {
      await connect();

      await dao.deleteFilho(paiId, maeId, filhoId);

      res.status(200).json({ message: "Filho removido com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao remover filho" });
    } finally {
      await disconnect();
    }
  }
}