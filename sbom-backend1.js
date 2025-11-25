const { MongoClient } = require('mongodb');

// Connection URL for local development (no auth)
const url = 'mongodb://localhost:27017/';
const dbName = 'my-test';
const table = 'artifact';

const client = new MongoClient(url);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection(table);

  // the following code examples can be pasted here...
  const artifact = await collection.find().toArray();
  console.log(artifact);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
