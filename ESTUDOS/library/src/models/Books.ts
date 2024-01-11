import { mongoose } from '../database/index';
import { type IBooks } from '../entities/IBooks'

const BookSchema = new mongoose.Schema<IBooks>({
  title: {
    type: String,
    required: true,
    minLength: 3
  },
  description: {
    type: String
  },
  author: {
    type: String,
    required: true,
    minLength: 3
  },
  releasedYear: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    minLength: 3
  },
  coverPicture: {
    type: String
  },
  loanedTo: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
    default: null
  }
});

export const Book = mongoose.model<IBooks>('books', BookSchema);
