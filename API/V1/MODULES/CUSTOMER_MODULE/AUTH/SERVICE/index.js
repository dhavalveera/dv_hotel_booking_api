// customerRegistration - Model (Table)
const customerRegistrations = require('../../../../../../MODELS/customerRegistrations');

const customerGoogleAuthService = async (name, email) => {
  try {
    const isUserAlreadyExists = customerRegistrations.find({
      email: email,
    });

    if (!isUserAlreadyExists) {
      const resp = await customerRegistrations.create({
        name,
        email,
      });

      if (resp) {
        return { statusCode: 200, message: 'User Created Successfully' };
      } else {
        return {
          statusCode: 400,
          message: 'Unable to Process.',
        };
      }
    } else {
      return {
        statusCode: 200,
        message: 'User Already Exists, Login Successful',
      };
    }
  } catch (err) {
    return {
      statusCode: 400,
      message: 'Unable to Process.',
    };
  }
};

module.exports = customerGoogleAuthService;
