import express from 'express';
import authController from '../controllers/auth';
import upload from '../helpers/upload';

class AuthRouter{
    router;

    constructor(){
        this.router = express.Router();
        this.routes();
    }

    routes(){
        this.router.post(
            '/sign-up', 
            upload.single('photo'), 
            authController.register
        )
        this.router.post(
            '/login', 
            authController.login
        )
    }
}

export default new AuthRouter().router;