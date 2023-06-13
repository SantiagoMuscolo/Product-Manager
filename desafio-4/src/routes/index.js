const mainRoutes = require('./mainRoutes');
const views = require('./views');
const productsApi = require('./products');
const cartsApi = require('./carts');


module.exports = app => {
    mainRoutes(app)
    views(app)
    productsApi(app);
    cartsApi(app);
    app.get('/', (req, res) => res.send('Hello world!'));
}