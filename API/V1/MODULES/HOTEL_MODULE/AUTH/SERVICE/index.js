// Bcrypt to Hash the Password
const bcrypt = require('bcryptjs');

// JsonWebToken to sign the Credentials
const jwt = require('jsonwebtoken');

// MODELS = Table
const hotelStaffRegistrations = require('../../../../../../MODELS/hotelStaffRegistration');
const emailVerifications = require('../../../../../../MODELS/emailVerification');

// Validation Schema
const {
  signUpSignInSchema,
  resetPasswordSchema,
} = require('../../../../VERSION_HELPERS/VALIDATIONS');

// Wrapper Queries
const {
  loginQuery,
  getSingleDataByCondition,
  updateSingleData,
} = require('../../../../DB/wrapper');

const signInService = async (signInDetailsPayload, route, method) => {
  console.log(`route = ${route}     method=${method}`);

  await signUpSignInSchema.validateAsync({
    ...signInDetailsPayload,
  });

  const { email, password } = signInDetailsPayload;

  const isRegistrationAvailable = await loginQuery(hotelStaffRegistrations, {
    email,
  });

  if (isRegistrationAvailable) {
    if (isRegistrationAvailable.isEmailVerified === false) {
      return {
        statusCode: 401,
        payload: 'Email Not Verified, Please Verify your Email Address',
      };
    }

    const verifiedPassword = await bcrypt.compare(
      password,
      isRegistrationAvailable.password
    );

    if (verifiedPassword) {
      const token = jwt.sign(
        {
          id: isRegistrationAvailable.hotelStaffRegistrationId,
          email,
          userName: isRegistrationAvailable.name,
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      return { statusCode: 200, payload: { token } };
    }
  }
  return { statusCode: 401, payload: 'Invalid Credentials' };
};

const forgotPasswordService = async (email, route, method) => {
  const registrationData = await getSingleDataByCondition(
    hotelStaffRegistrations,
    { email }
  );

  await updateSingleData(
    hotelStaffRegistrations,
    { isPasswordAlreadySet: false },
    { email }
  );

  if (registrationData) {
    const payload = {
      hotelStaffRegistrationId: registrationData.hotelStaffRegistrationId,
      email: registrationData.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    // Email

    console.log(`route = ${route}     method=${method}   userEmail=${email}`);

    return { statusCode: 200, payload: 'Email Sent Successfully!' };
  }

  return { statusCode: 400, payload: 'Unable to process your request!' };
};

const resetPasswordService = async (token, password, route, method) => {
  await resetPasswordSchema.validateAsync({
    password,
  });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded.email) {
    const hashedPassword = bcrypt.hash(password);
    const result = await updateSingleData(
      hotelStaffRegistrations,
      { password: hashedPassword },
      { hotelStaffRegistrationId: decoded.hotelStaffRegistrationId }
    );

    if (result) {
      await updateSingleData(
        hotelStaffRegistrations,
        { isPasswordAlreadySet: true },
        { hotelStaffRegistrationId: decoded.hotelStaffRegistrationId }
      );
      return { statusCode: 200, payload: 'Successful' };
    }
  }
  console.log(`route = ${route}   method = ${method}`);
  return { statusCode: 400, payload: 'Unable to process your request' };
};
module.exports = {
  signInService,
  forgotPasswordService,
  resetPasswordService,
};
