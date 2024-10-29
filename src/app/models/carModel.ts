// models/carModel.js
import mongoose from 'mongoose';

// Helper function to generate a random alphanumeric ID
const generateCarId = () => {
  return Math.random().toString(36).slice(2, 11); // Generates a random string of 9 characters
};

// Define the car schema
const carSchema = new mongoose.Schema({
  carId: { type: String, default: generateCarId }, // Randomly generated alphanumeric ID
  make: { type: String, required: true },           // Make of the car
  model: { type: String, required: true },          // Model of the car
  year: { type: String, required: true },           // Year of manufacture
  price: { type: String, required: true },          // Price of the car
  mileage: { type: String, required: true },        // Mileage of the car
  city: { type: String, required: true },           // City where the car is located
  color: { type: String, required: true },          // Color of the car
  assembly: { type: String, required: true },       // Assembly type (local/imported)
  engineCapacity: { type: String, required: true }, // Engine capacity of the car
  bodyType: { type: String, required: true },       // Body type (e.g., SUV, Sedan, etc.)
  lastUpdated: { type: Date, default: Date.now },   // Last updated timestamp
  adsRef: { type: String, required: true },         // Ad reference String
  features: [{ type: String }],                     // Array of features (e.g., ABS, airbags, etc.)
  images: [{ type: String }],                       // Array of image URLs
  sellerContact: { type: String, required: true },  // Seller contact information
  description: { type: String },                     // Optional description
  transmission: { type: String },                   // Optional transmission type
  fuelType: { type: String },                       // Optional fuel type (Petrol, Diesel, etc.)
}, { timestamps: true }); // Enables createdAt and updatedAt fields

// Export the Car model, using the existing model if it already exists
export default mongoose.models.Car || mongoose.model('Car', carSchema);
