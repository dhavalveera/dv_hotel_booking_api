const Sequelize = require('sequelize');

const sequelize = require('../DB_CONFIG/config');

const customerRegistrations = sequelize.define('customerRegistrations', {
  customerRegistrationId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  profilePicUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = customerRegistrations;
