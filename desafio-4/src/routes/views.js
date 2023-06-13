// const express = require('express');
// const exphbs = require('express-handlebars');
// const { io } = require('../index');
// const productsController = require('../components/products/productsController/productsController'); 

// module.exports = (app) => {
//     try {
//         app.set('views', './src/views');
//         app.use(express.static('public'));

//         app.engine('handlebars', exphbs.engine());
//         app.set('view engine', 'handlebars');

//         app.get('/realtimeproducts', async (req, res) => {
//             try {
//                 const products = await productsController.getProducts();
//                 res.render('realTimeProducts', { products });
//             } catch (error) {
//                 console.log(`[ERROR] -> ${error}`);
//                 res.status(500).json({ error: 'Error al obtener los productos' });
//             }
//         });


//         io.on('connection', (socket) => {
//             console.log('Cliente conectado');

//             socket.emit('initial products', productsController.getProducts());

//             productsController.on('product created', (newProduct) => {
//                 socket.emit('new product', newProduct);
//             });

//             productsController.on('product deleted', (productId) => {
//                 socket.emit('delete product', productId);
//             });

//         });
//     } catch (error) {
//         console.log(`[ERROR] -> ${error}`);
//     }
// };
