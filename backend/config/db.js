import mongoose from "mongoose";
import dns from "node:dns";
import dotenv from "dotenv";
dotenv.config();

try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (e) {
  // ignore if restricted
}

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("db connected");
  } catch (error) {
    console.log("db error:", error.message || error);
  }
};

export default connectDb;