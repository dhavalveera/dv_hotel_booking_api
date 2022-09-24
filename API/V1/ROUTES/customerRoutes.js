const express = require('express');

const customerGoogleAuthController = require('../MODULES/CUSTOMER_MODULE/AUTH/CONTROLLER');

const router = express.Router();

// ***************************** Customer Auth ******************************
router.route('/auth/google').post(customerGoogleAuthController);

module.exports = router;
