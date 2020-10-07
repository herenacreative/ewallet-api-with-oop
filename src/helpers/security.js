import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../configs/server';

export const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export const comparePassword = (password1, password2) => {
    return bcrypt.compareSync(password1, password2)
}

export const createToken = function(payload, expire = null) {
    console.log(payload)
    if (expire) {
        return jwt.sign(payload, config.jwtSecretKey, expire)
    };
    return jwt.sign(payload, config.jwtSecretKey);
}

export const verifyToken = (token) => {
    return jwt.verify(token, config.jwtSecretKey);
}