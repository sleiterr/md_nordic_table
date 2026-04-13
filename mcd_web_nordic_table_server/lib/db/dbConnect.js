import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config({ path: `.env.local`, override: true });

if (!process.env.MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = {
    defaultConn: null,
    defaultPromise: null,
    namedConns: new Map(),
    namedPromises: new Map(),
  };
}

export default async function dbConnect() {
  if (cached.defaultConn) return cached.defaultConn;

  const dbName = process.env.DB_NAME || "mcd-nordic-table";
  const opts = { bufferCommands: false, dbName };

  if (!cached.defaultPromise) {
    cached.defaultPromise = mongoose
      .connect(process.env.MONGODB_URI, opts)
      .then((m) => {
        console.log("Connected to MongoDB (default):", dbName);
        return m.connection;
      });
  }

  try {
    cached.defaultConn = await cached.defaultPromise;
  } catch (e) {
    cached.defaultPromise = null;
    throw e;
  }

  return cached.defaultConn;
}

export async function getDbConnection(dbName) {
  if (!dbName) throw new Error("getDbConnection requires a dbName");

  if (cached.namedConns.has(dbName)) return cached.namedConns.get(dbName);

  if (!cached.namedPromises.has(dbName)) {
    const p = mongoose
      .createConnection(process.env.MONGODB_URI, {
        bufferCommands: false,
        dbName,
      })
      .asPromise()
      .then((conn) => {
        console.log("Connected to MongoDB (named):", dbName);
        return conn;
      });

    cached.namedPromises.set(dbName, p);
  }

  try {
    const conn = await cached.namedPromises.get(dbName);
    cached.namedConns.set(dbName, conn);
    return conn;
  } catch (e) {
    cached.namedPromises.delete(dbName);
    throw e;
  }
}
