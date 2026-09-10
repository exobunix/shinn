import { MongoClient } from "mongodb";
import dns from "dns";

// Fix for Node.js SRV record resolution on Windows / local router DNS
try {
  dns.setDefaultResultOrder("ipv4first");
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch (err) {
  // safe fallback
}

const DEFAULT_URI = "mongodb+srv://adarshdeepsachan_db_user:9ihBYhjklr6aId6x@cluster0.qludt0h.mongodb.net/shine?retryWrites=true&w=majority&appName=Cluster0";

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export function getMongoClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI || DEFAULT_URI;

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  }

  if (!clientPromise) {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
  return clientPromise;
}

export default getMongoClientPromise;

export async function getDatabase(dbName = process.env.MONGODB_DB || "shine") {
  const promise = getMongoClientPromise();
  const connectedClient = await promise;
  return connectedClient.db(dbName);
}
