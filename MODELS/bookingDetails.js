const Sequelize = require('sequelize');

const sequelize = require('../DB_CONFIG/config');

const bookingDetails = sequelize.define('bookingDetails', {
  bookingDetailId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  prefix: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  guestName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  guestEmail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  countryCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  guestContactNo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  specialRequests: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  checkInDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  checkOutDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  stayDuration: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  roomType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  noOfAdults: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  noOfChildrens: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  priceBeforeTax: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  taxableAmount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  totalPayableAmount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  paymentMethod: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = bookingDetails;
