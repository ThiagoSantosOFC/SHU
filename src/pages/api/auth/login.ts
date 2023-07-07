import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel, { IUser } from "../../../models/users";
import { connect, disconnect } from "../../../utils/mongo.config";
import { setCookie } from "nookies";
import { isEmailValid } from "../../../utils/validation";

import { sanitizeHtmlForLogin } from "../../../utils/sanitizeHtml";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Conecta com o banco de dados
      await connect();

      const { email, password } = req.body;

      const sanitizedEmail = sanitizeHtmlForLogin(email);
      const sanitizedPassword = sanitizeHtmlForLogin(password);

      // Validação do email
      if (!isEmailValid(sanitizedEmail)) {
        res.status(400).json({ message: "Endereço de email inválido!" });
        return;
      }

      // Busca no banco de dados pelo usuário que está tentando fazer login
      const user: IUser | null = await UserModel.findOne({ email });

      if (user) {
        // Compara a senha fornecida pelo usuário com a senha armazenada no banco de dados
        const isPasswordValid = await bcrypt.compare(sanitizedPassword, user.password);

        if (isPasswordValid) {
          // Gera um token JWT
          const token = jwt.sign(
            { 
              userId: user._id,
              name: user.name,
              email: user.email,
              role: user.role,
              accountStatus: user.accountStatus,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "14d",
            }
          );

          // Define o token como um cookie seguro
          setCookie({ res }, "token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 14, // expira em 14 dias
            path: "/",
            sameSite: "strict",
          });


          res.status(200).json({message: "Login realizado com sucesso!" });
        } else {
          res.status(401).json({ message: "Palavra-passe incorreta!" });
        }
      } else {
        // Atraso aleatório para evitar ataques de força bruta
        await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 2000)));

        res.status(404).json({ message: "Utilizador não encontrado!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao realizar login!", error });
    } finally {
      // Desconecta do banco de dados
      await disconnect();
    }
  } else {
    // Atraso aleatório para evitar ataques de força bruta
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 2000)));

    res.status(405).json({ message: "Método não permitido" });
  }
}
