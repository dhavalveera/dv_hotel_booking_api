const bookingDetails = require('../../../MODELS/bookingDetails');
const customerRegistrations = require('../../../MODELS/customerRegistrations');
const employeeDetails = require('../../../MODELS/employeeDetails');
const hotelStaffRegistrations = require('../../../MODELS/hotelStaffRegistration');
const roomDetails = require('../../../MODELS/roomDetails');
const roomImages = require('../../../MODELS/roomImages');
const emailVerifications = require('../../../MODELS/emailVerification');

// Associations
require('./associations');

// Room Details + Room Images = roomImagesId will be in roomDetails Table
roomDetails.hasMany(roomImages, { foreignKey: { allowNull: true } });
roomImages.belongsTo(roomDetails);

// Booking Details + Customer Registrations = customerRegistrationId will be in bookingDetais Table
bookingDetails.hasMany(customerRegistrations, {
  foreignKey: { allowNull: false },
});
bookingDetails.hasMany(roomDetails, { foreignKey: { allowNull: false } });
customerRegistrations.belongsTo(bookingDetails);

// Hotel Staff Registrations + Email Verification = hotelStaffRegistrationId will be in emailVerifications Table
emailVerifications.hasOne(hotelStaffRegistrations, {
  foreignKey: { allowNull: false },
});
hotelStaffRegistrations.belongsTo(emailVerifications);
