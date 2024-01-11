import { mongoose } from '../database/index';
import { type IUser } from '../entities/IUser';

const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
    minLength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  }
});

export const User = mongoose.model<IUser>('users', UserSchema);
