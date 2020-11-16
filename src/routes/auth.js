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
        this.router.post(
            '/reset-password',
            authController.resetPassword
        )
        this.router.post(
            '/request/otp',
            authController.requestOTP
        )
        this.router.post(
            '/confirm/otp',
            authController.confirmOTP
        )
        
    }
}

export default new AuthRouter().router;