const express = require('express')
const cors = require('cors');
const { db } = require("../utils/sequelize.utils");
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.pre = "/api";
        this.paths = {
            users: this.pre + '/users',
            companies: this.pre + '/companies'
        };
        //conectar a la BD
        this.conectarDB();
        //Middleware
        this.middlewares();
        //rutas de mi aplicacion
        this.routes();
    }
   

    async conectarDB(){
        await db.sync().then(() => console.log("Conexion exitosa a la base de datos"));
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes() {
        //this.app.use(this.paths.users,require('../routes/user.route'));
        this.app.use(this.paths.companies,require('../routes/company.route'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto","localhost:"+this.port)
        })
    }
}
module.exports = Server;