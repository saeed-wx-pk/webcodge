import mongoose, { Mongoose } from 'mongoose';

// Define the MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Define a global variable for caching (this needs to exist in global scope)
declare global {
  var mongoose: { conn: Mongoose | null, promise: Promise<Mongoose> | null };
}

let cached = global.mongoose;

// Initialize cached variable if not already done
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) {
    // If we already have a connection, use it
    return cached.conn;
  }

  if (!cached.promise) {
    // No longer need to specify deprecated options like useNewUrlParser or useUnifiedTopology
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => mongooseInstance);
  }

  // Await the promise and cache the connection
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
