
import connectDB from "../config/db.js";
const PORT = process.env.PORT || 3000
import express from "express";

const app = express();


async function startServer() {

    try {
      await connectDB();
      console.log("Database connection established successfully.");
  
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error("Failed to connect to the database. Server not started.", error);
      process.exit(1); // Exit the process with a failure code
    }
  }
  export {startServer};