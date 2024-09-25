// models/carModel.js
import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  mileage: { type: Number, required: true },
  sellerContact: { type: String, required: true },
  description: { type: String },
  color: { type: String },
  transmission: { type: String },
  fuelType: { type: String },
}, { timestamps: true });

export default mongoose.models.Car || mongoose.model('Car', carSchema);
