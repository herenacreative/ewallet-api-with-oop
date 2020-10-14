import connection from '../helpers/mysql'
class TopUpModel {
    getAllTopUpModel() {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'SELECT * FROM top_up ORDER BY num ASC'
            connection.query(sqlQuery, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    }

    getIdTopUpModel(id) {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'SELECT * FROM top_up WHERE id = ?'
            connection.query(sqlQuery, id, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    }

    postTopUpModel(setData) {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'INSERT INTO top_up SET ?'
            connection.query(sqlQuery, setData, (error, result) => {
                if (error) {
                    reject(error)
                }
                const newData = {
                    id: result.insertId,
                    ...setData,
                };
                resolve(newData);
            })
        })
    }

    patchTopUpModel(setData, id) {
        return new Promise((resolve, reject) => {
            const sqlQuery ='UPDATE top_up SET ? WHERE id = ?'
            connection.query(sqlQuery, [setData, id], (err, result) => {
                if (err) {
                    reject(err)
                }
                const newData = {
                    id: result.insertId,
                    ...setData,
                };
                resolve(newData);
            })
        })
    }

    deleteTopUpModel(id) {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'DELETE FROM top_up WHERE id = ?'
            connection.query(sqlQuery, id, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    }
}

export default new TopUpModel();