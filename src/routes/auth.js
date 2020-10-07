import express from 'express';
import authController from '../controllers/auth';
import upload from '../helpers/upload'
import AuthMiddleware from '../middlewares/auth';

class AuthRouter{
    router;
    auth;

    constructor(){
        this.router = express.Router();
        this.routes();
        this.auth = new AuthMiddleware();
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
        this.router.get(
            '/users', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,2])(req, res, next),
            authController.getAllUser
        )
        this.router.get(
            '/users/:id', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,2])(req, res, next),
            authController.getIdUser
        )
        this.router.patch(
            '/users/:id', 
            upload.single('photo'), 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,2])(req, res, next),
            authController.patchUser
        )
        this.router.delete(
            '/users/:id', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,3])(req, res, next),
            authController.deleteUser
        )
    }
}

export default new AuthRouter().router;