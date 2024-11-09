import mongoose from "mongoose";
const isConnected: { connect?: number | null } = { connect: null };
async function dbConnect() {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI environment variable is not defined.");
    throw new Error("MONGO_URI environment variable is missing");
  }
  console.log("MONGO_URI:", process.env.MONGO_URI);
  if (isConnected.connect) {
    console.log("Database is already connected");
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "datasets",
    });
    console.log("Database connected successfully:", conn.connection.host);
    isConnected.connect = conn.connection.readyState;
  } catch (error: any) {
    console.error("Database connection error:", error); 
    throw new Error("Failed to connect to the database");
  }
}
export default dbConnect;