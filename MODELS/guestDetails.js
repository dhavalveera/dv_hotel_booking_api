const Sequelize = require('sequelize');

const sequelize = require('../DB_CONFIG/config');

const guestDetails = sequelize.define('guestDetails', {
  guestDetailId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobileNo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  roomNo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  visitDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  checkInTime: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  checkOutTime: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  purposeOfVisit: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = guestDetails;
