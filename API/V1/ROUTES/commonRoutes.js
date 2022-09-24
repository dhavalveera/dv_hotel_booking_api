const express = require('express');

const {
  signInController,
  forgotPasswordController,
  resetPasswordController,
} = require('../MODULES/HOTEL_MODULE/AUTH/CONTROLLER');

const router = express.Router();

// ********************************Hotel Staff Auth********************************
router.route('/staff/signin').post(signInController);
router.route('/staff/forget_password').post(forgotPasswordController);
router.route('/staff/reset_password/:token').post(resetPasswordController);

module.exports = router;
