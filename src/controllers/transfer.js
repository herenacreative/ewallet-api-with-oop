import Response from "../helpers/response";
import transferModel from '../models/transfer';

class TransferController{
    async getAdminTransfer(req,res){
        try {
            const result = await transferModel.getAdminTransferModel();
            return new Response(res, result, `Success Get All Transfer`, 200, 'success')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async getAllTransfer(req,res){
        const sender_id = req.params.sender_id;
        const sortBy = req.query.sortBy || 'created_at'
        const sortType = req.query.sortType || 'desc'
        const limit = parseInt(req.query.limit) || 50
        const page = parseInt(req.query.page) || 1
        
        try {
            const checkData = await transferModel.getAllTransferModel(sender_id, sortBy, sortType, limit, page);
            if (checkData.length > 0) {
                return new Response(res, checkData, `Success Delete User Data ID ${sender_id}`, 200, 'success')
            }
            return new Response(res, null, `Data Empty`, 200, 'success')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async postTransfer(req, res){
        const setData = req.body
        try {
            const result = await transferModel.postTransferModel(setData);
            return new Response(res, result, 'Success Post Transfer Data', 201, 'success')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async patchTransfer(req, res){
        const id = req.params.id
        const setData = req.body
        try {
            const checkUser = await transferModel.getIdTransferModel(id)
            if(checkUser.length > 0){
                const result = await transferModel.patchTransferModel(setData, id)
                return new Response(res, result, `Success Update Top Up Data ID ${id}`, 201, 'success')
            }
            else{
                return new Response(res, null, `Data Not Found`, 404, 'failed')
            }
        } catch (error) {
            console.log(error)
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async deleteTransfer(req,res){
        const id = req.params.id
        try {
            const checkId = await transferModel.getIdTransferModel(id)
            if (checkId.length > 0) {
                const result = await transferModel.deleteTransferModel(id)
                return new Response(res, result, `Success Delete Transfer Data ID ${id}`, 201, 'success')
            }
            return new Response(res, null, `Data Not Found`, 404, 'failed')
            // const result = await transferModel.deleteTransferModel(id)
            // return new Response(res, result, `Success Delete Top Up Data ID ${id}`, 200, 'success')
        } catch (error) {
            console.log(error)
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }
}

export default new TransferController