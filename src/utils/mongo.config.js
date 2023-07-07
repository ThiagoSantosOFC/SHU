import mongoose from 'mongoose';


const url = process.env.MONGODB_URI;

let cachedDb = null;

export const connect = async () => {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const db = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB database connection established successfully');
    cachedDb = db;
    return db;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const disconnect = async () => {
  if (cachedDb) {
    await cachedDb.disconnect();
    console.log('MongoDB database connection closed');
    cachedDb = null;
  }
};
