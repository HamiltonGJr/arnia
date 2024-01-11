import { Schema, model } from 'mongoose';

const carSchema = new Schema({
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  color: String,
  fuel: {
    type: String,
    default: 'Flex'
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'brands'
  }
});

export const Car = model('cars', carSchema);
