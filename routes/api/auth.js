const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const User = require("../../model/usersModel.js")
const emailVelidation = require("../../helpers/emailValidation.js")
const emailSend = require("../../helpers/emailSend.js")

router.post("/registration", async (req, res)=>{

    const {fullname, email, phone, password} = req.body

    if(!fullname){
        res.send({error: "Please Enter Your Fullname"})
    }else if(!email){
        res.send({error: "Please Enter Your Email"})
        
    }else if(!emailVelidation(email)){
        res.send({error: "Please enter the valid email"})
    }else if(!phone){
        res.send({error: "Please Enter Your Phone Number"})
    }else if(!password){
        res.send({error: "Please Enter The Password"})
    }
    else {

        let duplicateEmail = await User.find({email: email})
        if(duplicateEmail > 0){
            return res.send({error: "This email already in used"})
        }

        bcrypt.hash(password, 10, async function(err, hash) {
            let user = new User({
                fullname: fullname,
                email: email,
                phone: phone,
                password: hash,
                
            })

            user.save()
            emailSend(email)
            res.send({success: "Registration Successfull Thank You"})
            
        });
       
    }
})

module.exports = router