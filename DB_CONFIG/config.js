const Sequelize = require('sequelize');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: false,
    dialectOptions: {
      useUTC: false, // for reading from database
    },
    timezone: '+05:30', // for writing to database
  }
);

(async () => {
  try {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });

    // clean wipe
    // await sequelize.sync({ force: true });

    // alter Table
    await sequelize.sync({ alter: true });

    // sync Table
    // await sequelize.sync();
  } catch (error) {
    console.log(
      'Error Occurred at == /DB_CONFIG/config.js - Catch Block',
      error
    );
  }
})();

module.exports = sequelize;
