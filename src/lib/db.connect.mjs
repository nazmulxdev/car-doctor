import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!uri) throw new Error("Add MONGODB_URI in .env.local file");

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function getCollection() {
  const client = await clientPromise;
  const db = client.db("car-doctor");

  return {
    servicesCollection: db.collection("services"),
  };
}

export default clientPromise;
