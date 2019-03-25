const express = require('express');
const app = express();
const Sequelize = require('sequelize');

require('dotenv').config();

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
    console.log('server listening on port:', PORT);
} )

// connection string
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/authdb');


// testing connection to local postgres
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// router
app.get('/', (req, res) => {
    console.log('server running on port:', PORT);
})