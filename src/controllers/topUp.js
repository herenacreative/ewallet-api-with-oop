import Response from "../helpers/response";
import TopUpModel from '../models/topUp';

class TopUpController {
    async getAllTopUp(req, res){
        try{
            const result = await TopUpModel.getAllTopUpModel()
            return new Response(res, result, 'Success Get All Top Up Data', 200, 'success')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async getIdTopUp(req,res){
        const id = req.params.id
        try {
            const result = await TopUpModel.getIdTopUpModel(id);
            return new Response(res, result, `Success Get All Top Up Data ID ${id}`, 200, 'success')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async postTopUp(req, res){
        const setData = req.body
        try {
            const result = await TopUpModel.postTopUpModel(setData);
            return new Response(res, result, 'Success Post Top Up Data', 201, 'success')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }

    async patchTopUp(req, res){
        const id = req.params.id
        const setData = req.body
        try {
            const checkId = await TopUpModel.getIdTopUpModel(id)
            if(checkId.length > 0){
                const result = await TopUpModel.patchTopUpModel(setData, id)
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

    async deleteTopUp(req,res){
        const id = req.params.id
        try {
            const result = await TopUpModel.deleteTopUpModel(id);
            return new Response(res, result, `Success Delete Top Up Data ID ${id}`, 200, 'success')
        } catch (error) {
            console.log(error);
            return new Response(res, null, 'internal Server Error', 500, 'failed')
        }
    }
}

export default new TopUpController;