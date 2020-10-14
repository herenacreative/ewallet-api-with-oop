import express from 'express';
import authRouter from './auth';
import usersRouter from './users';
import topUpRouter from './topUp';
import transferRouter from './transfer';

class Router{
    constructor(){
        this.routes();
    }

    routes(){
        this.router = express.Router();
        this.authRouter();
        this.usersRouter();
        this.topUpRouter();
        this.transferRouter();
    }

    authRouter(){
        this.router.use(
            "/auth",
            authRouter
        );
    }

    usersRouter(){
        this.router.use(
            "/users",
            usersRouter
        );
    }

    topUpRouter() {
        this.router.use(
            "/top-up",
            topUpRouter
        );
    }

    transferRouter(){
        this.router.use(
            "/transfer",
            transferRouter
        );
    }
}
const routes = new Router().router;

export default routes;