const {Type} = require('../models/models');
const ApiError = require('../error/ApiError');
class TypeController{
    async create(req, res){
        const {name} = req.body; //it has body because its post request
        console.log('body',req.body);
        const type = await Type.create({name});
        return res.json(type);
    }
    async getAll(req, res){
        const types = await  Type.findAll();
        return res.json(types)
    }
}
module.exports = new TypeController();