import express from 'express';
import http from 'http';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000
const server = new http.Server(app);
server.listen(PORT, () =>{
    console.log('Server is running on PORT:', PORT)
});

import postSalesController from './controllers/postSalesController';
import getStatisticsController from './controllers/getStatisticsController';
app.post('/sales', postSalesController);
app.get('/statistics',getStatisticsController);