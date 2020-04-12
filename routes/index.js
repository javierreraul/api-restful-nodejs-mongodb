
const express = require('express')
const productController = require('../controllers/product')
const userController = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', productController.getProducts)
api.get('/product/:productId', productController.getProduct)
api.post('/product', auth, productController.saveProduct)
api.put('/product/:productId', auth, productController.updateProduct)
api.delete('/product/:productId', auth, productController.deleteProduct)
api.post('/signin', userController.signin)
api.post('/login', userController.login)

module.exports = api
