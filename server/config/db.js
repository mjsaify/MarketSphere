import mongoose from "mongoose";
import { DB_NAME, DB_URI } from '../constant.js'

const connectDB = async () => {
    await mongoose.connect(`${DB_URI}${DB_NAME}`);
    console.log("Database Connected");
};
export default connectDB;