import { NextApiRequest, NextApiResponse } from 'next';
import PessoasDAO from '../../../utils/pessoasDAO';
import { IPessoa } from "../../../models/pessoa";
import { connect, disconnect } from '../../../utils/mongo.config';

export interface ErrorResponse {
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<IPessoa[] | ErrorResponse>) {
  if (req.method === 'GET') {
    try {
      await connect();

      const pessoasDAO = new PessoasDAO();
      const pessoas = await pessoasDAO.findAll();
   
      res.status(200).json(pessoas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao buscar os dados.' });
    } finally {
      await disconnect();
    }
  } else {
    res.status(405).json({ message: 'Método não permitido.' });
  }
}