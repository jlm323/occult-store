const Product = require('../models/products')

// bring in seed data
// const seed = require('../models/seed');

// route - GET /products (index)
const findAllProducts = (req, res) => {
    Product.find({}, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('index', { product: foundProduct })
        }
    })
}

// route - GET /products/New (new)
const newProduct = (req, res) => {
    res.render('new');
}

// route - POST /products (create)
const createNewProduct = (req, res) => {
    Product.create(req.body, (err, createdProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products')
        }
    }) 
}

// route - GET /products/seed (seed)
// const seedStarterData = (req, res) => {
//     Product.deleteMany({}, (err, deleteProduct) => {
//         if (err) {
//             res.status(400).json(err)
//         } else {
//             Product.create(seed.products, (err, createdProduct) => {
//                 if (err) {
//                     res.status(400).json(err)
//                 } else {
//                     res.status(200).redirect('/products')
//                 }
//             })
//         }
//     })
// }

// route - GET /:id/edit (edit)
const editAProduct = (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Edit', { product: foundProduct });
        }
    })
}

// route - PUT /:id (update)
const updateAProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/products/${req.params.id}`);
        }
    })
}

// route - DELETE /:id (delete)
const deleteAProduct = (req, res) => {    
    Product.findByIdAndDelete(req.params.id, (err, deleteProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products')
        }
    })
}
// clear data
// const clearData = (req, res) => {
//     Product.deleteMany({}, (err, deleteProduct) => {
//         if (err) {
//             res.status(400).json(err)
//         } else {
//             res.status(200).redirect('/products')
//         }
//     })
// }

// route - GET /product/:id (show)
const showOneProduct = (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Show', { product: foundProduct })
        }
    } )
}

module.exports = {
    findAllProducts,
    newProduct, 
    createNewProduct, 
    // seedStarterData, 
    editAProduct, 
    updateAProduct, 
    deleteAProduct, 
    // clearData,
    showOneProduct
}