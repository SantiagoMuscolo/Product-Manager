const express = require('express');
const http = require('http');
const io = require('socket.io')(http);
const exphbs = require('express-handlebars');
const PORT = 8080;
const routes = require('./routes');

class Server {
    constructor() {
        this.app = express();
        this.routes();
        this.setUp();
        this.server = http.createServer(this.app)
        this.configureSockets();
    }

    setUp(){
        this.app.set('views', './src/views');
        this.app.use(express.static('public'));

        this.app.engine('handlebars', exphbs.engine());
        this.app.set('view engine', 'handlebars');

        this.app.get('/realtimeproducts', async (req, res) => {
            try {
                const pm = require('./components/products/productsService/productManager')
                const products = await pm.getProducts();
                res.render('realTimeProducts', { products });
                console.log(products)
            } catch (error) {
                console.log(`[ERROR] -> ${error}`);
                res.status(500).json({ error: 'Error al obtener los productos' });
            }
        });
    }

    routes() {
        routes(this.app);
    }

    configureSockets() {
        const productsController = require('./components/products/productsController/productsController');
        productsController.io = io;
    }

    listen() {
        this.server.listen(PORT, () => { console.log(`http://localhost:${PORT}`) });
    }
}


module.exports = new Server(), io;


