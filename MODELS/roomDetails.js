const Sequelize = require('sequelize');

const sequelize = require('../DB_CONFIG/config');

const roomDetails = sequelize.define('roomDetails', {
  roomDetailId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  roomType: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  guestCapacity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  noOfAdultsAllowed: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  noOfChildrensAllowed: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  roomImageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  bedType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rate: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  otherConvenience: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  roomDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  complimentaryServices: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cancellationPolicy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = roomDetails;
