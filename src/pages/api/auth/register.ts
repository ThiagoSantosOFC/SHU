import { NextApiRequest, NextApiResponse } from "next";
import { UserDAO } from "../../../utils/usersDAO";
import UserModel, { IUser } from "../../../models/users";
import { connect, disconnect } from "../../../utils/mongo.config";
import { setCookie, parseCookies } from "nookies";
import { sendEmail } from "../../../utils/email";

export interface ErrorResponse {
  message: string;
}

const userDAO = new UserDAO(UserModel);

export default async function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const sanitizeHTML = (str: string) => {
      const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
      return str.replace(regex, '');
    };

    const name = sanitizeHTML(req.body.name);
    const email = sanitizeHTML(req.body.email);
    const password = sanitizeHTML(req.body.password);

    try {
      // Connect to the database
      await connect();

      // Check if email already exists
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        res.status(409).json({
          message:
            "Este email já está registrado. Se possui este email tente dar login ou entre em contacto com o suporte!",
        });
        return;
      }

      // Generate a random verification code/token
    //  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

     // const verificationLink = `https://example.com/verify-email?token=${verificationCode}`;
     // await sendEmail(email, "Verify your email", `<a href="${verificationLink}">Click here to verify your email</a>`);

      const newUser: IUser = new UserModel({
        name,
        email,
        password,
        role: "user",
        accountStatus: "ativo",
      // // verificationCode
      });

      await userDAO.create(newUser);
      //  Send the verification email to the user
  //    await sendEmail(createdUser.email, createdUser.verificationCode, "Verify your email");
  
      res.status(201).json({ message: "Utilizador criado com sucesso!", });

    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro : " + error });
    } finally {
      // Disconnect from the database
      await disconnect();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}