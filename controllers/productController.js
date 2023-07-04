const express = require('express')
const router = express.Router()
const User = require("../model/usersModel.js")

async function sequreProductUpload(req, res, next){ 

    let userid = req.headers.authorization.split('@')[1]
    let Password = req.headers.authorization.split('@')[2]

    if(!req.headers.authorization){
        return res.send({error: "Unauthorized"})
    }

    let user = await User.find({_id:userid})

    if(user.length > 0){

        if(Password == process.env.SEQURE_SECRET_KEY){

            if(user[0].role == "marchent"){
                next()
                // next call kora and true houya mane next je function er vhitore ase ay function er kaj ses porborti function chole jao mane next je function er vhitore ase er bahire first je functon thakbe sei functon call hobe
            }else{
                return res.send({error: "Before you marchent then try again"}) 
            }

        }else{
            return res.send({error: "Not able to create a product"})
        }
        
    }
    else{
        return res.send({error: "You are not able to create a product"})
    }
         
}

async function createProduct(req, res){
    // let {productname,discription,image,store} = req.body

    // let product = new Product({
    //     productname,
    //     discription,
    //     image,
    //     store
    // })
    // product.save()
    // res.send({Success:"product create successfull"})
    return res.send({Success: "Product create successfull"})
}

module.exports = {sequreProductUpload,createProduct}