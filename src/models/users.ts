import mongoose, { Document, Model } from 'mongoose';

export interface IUser extends Document {
  password: string;
  name: string;
  email: string;
  role: string;
  accountStatus: string;
  createdAt: Date;
  updatedAt: Date;
  verificationCode: string;
  // outros campos que julgue necessário
}

const UserSchema = new mongoose.Schema(
  {
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    accountStatus: { type: String, required: true },
    verificationCode: { type: String, required: true },
    // outros campos que julgue necessário
  },
  { timestamps: true }
);

let UserModel: Model<IUser>;

try {
  UserModel = mongoose.model<IUser>('User');
} catch (error) {
  UserModel = mongoose.model<IUser>('User', UserSchema);
}

export default UserModel;
