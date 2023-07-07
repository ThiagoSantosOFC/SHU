import { NextApiRequest, NextApiResponse } from 'next';
import PessoasDAO from '../../../utils/pessoasDAO';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 
    const { pessoaId, conjugeId } = req.body;

    const pessoasDAO = new PessoasDAO();
    try {
        await pessoasDAO.addConjuge(pessoaId, conjugeId);
        console.log(`Cônjuge ${conjugeId} adicionado à pessoa ${pessoaId}`);
        res.status(200).json({ message: 'Cônjuge adicionado com sucesso' });
      } catch (error) {
        console.error(error);
        res.status(500).end();
      }
      
}

//

