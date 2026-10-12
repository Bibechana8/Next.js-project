import mongoose from "mongoose";
const connectDb = async () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }

    try {
        const conn = await mongoose.connect(
            process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/chai",
            { serverSelectionTimeoutMS: 5000 }
        );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn.connection;
    } catch (error) {
        throw new Error(`MongoDB connection failed: ${error.message}`);
    }
}
export default connectDb;
