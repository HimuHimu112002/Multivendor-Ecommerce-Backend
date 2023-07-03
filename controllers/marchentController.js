const Store = require("../model/marchentModel.js") 
const User = require("../model/usersModel.js")
async function becomMarchent(req, res){
   const {storename,officialEmail,officialPhone,address,owner,products} = req.body

    const store = new Store({
       storename,
       officialEmail,
       officialPhone,
       address,
       owner,
       products

    })
   store.save()
   res.send({success: "Store create successfull"})
   await User.findOneAndUpdate({_id:owner}, {role: "marchent"}, {new: true})

}


module.exports = becomMarchent;