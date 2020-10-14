// SELECT books.id as id, books.title as title, books.description as description, books.image as image, genres.name as genre, genres.id as genre_id,authors.name as author, authors.id as author_id, books.book_status as status, books.created_at as created_at, books.updated_at as updated_at FROM books INNER JOIN genres ON books.genre_id = genres.id INNER JOIN authors ON books.author_id = authors.id WHERE books.id = ?
import connection from '../helpers/mysql';

class TransferModel{
    getIdTransferModel(id){
        return new Promise((resolve, reject) => {
            const sqlQuery = `SELECT * FROM transfer WHERE id = ?`
            connection.query(sqlQuery, id, (error, result) =>{
                if(error){
                    reject(error)
                }
                resolve(result)
            })
        })
    }

    getAllTransferModel(user_id, sortBy, sortType, limit, page) {
        return new Promise((resolve, reject) => {
            const sqlQuery = `select t.*, users.fullname, users.phone, users.photo from  transfer t left join transfer t1 on (((t.sender_id = t1.sender_id and t.receiver_id = t1.receiver_id) or (t.sender_id = t1.receiver_id and t.receiver_id = t1.sender_id ) ) and case when t.created_at = t1.created_at then t.id < t1.id else t.created_at < t1.created_at end ) INNER JOIN users on (t.sender_id = users.id OR t.receiver_id = users.id) WHERE users.id != ? AND t1.id is null and ? in(t.sender_id, t.receiver_id) ORDER BY ${sortBy} ${sortType} limit ${limit} offset ${page}`
            // const sqlQuery = `SELECT t.id, t.sender_id, u.username as sender_name, t.receiver_id, u.phone, t.amount, t.notes, t.created_at FROM transfer as t INNER JOIN users as u ON u.id = t.sender_id WHERE t.id in (SELECT MAX(id) FROM transfer as t WHERE t.receiver_id=${sender_id} GROUP BY t.sender_id) ORDER BY created_at DESC`
            connection.query(sqlQuery, [user_id, user_id, sortBy, sortType, limit, page], (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    }

   postTransferModel(setData) {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'INSERT INTO transfer SET ?'
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

    patchTransferModel(setData, id) {
        return new Promise((resolve, reject) => {
            const sql ='UPDATE transfer SET ? WHERE id = ?'
            connection.query(sql, [setData, id], (err, result) => {
                console.log(result)
                if (err) {
                    reject(err)
                }
                const newData = {
                    ...setData,
                };
                resolve(newData); 
            })
        })
    }

    deleteTransferModel(id) {
        return new Promise((resolve, reject) => {
            const sql = 'DELETE FROM transfer WHERE id = ?'
            connection.query(sql, id, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    }
}

export default new TransferModel;