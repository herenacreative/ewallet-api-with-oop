import Response from "../helpers/response";
import UsersModel from '../models/users';
import { hashPassword } from '../helpers/security';
import DeleteImage from "../helpers/deleteImage";

class UsersController {
    constructor() {
        console.log('Users Controller Loaded!!!');
    }

    async getAllUser(req, res) {
        let search = req.query.search || ''
        // const search = tolower.toLowerCase()
        const sortBy = req.query.sortBy || 'fullname'
        const sortType = req.query.sortType || 'asc'
        const limit = parseInt(req.query.limit) || 100
        const page = parseInt(req.query.page) || 1

        try {
            const result = await UsersModel.getAllUserModel(search, sortBy, sortType, limit, page)
            // console.log(result)
            if (result[0]) {
                return new Response(res, result, 'Success Get All User Data', 200, 'success')
            } else {
                return new Response(res, null, 'Not Find User', 404, 'failed')
            }
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async getIdUser(req, res) {
        const id = req.params.id
        try {
            const result = await UsersModel.getIdUserModel(id);
            if(result.length == 1){
                return new Response(res, result, `Success Get User ID ${id}`, 200, 'success')
            }
            return new Response(res, null, `Data Not Found`, 404, 'failed')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async patchUser(req, res) {
        const id = req.params.id
        const setData = {...req.body}
        if (req.file) {
            setData.photo = req.file.filename
        }
        
        setData.updated_at = new Date()
        try {
            const checkId = await UsersModel.getIdUserModel(id)
            if (checkId.length > 0) {
                if (setData.password) {
                    setData.password = hashPassword(setData.password);
                }
                const result = await UsersModel.patchUserModel(setData, id)
                return new Response(res, result, `Success Update User ID ${id}`, 201, 'success')
            }
            else {
                return new Response(res, null, 'Data Not Found', 404, 'failed')
            }
        } catch (error) {
            console.log(error)
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async deleteUser(req, res) {
        const id = req.params.id
        try {
            const checkId = await UsersModel.getIdUserModel(id)
            if (checkId.length > 0) {
                const result = await UsersModel.deleteUserModel(id)
                return new Response(res, result, `Success Delete User Data ID ${id}`, 201, 'success')
            }
            return new Response(res, null, `Data Not Found`, 404, 'failed')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }
}

export default new UsersController();