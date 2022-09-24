const {
  signInService,
  forgotPasswordService,
  resetPasswordService,
} = require('../SERVICE');

const signInController = async (req, res, next) => {
  try {
    const signInDetailsPaylaod = req.body;
    const route = req.originalUrl;
    const { method } = req;
    const { statusCode, payload } = await signInService(
      signInDetailsPaylaod,
      route,
      method
    );
    res.status(statusCode).send({ payload });
  } catch (err) {
    next(err);
  }
};

const forgotPasswordController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const { method } = req;
    const route = req.originalUrl;
    const { statusCode, payload } = await forgotPasswordService(
      email,
      route,
      method
    );
    res.status(statusCode).send({ payload });
  } catch (err) {
    next(err);
  }
};

const resetPasswordController = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    const { method } = req;
    const route = req.originalUrl;
    const { statusCode, payload } = await resetPasswordService(
      token,
      password,
      route,
      method
    );
    res.status(statusCode).send({ payload });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signInController,
  forgotPasswordController,
  resetPasswordController,
};
