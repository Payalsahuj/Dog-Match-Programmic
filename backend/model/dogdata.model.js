const mongoose=require("mongoose")

const dogSchema=mongoose.Schema({
    image:String,
    time:String,
    
},{
    versionKey:false
})

const dogModel=mongoose.model("dog",dogSchema)

module.exports={
    dogModel
}