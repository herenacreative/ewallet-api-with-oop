import connection from '../helpers/mysql';

class AuthModel {
    
    registerModel(data) {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'INSERT INTO users SET ?'
            connection.query(sqlQuery, data, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    }

    loginModel(data) {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'SELECT * FROM users WHERE email = ?'
            connection.query(sqlQuery, data, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    }
}

export default new AuthModel();