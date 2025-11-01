const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  try {
    const db = mongodb.getDb();
    const result = await db.collection('professionals').find().toArray();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching professionals data' });
  }
};

module.exports = { getData };
