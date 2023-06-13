const express = require('express');
const http = require('http');
const io = require('socket.io')(http);
const PORT = 8080;
const routes = require('./routes');

class Server {
    constructor() {
        this.app = express();
        this.routes();
        this.server = http.createServer(this.app)
        this.configureSockets();
    }



    routes() {
        routes(this.app);
    }

    configureSockets() {
        const productsController = require('./components/products/productsController/productsController');
        productsController.io = io;
    }

    listen() {
        this.app.listen(PORT, () => { console.log(`http://localhost:${PORT}`) });
    }
}


module.exports = new Server(), io;


