import { NextApiRequest, NextApiResponse } from 'next';

import PessoasDAO from "../../../utils/pessoasDAO";
import { connect, disconnect } from "../../../utils/mongo.config";
interface ErrorResponse {
  message: string;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;
if (!id) {
    return res.status(400).json({ message: 'ID é obrigatório' });
  }



  try {
    await connect();
    const dao = new PessoasDAO();
    const pessoa = await dao.findById(id as string);
    if (!pessoa) {
      return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
    await dao.delete(id as string);

   
   
    return res.status(200).json(pessoa);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await disconnect();
  }

}
