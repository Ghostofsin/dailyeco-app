"use server"
import mongoose from 'mongoose';

const connection = {};

function getMongoDbUri() {
  let mongodbUri;

  if (process.env.NODE_ENV === 'production') {
      mongodbUri = process.env.MONGODB_URI;
  } else {
      mongodbUri = process.env.MONGO_DB;
  }

  return mongodbUri
}

export const connectDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    // const db = await mongoose.connect(getMongoDbUri());
    const db = await mongoose.connect(process.env.MONGO_DB);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
