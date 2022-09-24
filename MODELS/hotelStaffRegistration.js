const Sequelize = require('sequelize');

const sequelize = require('../DB_CONFIG/config');

const hotelStaffRegistrations = sequelize.define('hotelStaffRegistrations', {
  hotelStaffRegistrationId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  profilePic: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isEmailVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  isPasswordAlreadySet: {
    type: Sequelize.BOOLEAN,
  },
  isTCAgreed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  dateJoined: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastLogin: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isDeleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = hotelStaffRegistrations;
