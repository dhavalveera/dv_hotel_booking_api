const getStaffProfileService = require('../SERVICE');

const getStaffProfileController = async (req, res, next) => {
  try {
    const { staffRegistrationId } = req.body;
    const { method } = req;
    const route = req.originalUrl;
    const { statusCode, payload } = await getStaffProfileService(
      staffRegistrationId,
      route,
      method
    );
    res.status(statusCode).send({ payload });
  } catch (err) {
    next(err);
  }
};

module.exports = getStaffProfileController;
