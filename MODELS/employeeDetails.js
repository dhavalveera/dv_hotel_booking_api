const Sequelize = require('sequelize');

const sequelize = require('../DB_CONFIG/config');

const employeDetails = sequelize.define('employeDetails', {
  employeeId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  employeeType: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  employeeName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  employeeDesignation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  employeeContactNo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  joiningDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  govtDocumentType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nameOnGovtDocument: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numberOfGovtDocument: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  isDeleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = employeDetails;
