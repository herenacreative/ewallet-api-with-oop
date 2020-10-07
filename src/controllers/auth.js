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
            // if(comparePassword(userData.password, setData.password)){
            //     return new Response(res, null, 'Email or password is wrong', 401, 'failed')
            // }
            if(!checkPass){
                return new Response(res, null, 'Email or password is wrong', 401, 'failed')
            }

            delete userData.password;
            // console.log(userData, 'us')
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
            if(!body.photo){
            body.photo = req.file ? req.file.filename : '';
        }
            // body.photo = req.file ? req.file.filename : '';
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
                    // username: body.username
                }
                return new Response(res, payload, 'Success Register', 201, 'success')
            }
            // const result = await AuthModel.registerModel(setData);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async getAllUser(req, res) {
        const search = req.query.search || ''
        const sortBy = req.query.sortBy || 'fullname'
        const sortType = req.query.sortType || 'asc'
        const limit = parseInt(req.query.limit) || 10
        const page = parseInt(req.query.page) || 1
        try{
            const result = await AuthModel.getAllUserModel(search, sortBy, sortType, limit, page)
            if (result[0]){
                return new Response(res, result, 'Success Get All User Data', 200, 'success')
            }else{
                return new Response(res, null, 'Not Find User', 404, 'failed')
            }
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async getIdUser(req,res) {
        const id = req.params.id
        try {
            const result = await AuthModel.getIdUserModel(id);
            return new Response(res, result, `Success Get User ID ${id}`, 200, 'success')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async patchUser(req, res) {
        const id = req.params.id
        const setData = req.body
        if(!setData.photo){
            setData.photo = req.file ? req.file.filename : '';
        }
        try {
            const checkId = await AuthModel.getIdUserModel(id)
            if(checkId.length > 0){
                setData.password = hashPassword(setData.password);
                const result = await AuthModel.patchUserModel(setData, id)
                return new Response(res, result, `Success Update User ID ${id}`, 201, 'success')
            }
            else{
                return new Response(res, null, 'Data Not Found', 404, 'failed')
            }
        } catch (error) {
            console.log(error)
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async deleteUser(req,res) {
        const id = req.params.id
        try {
            const result = await AuthModel.deleteUserModel(id);
            return new Response(res, result, `Success Delete User ID ${id}`, 200, 'success')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }
}

export default new AuthController();