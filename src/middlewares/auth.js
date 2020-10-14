import jwt from 'jsonwebtoken';
import Response from '../helpers/response';
import config from '../configs/server';

class ErrorHandler {
    res;
    error;
    message;

    constructor(error, res) {
        this.res = res;
        this.error = error;
        this.handle();
    }

    handle() {
        switch (this.error.name) {
            case 'TokenExpiredError':
                this.message = 'Please refresh token.';
                return new Response(this.res, "", this.message, 500, 'failed')
                
            case 'JsonWebTokenError':
                this.message = 'Please login.';
                return new Response(this.res, "", this.message, 500, 'failed')
        
            default:
                console.log(error);
                this.message = 'Internal Server Error!';
                return new Response(res, "", message, 500, 'failed')
        }
    }
}

class AuthMiddleware {
    verifyJwtToken(req, res, next) {
        const token = req.headers.authorization;
        try {
            const decoded = jwt.verify(token, config.jwtSecretKey);
            if (decoded.tokenType !== 'login') {
                const message = {
                    error: 'Wrong Token',
                    message: 'Please use login token.'
                }
                return new Response(res, '', message, 500, 'failed')
            }
            req.decodedToken = decoded;
            next();
        } catch (error) {
            console.log(error)
            return new ErrorHandler(error, res);
        }
    }

    // checkRole = (roles) => (req, res, next) => {
    //     try {
    //         const role = req.decodedToken.role;
    //         if (roles.find(element => element === role)) {
    //             if(role == 3){
    //                 console.log(req.decodedToken.id , 'hhh', req.params.sender_id)
    //                 const id = req.params.sender_id
    //                 if (req.decodedToken.id != id){
    //                     return new Response(res, null, 'you dont have access', 500, 'failed')
    //                 }
    //                 next()
    //             }
    //             else{
    //                 next()
    //             }
    //         } else {
    //             return new Response(res, null, 'you dont have access', 500, 'failed')
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         const message = `Internal Server Error`;
    //         return new Response(res, null, message, 500, 'failed')
    //     }
    // }

    checkRole = (roles) => (req,res,next) => {
        try {
            const role = req.decodedToken.role;
            console.log(role)
            if (roles.find(element => element === role)) {
                next();
            } else {
                return new Response(res, null, 'you dont have access', 500, 'failed')
            }
        } catch (error) {
            console.log(error);
            const message = `Internal Server Error`;
            return new Response(res, null, message, 500, 'failed')
        }
    }
}

export default AuthMiddleware;