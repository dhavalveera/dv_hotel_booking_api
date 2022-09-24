// Module from Service Dir
const customerGoogleAuthService = require('../SERVICE');

const customerGoogleAuthController = async (req, res, next) => {
  try {
    const { method } = req;
    const route = req.originalUrl;
    const { name, email } = req.body;

    const { statusCode, message } = await customerGoogleAuthService(
      name,
      email,
      method,
      route
    );

    res.status(statusCode).send({ message });
  } catch (error) {
    next(error);
  }
};

module.exports = customerGoogleAuthController;
