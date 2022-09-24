const express = require('express');

const getStaffProfileController = require('../MODULES/HOTEL_MODULE/PROFILE/CONTROLLER');
const addRoomController = require('../MODULES/HOTEL_MODULE/ROOM/CONTROLLER');

const router = express.Router();

// ***************************** Profile ******************************
router.route('/myprofile').get(getStaffProfileController);

// ***************************** Add Rooms ******************************
router.route('/addroom').post(addRoomController);

module.exports = router;
