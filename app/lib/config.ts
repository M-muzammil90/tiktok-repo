import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL!;
if (!MONGO_URL) {
  throw new Error("please check your connection");
}
const cached = global.mongoose;
if (!cached) {
  const cached = (global.mongoose = { conn: null, promise: null });
}

export async function Databaseconneaction() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const options = {
      bufferCommands: true,
      maxPoolSize: 10,
    };
    mongoose.connect(MONGO_URL, options).then(() => mongoose.connection);
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
}
