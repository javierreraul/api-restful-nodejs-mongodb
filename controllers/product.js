
const Product = require('../models/product')


function getProduct (req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if(err) return res.status(500).send({message: `Error managing the petition: ${err}`})
    if(!product) return res.status(404).send({message: `Product does not exist`})

    res.status(200).send({ product })
  })
}

function getProducts (req, res) {
  Product.find({}, (err, products) => {
    if(err) return res.status(500).send({message: `Error managing the petition: ${err}`})
    if(!products) return res.status(404).send({message: `Products don't exist`})

    res.status(200).send({products})
  })
}

function saveProduct (req, res) {
  let product = new Product()
  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  product.save((err, productStored) => {
    if (err) res.status(500).send({message: `Error saving in the database: ${error}`})
    res.status(201).send({product: productStored})
  })
}

function updateProduct (req, res) {
  let productId = req.params.productId
  let update = req.body

  Product.findByIdAndUpdate(productId, update, {new: true}, (err, productUpdated) => {
      if(err) return res.status(500).send({message: `Error managing the petition: ${err}`})

      res.status(200).send({ product: productUpdated })
  })
}

function deleteProduct (req, res) {
  let productId = req.params.productId

  Product.findByIdAndRemove(productId, (err, product) => {
    if(err) return res.status(500).send({message: `Error managing the petition: ${err}`})

    res.status(200).send({message: 'Product has been removed'})
  })
}

module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}
