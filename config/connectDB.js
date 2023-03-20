const { Sequelize } = require('sequelize');

// const DB_NAME = process.env.DB_NAME;
const DB_NAME = 'anthomex_anthome';
// const DB_USER = process.env.DB_USER;
const DB_USER = 'anthomex_khiemntps16018';
// const DB_PASS = process.env.DB_PASS;
const DB_PASS = 'YL7riBuu2sdJ4Qy';
// const DB_HOST = process.env.DB_HOST;
const DB_HOST = '103.200.23.120';

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
