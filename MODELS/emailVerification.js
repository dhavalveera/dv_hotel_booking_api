const Sequelize = require('sequelize');

const sequelize = require('../DB_CONFIG/config');

const emailVerifications = sequelize.define('emailVerifications', {
  emailVerificationId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  staffRegistrationId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = emailVerifications;
