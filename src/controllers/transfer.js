import Response from "../helpers/response";
import transferModel from '../models/transfer';

class TransferController{
    async getIdTransfer(req,res){
        const id = req.params.id
        try {
            const result = await transferModel.getIdTransferModel(id);
            return new Response(res, result, `Success Get All Transfer Data ID ${id}`, 200, 'success')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async getAllTransfer(req,res){
        const sender_id = req.params.sender_id;
        try {
            const result = await transferModel.getAllTransferModel(sender_id);
            return new Response(res, result, `Success Get All Transfer Data User ${sender_id}`, 200, 'success')
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
            const result = await transferModel.deleteTransferModel(id)
            return new Response(res, result, `Success Delete Top Up Data ID ${id}`, 200, 'success')
        } catch (error) {
            console.log(error)
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }
}

export default new TransferController