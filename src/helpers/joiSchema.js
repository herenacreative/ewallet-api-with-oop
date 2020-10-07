import Joi from "joi";

export const loginSchema = {
	email: Joi.string().email({minDomainSegments: 2}).required(),
	password: Joi.string().trim().min(3).required()
}

export const registerSchema = {
	email: Joi.string().email({minDomainSegments: 2}).required(),
	password: Joi.string().trim().min(3).required(),
	username: Joi.string().min(3).required(),
	photo: Joi.string()
}