const express = require('express')
const becomMarchent = require('../../controllers/marchentController.js')
const router = express.Router()

router.post("/becomemarchent", becomMarchent)

module.exports = router