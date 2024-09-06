import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Ensure this is called at the top to load environment variables

const mongoUrl = process.env.MONGO_URI; // Now this should have a value
const dbName = "OZ-Server";
const mongoClient = new MongoClient(mongoUrl);

let db;

async function connectDB() {
  if (db) {
    return db; // Return existing db instance if already connected
  }

  try {
    await mongoClient.connect();
    console.log("Connected to MongoDB");
    db = mongoClient.db(dbName);
    return db;
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    throw err; // Re-throw the error to handle it elsewhere
  }
}

export default connectDB;
