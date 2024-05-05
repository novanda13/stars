import Joi from "joi";

const registerUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  name: Joi.string().max(100).required(),
  role_id: Joi.string().uuid().required(),
  phone: Joi.string().max(15),
  picture: Joi.string().max(100)
});

const loginSchema = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required()
});

const getUserValidation = Joi.string().max(100).required();

export { registerUserValidation, loginSchema, getUserValidation };
