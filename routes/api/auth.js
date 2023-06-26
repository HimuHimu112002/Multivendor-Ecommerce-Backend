const express = require('express')
const router = express.Router()


router.get("/registration",(req, res)=>{
    res.send("Himu mern stack")
})

module.exports = router