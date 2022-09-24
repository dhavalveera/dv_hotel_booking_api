const Sequelize = require('sequelize');

const sequelize = require('../DB_CONFIG.js/config');

const roomImages = sequelize.define('roomImages', {
  roomImagesId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  roomImageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isDeleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = roomImages;
