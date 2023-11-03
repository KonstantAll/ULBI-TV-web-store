const {Brand, Type} = require('../models/models');
const ApiError = require('../error/ApiError');
class BrandController{
    async create(req, res){
        const {name} = req.body; //it has body because its post request
        console.log('body',req.body);
        const brand = await Brand.create({name});
        return res.json(brand);
    }
    async getAll(req, res){
        const brands = await  Brand.findAll();
        return res.json(brands);
    }
}
module.exports = new BrandController();