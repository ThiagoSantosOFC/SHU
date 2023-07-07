import { NextApiRequest, NextApiResponse } from "next";
import { IPessoa } from "../../../models/pessoa";
import PessoasDAO from "../../../utils/pessoasDAO";
import { connect, disconnect } from "../../../utils/mongo.config";
interface ErrorResponse {
  message: string;
}

export default async function removeConjuge(
  req: NextApiRequest,
  res: NextApiResponse<IPessoa | ErrorResponse>
) {
  if (req.method === "DELETE") {
    try {
      const { pessoaId, conjugeId } = req.body;

      if (!pessoaId || !conjugeId) {
        return res
          .status(400)
          .json({ message: "Pessoa e cônjuge são obrigatórios" });
      }

      await connect();
      const dao = new PessoasDAO();

      const pessoa = await dao.findById(pessoaId);

      if (!pessoa) {
        return res.status(404).json({ message: "Pessoa não encontrada" });
      }

      if (!pessoa.conjugesId || !pessoa.conjugesId) {
        return res
          .status(400)
          .json({ message: "Cônjuge não encontrado na pessoa informada" });
      }

      pessoa.conjugesId = pessoa.conjugesId.filter((id) => id !== conjugeId);

      await dao.update(pessoaId, pessoa);

      return res.status(200).json(pessoa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    } finally {
      await disconnect();
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
