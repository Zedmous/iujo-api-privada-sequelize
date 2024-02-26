const express = require('express')
const cors = require('cors');
const { db } = require("../utils/sequelize.utils");
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.pre = "/api";
        this.paths = {
            auths:this.pre+'/auth',
            roles:this.pre+'/roles',
            users: this.pre + '/users',
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
        this.app.use(this.paths.auths,require('../routes/auth.route'));
        this.app.use(this.paths.users,require('../routes/user.route'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto","localhost:"+this.port)
        })
    }
}
module.exports = Server;