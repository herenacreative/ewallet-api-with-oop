import Response from "../helpers/response";
import AuthModel from '../models/auth';
import UsersModel from '../models/users';
import FormValidation from "../helpers/formValidation";
import { loginSchema, registerSchema } from '../helpers/joiSchema';
import { createToken, hashPassword } from '../helpers/security';
import bcrypt from 'bcrypt';
import { totp } from 'otplib';
"use strict";
import nodemailer from 'nodemailer';
import config from '../configs/server';

class AuthController {
    constructor() {
        console.log('Auth Controller Loaded!!!');
    }

    async login(req, res) {
        try {
            const setData = req.body;
            await new FormValidation(loginSchema, setData);

            const checkUser = await AuthModel.loginModel(setData.email);
            if (checkUser.length < 1) {
                const message = `Sorry. We couldn't find an account with that email.`
                return new Response(res, null, message, 404, 'failed')
            }

            const userData = checkUser[0];
            const checkPass = bcrypt.compareSync(setData.password, userData.password);
            if (!checkPass) {
                return new Response(res, null, 'Email or password is wrong', 401, 'failed')
            }

            delete userData.password;
            userData.tokenType = 'login';
            userData.tokenLogin = createToken({ ...userData });
            userData.tokenType = 'refresh';
            userData.tokenRefresh = createToken({ ...userData });
            delete userData.tokenType;

            return new Response(res, userData, 'Login Success', 200, 'success')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'Internal Server Error', 500, 'failed')
        }
    }

    async register(req, res) {
        try {
            const body = req.body;
            body.role = req.body.role || 3;
            body.pin = req.body.pin || 0;
            body.phone = req.body.phone || '-';
            body.verify = req.body.verify || 0;
            body.balance = req.body.balance || 0;
            body.fullname = req.body.fullname || '-';
            // body.photo = req.body.photo || `${ config.imageUrlPath(req) }avatar.png`;
            if (!body.photo) {
                body.photo = req.file ? req.file.filename : `${config.imageUrlPath(req)}avatar.png`;
            }

            await new FormValidation(registerSchema, body);
            const checkUser = await AuthModel.loginModel(body.email)
            if (checkUser.length > 0) {
                const message = `Sorry. This account is already registered.`;
                return new Response(res, null, message, 409, 'failed')
            }

            body.password = hashPassword(body.password);
            const register = await AuthModel.registerModel(body);
            if (register.affectedRows > 0) {
                const payload = {
                    id: register.insertId,
                    email: body.email,
                    username: body.username,
                    role: body.role,
                }
                return new Response(res, payload, 'Success Register', 201, 'success')
            }
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async resetPassword(req, res) {
        try {
            const body = req.body;
            let id = 0;

            if (body.otp) {
                const isValid = totp.check(body.otp, process.env.OTP_KEY);
                if (!isValid) {
                    const message = 'otp is not valid';
                    return new Response(res, null, message, 409, 'failed')
                }
                delete body.otp;
            }

            if (body.email) {
                // checking if data is exists or not
                const oldData = await UsersModel.getEmailUserModel(body.email);
                if (oldData.length < 1) {
                    const message = `Data with email ${id} not found`;
                    return new Response(res, null, message, 409, 'failed')
                }
                id = oldData[0].id;
            }

            body.password = hashPassword(body.password);
            const result = await UsersModel.updateData(body, id);
            if (result.affectedRows > 0) {
                return new Response(res, result, 'Success', 201, 'success')
            } else {
                const message = `Update data ${body.email} failed `;
                return new Response(res, null, message, 500, 'failed')
            }
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async requestOTP(req, res) {
        try {
            const body = req.body;
            console.log('object', body)
            totp.options = {
                digits: 6,
                step: 60 * 5
            };
            const token = totp.generate(process.env.OTP_KEY);
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            });

            switch (body.requestType) {
                case 'resetPassword':
                    // send mail with defined transport object
                    await transporter.sendMail({
                        from: process.env.EMAIL,
                        to: body.email,
                        subject: 'OTP (One Time Password)',
                        text: `This is shown if you request to reset your password at Saku-saku. OTP : ${token}`,
                    });
                    break;

                default:
                    break;
            }
            const message = {
                otp: token,
                note: 'This is for development only!'
            }
            return new Response(res, message, 'Success', 201, 'success')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async confirmOTP(req, res) {
        try {
            const body = req.body;

            if (body.otp) {
                const isValid = totp.check(body.otp, process.env.OTP_KEY);
                if (!isValid) {
                    const message = `otp is not valid.`;
                    return new Response(res, null, message, 400, 'failed')
                }
                const message = `otp is valid `;
                return new Response(res, message, 'Success', 201, 'success')
            } else {
                const message = `otp doesn't exists! `;
                return new Response(res, message, 'Success', 404, 'success')
            }
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }
}

export default new AuthController();