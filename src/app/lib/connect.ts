import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://daveallen9871:qduLOZlnyRrAtoiF@cluster0.glxhb.mongodb.net/');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
