import mongoose from "mongoose";

export const connectDB = async () => {
    try {
      await mongoose.connect(process.env.uri);
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error('MongoDB Connection Error:', err.message);
      
    }
  };