const express = require('express')
const router = express.Router()
const {sequreProductUpload,createProduct, createVariant} = require("../../controllers/productController.js")

router.post("/CreateProduct",sequreProductUpload,createProduct)
router.post("/CreateProductVarient",createVariant)

module.exports = router