import express from 'express';
import topUpController from '../controllers/topUp';
import AuthMiddleware from '../middlewares/auth';
class TopUpRouter{
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
            (req, res, next) => this.auth.checkRole([1,2])(req, res, next), 
            topUpController.getAllTopUp
        )
        this.router.get(
            '/:id', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,2])(req, res, next),
            topUpController.getIdTopUp
        )
        this.router.post(
            '/', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,3])(req, res, next), 
            topUpController.postTopUp
            )
        this.router.patch(
            '/:id', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,3])(req, res, next),
            topUpController.patchTopUp
        )
        this.router.delete(
            '/:id', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,3])(req, res, next),
            topUpController.deleteTopUp
        )
    }
}

export default new TopUpRouter().router;