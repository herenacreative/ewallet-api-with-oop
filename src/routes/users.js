import express from 'express';
import usersController from '../controllers/users';
import upload from '../helpers/upload';
import AuthMiddleware from '../middlewares/auth';

class UsersRouter{
    router;
    auth;

    constructor(){
        this.router = express.Router();
        this.routes();
        this.auth = new AuthMiddleware();
    }

    routes(){
        this.router.get(
            '/', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,2,3])(req, res, next),
            usersController.getAllUser
        )
        this.router.get(
            '/:id', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,2,3])(req, res, next),
            usersController.getIdUser
        )
        this.router.patch(
            '/:id', 
            upload.single('photo'), 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,2,3])(req, res, next),
            usersController.patchUser
        )
        this.router.delete(
            '/:id', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,2])(req, res, next),
            usersController.deleteUser
        )
    }
}

export default new UsersRouter().router;