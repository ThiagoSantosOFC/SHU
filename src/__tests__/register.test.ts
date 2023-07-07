import registerHandler, { ErrorResponse } from "../pages/api/auth/register";
import { NextApiRequest, NextApiResponse } from "next";
import { connect, disconnect } from "../utils/mongo.config";
import { UserDAO } from "../utils/usersDAO";
import UserModel, { IUser } from "../models/users";

const mockConnect = jest.fn();
const mockDisconnect = jest.fn();
jest.mock("../utils/mongo.config", () => ({
  connect: () => mockConnect(),
  disconnect: () => mockDisconnect(),
}));
jest.setTimeout(10000);

describe("registerHandler", () => {
  let req: NextApiRequest;
  let res: NextApiResponse;
  let userDAO: UserDAO;

  beforeEach(() => {
    req = {
      method: "POST",
      body: {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password",
      },
    } as unknown as NextApiRequest;

    res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    userDAO = new UserDAO(UserModel);

    jest.spyOn(userDAO, "create").mockResolvedValueOnce({
      _id: "user_id",
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password",
      role: "user",
      accountStatus: "ativo",
    } as IUser);
  }); 

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new user", async () => {
    await registerHandler(req, res);

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(mockDisconnect).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      _id: "user_id",
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password",
      role: "user",
      accountStatus: "ativo",
    });
  });

  it("should return an error if no user data is received", async () => {
    req.body = undefined;

    await registerHandler(req, res);

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(mockDisconnect).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Dados do user não recebidos.",
    });
  });

  it("should return an error if name is missing", async () => {
    req.body.name = undefined;

    await registerHandler(req, res);

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(mockDisconnect).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "Nome é obrigatório." });
  });

  it("should return an error if email is missing", async () => {
    req.body.email = undefined;

    await registerHandler(req, res);

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(mockDisconnect).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "Email é obrigatório." });
  });

  it("should return an error if password is missing", async () => {
    req.body.password = undefined;

    await registerHandler(req, res);

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(mockDisconnect).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Password é obrigatória.",
    });
  });

  it("should return an error if email is already registered", async () => {
    jest.spyOn(userDAO, "create").mockRejectedValue({ code: 11000 });

    await registerHandler(req, res);

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(mockDisconnect).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({ message: "Email já cadastrado." });
  });

  it("should return an error if an unexpected error occurs", async () => {
    jest.spyOn(userDAO, "create").mockRejectedValue({ code: 500 });

    await registerHandler(req, res);

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(mockDisconnect).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Erro inesperado." });
  });

});

