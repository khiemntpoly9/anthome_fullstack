const { Sequelize } = require('sequelize');

const DB_NAME = process.env.DB_NAME;
// const DB_NAME = 'anthome_db';
const DB_USER = process.env.DB_USER;
// const DB_USER = 'adminfpoly';
const DB_PASS = process.env.DB_PASS;
// const DB_PASS = '12345';
const DB_HOST = process.env.DB_HOST;
// const DB_HOST = '45.77.248.162';

// asm-angular
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully!');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

module.exports = sequelize;
