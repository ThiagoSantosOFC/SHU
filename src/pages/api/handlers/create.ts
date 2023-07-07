import { NextApiRequest, NextApiResponse } from 'next';
import PessoasDAO from '../../../utils/pessoasDAO';
import { IPessoa } from '../../../models/pessoa';

const pessoasDAO = new PessoasDAO();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    const pessoa: IPessoa = req.body;
    try {
      const createdPessoa = await pessoasDAO.create(pessoa);
      res.status(201).json(createdPessoa);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
