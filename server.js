// load express
const express = require('express');

// create express app
const app = express();

// bring in packaged route
const productRoutes = require('./routes/productRoutes');

// .env
require('dotenv').config()

// port
const port = process.env.PORT;

// setup view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//app.use
app.use('/products', productRoutes);

//  listen to port
app.listen(port, () => {
    console.log('listening on port: ', port);
});