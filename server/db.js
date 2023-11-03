const {Sequelize} = require('sequelize');
console.log(process.env.DB_PORT)
module.exports = new Sequelize(
    process.env.DB_NAME, //название БД
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres', //can be mySQL or else
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)