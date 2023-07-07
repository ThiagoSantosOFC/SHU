import { Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUser } from '../models/users';

export interface IUserDAO {
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser | null>;
  create(user: IUser): Promise<IUser>;
  update(id: string, user: IUser): Promise<IUser | null>;
  delete(id: string): Promise<boolean>;
}

export class UserDAO implements IUserDAO {
  constructor(private userModel: Model<IUser>) {}

  async findAll(): Promise<IUser[]> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<IUser | null> {
    return this.userModel.findById(id);
  }

  async create(user: IUser): Promise<IUser> {
    // Criptografando a password do usuário
    const salt = await bcrypt.genSalt(255);
    user.password = await bcrypt.hash(user.password, salt);

    return this.userModel.create(user);
  }

  async update(id: string, user: IUser): Promise<IUser | null> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, user, { new: true });
    return updatedUser || null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.userModel.findByIdAndDelete(id);
    return Boolean(result);
  }
}
