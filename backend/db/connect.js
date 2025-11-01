const dotenv = require('dotenv');
dotenv.config();
const { MongoClient } = require('mongodb');


let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  }

  MongoClient.connect(process.env.MONGO_URI)
    .then((client) => {
      _db = client.db(); // Usa la base de datos por defecto del cluster
      console.log('MongoDB connection established');
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) throw Error('Database not initialized!');
  return _db;
};

module.exports = { initDb, getDb };
