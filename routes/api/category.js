const express = require('express')
const router = express.Router()
const {CategoryController,CategoryStatusController} = require("../../controllers/categoryController.js")

router.post("/createcategory",CategoryController)
router.post("/categoryStatus",CategoryStatusController)

module.exports = router