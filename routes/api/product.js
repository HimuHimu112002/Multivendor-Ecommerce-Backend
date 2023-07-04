const express = require('express')
const router = express.Router()
const {sequreProductUpload,createProduct} = require("../../controllers/productController.js")

router.post("/CreateProduct",sequreProductUpload,createProduct)

module.exports = router