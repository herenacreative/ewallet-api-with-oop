import Response from "../helpers/response";
import AuthModel from '../models/auth';
import FormValidation from "../helpers/formValidation";
import {loginSchema, registerSchema} from '../helpers/joiSchema';
import {createToken, hashPassword} from '../helpers/security';
import bcrypt from 'bcrypt';

class AuthController {
    constructor(){
        console.log('Auth Controller Loaded!!!');
    }

    async login(req, res) {
        try{
            const setData = req.body;
            await new FormValidation(loginSchema, setData);
            
            const checkUser = await AuthModel.loginModel(setData.email);
            if(checkUser.length < 1){
                const message = `Sorry. We couldn't find an account with that email.`
                return new Response(res, null, message, 404, 'failed')
            }

            const userData = checkUser[0];
            const checkPass = bcrypt.compareSync(setData.password, userData.password);
            if(!checkPass){
                return new Response(res, null, 'Email or password is wrong', 401, 'failed')
            }

            delete userData.password;
            userData.tokenType = 'login';
            userData.tokenLogin = createToken({...userData});
            userData.tokenType = 'refresh';
            userData.tokenRefresh = createToken({...userData});
            delete userData.tokenType;

            return new Response(res, userData, 'Login Success', 200, 'success')
        }catch(error){
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

            if(!body.photo){
             body.photo = req.file ? req.file.filename : '-';
            }
            
            await new FormValidation(registerSchema, body);
            const checkUser = await AuthModel.loginModel(body.email)
            if(checkUser.length > 0){
                const message = `Sorry. This account is already registered.`;
                return new Response(res, null, message, 409, 'failed')
            }

            body.password = hashPassword(body.password);
            const register = await AuthModel.registerModel(body);
            if(register.affectedRows > 0){
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
}

export default new AuthController();