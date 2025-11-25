// This program creates a data server which uses Express
// to retrieve data from a MongoDB instance to create three
// distinct endpoints on port 3600 of locahost.  Data which
// appears in the MongoDB “artifacts” table become
// JSON-formatted responses to requests on port 3600.
//
// “Route” is a crucial concept in Express.  This particular
// dataserver defines three routes:
// * ‘/’ returns a human-readable message;
// * ‘/artifacts’ returns a list of artifact names; and
// * `/artifacts/NAME’ returns details about NAME.
const express = require('express');
const app = express();
var db;
const dbName = 'my-test';
const port = 3600;
let table = 'artifact';
const url = 'mongodb://localhost:27017/';

const MongoClient = require('mongodb').MongoClient;

app.route('/').get((req, res) => {
  res.send("Recognized endpoints on this server include '/artifacts' and '/artifacts/NAME'.");
});
app.route('/artifacts').get(async (req, res) => {
  try {
    const artifacts = await db.collection(table).find().toArray();

    const result = artifacts.map((value) => ({
      scriptname: value.scriptname,
    }));
    res.send(result);
  } catch (err) {
    console.error('Error fetching artifacts:', err);
    res.status(500).send({ error: 'Failed to fetch artifacts' });
  }
});
app.route('/artifacts/:scriptname').get(async (req, res) => {
  try {
    const scriptname = req.params['scriptname'];
    const artifact = await db.collection(table).findOne({ scriptname: scriptname });

    if (!artifact) {
      return res.status(404).send({ error: 'Artifact not found' });
    }

    res.send({
      scriptname: artifact.scriptname,
      version: artifact.version,
      cdn: artifact.cdn,
    });
  } catch (err) {
    console.error('Error fetching artifact:', err);
    res.status(500).send({ error: 'Failed to fetch artifact' });
  }
});

// Connect to MongoDB and then start the server
async function startServer() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    db = client.db(dbName);

    app.listen(port, function () {
      console.log('Express server listening on port ' + port + '.');
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
}

startServer();
