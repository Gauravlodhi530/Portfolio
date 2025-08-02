import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGOOSE_URL;
    if (!mongoUrl) {
      console.error("MONGOOSE_URL environment variable is not set");
      return;
    }
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    // Don't exit process in production
    if (process.env.NODE_ENV === 'development') {
      process.exit(1);
    }
  }
};

export default connectDB;
