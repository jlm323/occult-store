// load express
const express = require('express');

const methodOverride = require('method-override');

// bring in mongoConfig function
const mongoConfig = require('./config');

// create express app
const app = express();

// bring in packaged route
const productRoutes = require('./routes/productRoutes');

// .env
require('dotenv').config()

// port
const port = process.env.PORT || 3000;

// setup view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// middleware
app.get('/',(req,res) => {
    res.redirect('/products')
})
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(express.json());
app.use(methodOverride("_method"))

//app.use
app.use('/products', productRoutes);

//  listen to port
app.listen(port, () => {
    console.log('listening on port: ', port);
});

// connect to db
mongoConfig()