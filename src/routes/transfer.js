import express from 'express';
import transferController from '../controllers/transfer';
import AuthMiddleware from '../middlewares/auth';

class TransferRouter{
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
            (req, res, next) => this.auth.checkRole([1, 2])(req, res, next),
            transferController.getAdminTransfer
        )
        this.router.get(
            '/detail/:id',
            (req, res, next) => this.auth.verifyJwtToken(req, res, next),
            (req, res, next) => this.auth.checkRole([1, 2, 3])(req, res, next),
            transferController.getIdTransfer
        )
        this.router.get(
            '/:sender_id', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,2,3])(req, res, next), 
            transferController.getAllTransfer
        )
        this.router.post(
            '/', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,2,3])(req, res, next),
            transferController.postTransfer
        )
        this.router.patch(
            '/:id', 
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,2])(req, res, next),
            transferController.patchTransfer
        )
        this.router.delete(
            '/:id',
            (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            (req, res, next) => this.auth.checkRole([1,2])(req, res, next),
            transferController.deleteTransfer
        )
    }
}

export default new TransferRouter().router;