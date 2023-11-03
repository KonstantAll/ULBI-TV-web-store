require('dotenv').config();

const request = require('request');
const express = require('express');
const sequelize = require('./db');
const  models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlerMiddleware');
const path = require('path');

const PORT = process.env.PORT || 9000;


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);


//last middleware
app.use(errorHandler);

const start = async (req, res) => {
    try {
        await sequelize.authenticate(); //устанавливает подключение к БД
        await sequelize.sync({ alter: true }); //сверяет состояние бд со схемой данніх

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e){
        console.log('some error',e)
    }
}

start();


