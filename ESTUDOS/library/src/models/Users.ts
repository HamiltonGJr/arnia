import { mongoose } from '../database/index';
import { type IUser } from '../entities/IUsers';

const UserSchema = new mongoose.Schema<IUser>({
  fullname: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'Student'
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  borrowedBooks: {
    type: mongoose.Types.ObjectId,
    ref: 'books'
  }
});

export const User = mongoose.model<IUser>('users', UserSchema);
