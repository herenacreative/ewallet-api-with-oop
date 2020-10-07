import express from 'express';
import authRouter from './auth';
import topUpRouter from './topUp';
import transferRouter from './transfer';
// import AuthMiddleware from '../middlewares/auth';
class Router{
    // auth;
    // topUp;

    constructor(){
        this.routes();
        // this.auth = new AuthMiddleware();
    }

    routes(){
        this.router = express.Router();
        this.authRouter();
        this.topUpRouter();
        this.transfer();
    }

    authRouter(){
        this.router.use(
            "/auth",
            // (req, res, next) => this.auth.verifyJwtToken(req, res, next), 
            // (req, res, next) => this.auth.checkRole([1,2,3])(req, res, next), 
            authRouter
        );
    }

    topUpRouter(){
        this.router.use(
            "/top-up",
            topUpRouter
        );
    }

    transfer(){
        this.router.use(
            "/transfer",
            transferRouter
        );
    }
}

const routes = new Router().router;
export default routes;