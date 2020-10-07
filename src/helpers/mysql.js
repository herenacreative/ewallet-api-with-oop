import mysql from 'mysql';
import config from '../configs/server';

class Database {
    constructor(){
        return mysql.createConnection({
            host: config.mysql.host,
            user: config.mysql.user,
            password: config.mysql.password,
            database: config.mysql.database
        })
    }
}

export default new Database();