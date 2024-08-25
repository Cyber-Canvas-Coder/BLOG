import mongoose from "mongoose";

const connection = async (DB_URL) => {
  const URL = DB_URL;
  // Specify your database name here
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting to the database:", error.message);
  }
};

export default connection;
