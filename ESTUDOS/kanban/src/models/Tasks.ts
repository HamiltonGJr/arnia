import { mongoose } from '../database/index';
import { type ITasks } from '../entities/ITasks';

const TaskSchema = new mongoose.Schema<ITasks>({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  updateAt: {
    type: Date,
    default: new Date()
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'users'
  }
});

export const Task = mongoose.model<ITasks>('tasks', TaskSchema);
