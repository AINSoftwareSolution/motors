// models/carModel.js
import mongoose from 'mongoose';

// Helper function to generate a random alphanumeric ID
const generateCarId = () => {
  return Math.random().toString(36).slice(2, 11); // Generates a random string of 9 characters
};

const carSchema = new mongoose.Schema({
  carId: { type: String, default: generateCarId }, // Randomly generated alphanumeric ID
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: String, required: true },
  price: { type: String, required: true },
  mileage: { type: String, required: true },
  city: { type: String, required: true },          // Added city field
  color: { type: String, required: true },         // Added color field
  assembly: { type: String, required: true },      // Added assembly field (local/imported)
  engineCapacity: { type: String, required: true },// Added engine capacity field
  bodyType: { type: String, required: true },      // Added body type field (SUV, Sedan, etc.)
  lastUpdated: { type: Date, default: Date.now },  // Added last updated field, defaulting to current date
  adsRef: { type: String, required: true },        // Added ad reference String
  features: [{ type: String }],                    // Added array of features (e.g., ABS, airbags, etc.)
  images: [{ type: String }],                      // Added array of image URLs
  sellerContact: { type: String, required: true }, // Seller contact String
  description: { type: String },                   // Optional description
  transmission: { type: String },                  // Optional transmission type
  fuelType: { type: String },                      // Optional fuel type (Petrol, Diesel, etc.)
}, { timestamps: true });

export default mongoose.models.Car || mongoose.model('Car', carSchema);
