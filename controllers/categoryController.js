const Category = require("../model/categoryModel")
//const SubCategorys = require("../models/subCategoriModel.js")


async function CategoryController(req, res){
    const{name, discription} = req.body

    let duplicateCategory = await Category.find({name})
    if(duplicateCategory > 0){
        return res.send({error: " This Category is already in Exists"})
    }

    let category = new Category({
        name,
        discription
    })   
    category.save()
    res.send({success: "Category Created Successfully"})

}

// ======================== STATUS_UPDATED =====================================
async function CategoryStatusController(req, res){
    const{name, status} = req.body
   
   if(status == "rejected" || status == "waiting"){
        await Category.findOneAndUpdate({name}, {$set:{isActive: false, status: status}}, {new: true})
        return res.send({status: "Status Updated"})

   }else if(status == "approved"){
        await Category.findOneAndUpdate({name},{$set:{isActive: true, status: status}}, {new: true})
        return res.send({status: "Status Updated"})

   }
}



// subategory controller ======================

// async function createSubCategoryController(req, res){
//     const{name, discription, subcategori} = req.body
//     let duplicateSubCategory = await SubCategorys.find({name})
//     //console.log(duplicateSubCategory)

//         if(duplicateSubCategory > 0){
//             return res.send({error: " This Sub-Category is already in Exists"})
//         }

//      let subcategory = new SubCategorys({
//         name,
//         discription,
//         subcategori
//      })   

//      subcategory.save()
//      //console.log(subcategory._id)

//      await Category.findOneAndUpdate({_id: subcategory.subcategori}, {$push:{Categori: subcategory._id}}, {new: true})

//      res.send({success: "Sub-Category Created Successfully"})
// }



// async function SubCategoryStatusController(req, res){
//     const{name, status} = req.body

//    if(status == "rejected" || status == "waiting"){
//         let UpdateCategory = await SubCategorys.findOneAndUpdate({name}, {$set:{isActive: false, status: status}}, {new: true})

//         return res.send({status: "Status Updated"})
//    }else if(status == "approved"){
//         let UpdateCategory = await SubCategorys.findOneAndUpdate({name},{$set:{isActive: true, status: status}}, {new: true})

//         return res.send({status: "Status Updated"})
//    }
// }

// all category
// async function getAllcategory(req, res) {
//     const data = await Category.find({}).populate("Categori")
//     res.send(data)
// }


// all subcategory
// async function getAllSubcategory(req, res) {
//     const data = await SubCategorys.find({}).populate("subcategori")
//     res.send(data)
// }

// module.exports = {createCategoryController,CategoryStatusController,createSubCategoryController,SubCategoryStatusController,getAllcategory,getAllSubcategory}

module.exports = {CategoryController,CategoryStatusController}