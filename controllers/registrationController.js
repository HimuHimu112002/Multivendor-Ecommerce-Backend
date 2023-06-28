const bcrypt = require('bcrypt');
const User = require("../model/usersModel.js")
const emailVelidation = require("../helpers/emailValidation.js")
const emailSend = require("../helpers/emailSend.js")
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");

let registrationController =  async (req, res)=>{

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
            const generator2 = aleaRNGFactory(Date.now());
            let randomOtpNumber = generator2.uInt32().toString().substring(0, 4)


            let randonOtpStore = await User.findOneAndUpdate(
                {email},
                {$set: {randomOtp:randomOtpNumber}},
                {new: true}
                
            )

            emailSend(email,randonOtpStore.randomOtp)
            res.send({success: "Registration Successfull Thank You"})
            
        });
       
    }
}

module.exports = registrationController;