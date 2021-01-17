import express from 'express';
import http from 'http';

require('dotenv').config();

const app = express();
const server = new http.Server(app);
server.listen(process.env.PORT);

import getAllUsersController from './controllers/getAllUsersController';
app.get('/users/all', getAllUsersController);