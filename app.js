require('dotenv').config();
const Server = require('./Server/server');
const serve= new Server();
serve.listen();
