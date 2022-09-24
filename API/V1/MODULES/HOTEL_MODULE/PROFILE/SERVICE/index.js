const { getSingleDataByCondition } = require('../../../../DB/wrapper');

const hotelStaffRegistrations = require('../../../../../../MODELS/hotelStaffRegistration');

const getStaffProfileService = async (staffRegistrationId, route, method) => {
  const getSingleDataCondition = {
    hotelStaffRegistrationId: staffRegistrationId,
    isDeleted: false,
  };

  const staffProfileData = await getSingleDataByCondition(
    hotelStaffRegistrations,
    getSingleDataCondition
  );

  if (staffProfileData) {
    console.log(
      `route = ${route}  method = ${method} staffId = ${staffRegistrationId} payload = ${staffProfileData}`
    );
    return { statusCode: 200, payload: staffProfileData };
  }
  console.log(
    `route = ${route}  method = ${method} staffId = ${staffRegistrationId} payload = 'No Staff Details Found'`
  );
  return { statusCode: 404, payload: 'No Staff Details Found' };
};

module.exports = getStaffProfileService;
