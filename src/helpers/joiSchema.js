import Joi from "joi";

export const loginSchema = {
	email: Joi.string().email({minDomainSegments: 2}).required(),
	password: Joi.string().trim().min(3).required()
}

export const registerSchema = {
	email: Joi.string().email({minDomainSegments: 2}).required(),
	password: Joi.string().trim().min(3).required(),
	username: Joi.string().min(3).required(),
	role: Joi.number().required(),
	fullname: Joi.string(),
	balance: Joi.number(),
	verify: Joi.number(),
	phone: Joi.string(),
	photo: Joi.string(),
	pin: Joi.number(),
}

// export const resetPasswordSchema = {
// 	otp: Joi.number(),
// }