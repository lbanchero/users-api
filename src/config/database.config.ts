import mongoose from 'mongoose';

const connectDB = () => {
  const options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
  };

  mongoose
    .connect(process.env.MONGO_DB_URL, options)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log(err));
};

export default connectDB;