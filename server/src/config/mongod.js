import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URL = process.env.MONGODB_URL;
const MONGODB = {
  connectdb: async () => {
    try {
      await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`connect successfully: "Mongodb"`);
    } catch (err) {
      console.log("connect false \n", err);
    }
  },
};
export default MONGODB;
