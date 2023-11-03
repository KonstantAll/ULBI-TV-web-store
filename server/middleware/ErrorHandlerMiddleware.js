const ApiError = require('../error/ApiError');
//we didn't call next, because it s last middleware
module.exports = function (err, req, res, next){
    if(err instanceof ApiError){
       return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message:'Непредвиденная ошибка'})
}