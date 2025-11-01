// const mongodb = require('../db/connect');

// const getData = async (req, res, next) => {
//   try {
//     // getDb() ya devuelve la base de datos
//     const db = mongodb.getDb();
//     const result = await db.collection('users').find().toArray(); 

//     if (!result || result.length === 0) {
//       return res.status(404).json({ message: 'No users found in the database' });
//     }

//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(result); 
//   } catch (err) {
//     console.error('❌ Error fetching users data:', err);
//     res.status(500).json({ message: 'Error fetching users data' });
//   }
// };

// module.exports = { getData };
const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  try {
    const db = mongodb.getDb();
    const result = await db.collection('user').find().toArray();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    console.error('Error fetching users data:', err);
    res.status(500).json({ message: 'Error fetching users data' });
  }
};

module.exports = { getData };
