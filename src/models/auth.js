import connection from '../helpers/mysql';

class AuthModel {
    
    registerModel(data) {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'INSERT INTO users SET ?'
            connection.query(sqlQuery, data, (error, result) => {
                console.log(error, 'e', result)
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

    getAllUserModel(search, sortBy, sortType, limit, page) {
        return new Promise((resolve, reject) => {
            const sqlQuery = `SELECT * FROM users WHERE (phone like '%${search}%' OR fullname like '%${search}%') GROUP BY id order by ${sortBy} ${sortType} limit ${limit} offset ${page}`
            connection.query(sqlQuery, [search, sortBy, sortType, limit, page], (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    }

    getIdUserModel(id) {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'SELECT * FROM users WHERE id = ?'
            connection.query(sqlQuery, id, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    }

    patchUserModel(data, id) {
        return new Promise((resolve, reject) => {
            const sqlQuery ='UPDATE users SET ? WHERE id = ?'
            connection.query(sqlQuery, [data, id], (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
                
            })
        })
    }

    deleteUserModel(id) {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'DELETE FROM users WHERE id = ?'
            connection.query(sqlQuery, id, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    }
}

export default new AuthModel();