const mongoose=require('mongoose')

const Scheme=mongoose.Schema({
    title:String,
    newsUrl:String,
    imgUrl:String
})

module.exports=Scheme