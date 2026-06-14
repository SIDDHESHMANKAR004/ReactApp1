
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://SkshoesAdmin:hV7jUz38rLOmLbYR@cluster0.mongodb.net/ecommerce?retryWrites=true&w=majority';

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully ✅');
  } catch (error) {
    console.error('MongoDB connection error:  ', error);
    process.exit(1);
  }
};

export { connectDB, mongoose };
