import { NextApiRequest, NextApiResponse } from 'next';
import PessoasDAO from '../../../utils/pessoasDAO';
import { connect, disconnect } from '../../../utils/mongo.config';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    
  
  const { filhoId, paiId, maeId } = req.body;

  if ( !filhoId || !paiId || !maeId ) {
    res.status(400).json({ message: 'Dados inválidos' });
    return;
  }

  const pessoasDAO = new PessoasDAO()


  try {
    await connect();

    await pessoasDAO.addFilho(paiId, maeId, filhoId);
    console.log(`Filho adicionado: ${filhoId}`);
    res.status(200).json({ message: 'Filho adicionado com sucesso' });
  } catch (error) {
    console.error(error);
   
    res.status(500).end();
  } finally {
    await disconnect();
  }
  

} else {
  res.status(405).json({ message: 'Método não permitido.' });

}
}