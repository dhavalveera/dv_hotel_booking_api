const Joi = require('joi');

// **************************************** Auth ****************************************
const signUpSignInSchema = Joi.object({
  email: Joi.string()
    .invalid(...['null', 'undefined'])
    .required()
    .email(),
  password: Joi.string()
    .invalid(...['null', 'undefined'])
    .min(6)
    .max(30)
    .required(),
  isTCAgreeed: Joi.boolean(),
});

const resetPasswordSchema = Joi.object({
  password: Joi.string()
    .invalid(...['null', 'undefined'])
    .min(6)
    .max(30)
    .required(),
});

module.exports = {
  signUpSignInSchema,
  resetPasswordSchema,
};
