const express = require('express')
const router = express.Router()
const {sequreProductUpload,createProduct, createVariant} = require("../../controllers/productController.js")

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + `.${file.originalname.split(".")[1]}`)
    }
  })
  
const upload = multer({ storage: storage })
// ===================== multer usign image upload ==================


router.post("/CreateProduct",sequreProductUpload,createProduct)
router.post("/CreateProductVarient",upload.single(''),createVariant)

module.exports = router