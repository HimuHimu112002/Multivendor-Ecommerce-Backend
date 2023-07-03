const express = require('express')
const router = express.Router()
const registrationController = require("../../controllers/registrationController.js")
const loginController = require("../../controllers/loginController.js")
const OtpMatchController = require('../../controllers/otpMatchController.js')
const becomemarchent = require("../../controllers/marchentController.js")

router.post("/registration",registrationController)
router.post("/login", loginController)
router.post("/otp", OtpMatchController)
//router.post("/marchent", becomemarchent)


module.exports = router