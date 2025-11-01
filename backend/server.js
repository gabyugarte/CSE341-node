const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const professionalRoutes = require('./routes/professional');


const port = process.env.PORT || 8080;
const app = express();

// Middlewares
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  })
  .use('/professional', professionalRoutes);

// Inicializar conexión y arrancar servidor
mongodb.initDb((err,mongodb) => {
  if (err) {
    console.error(' Error connecting to DB:', err);
  } else {
    app.listen(port, () => {
      console.log(` Connected to DB and listening on port ${port}`);
    });
  }
});

// app.use('/', require('./routes/professional'));

// app.listen(port, () => {
//   console.log(` Server running locally at http://localhost:${port}`);
// });