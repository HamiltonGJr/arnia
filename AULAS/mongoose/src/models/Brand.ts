import { Schema, model } from 'mongoose';

const brandSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

export const Brand = model('brands', brandSchema);
