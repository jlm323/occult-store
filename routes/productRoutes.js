// load express
const express = require('express');

// create a special router object for our routes
const router = express.Router();

// bring in controller functions (destructure method)
const { 
    findAllProducts, 
    newProduct, 
    createNewProduct, 
    // seedStarterData, 
    editAProduct, 
    updateAProduct, 
    deleteAProduct, 
    // clearData,
    showOneProduct,
} = require('../controllers/productController')


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// setup index route
router.get('/', findAllProducts);

// setup new route
router.get('/new', newProduct);

// setup delete route
router.delete('/:id', deleteAProduct);

// setup update route
router.put('/:id', updateAProduct);

// setup create route
router.post('/', createNewProduct);

// setup edit route
router.get('/:id/edit', editAProduct);

// setup 'seed' route
// router.get('/seed', seedStarterData)

// setup clear route
// router.get('/clear', clearData)

// setup show route
router.get('/:id', showOneProduct);




module.exports = router;