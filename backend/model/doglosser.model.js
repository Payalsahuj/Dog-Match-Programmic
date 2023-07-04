const mongoose=require("mongoose")

const dogSchema=mongoose.Schema({
    image:String,
    time:String,
    
},{
    versionKey:false
})

const dogloseModel=mongoose.model("doglooser",dogSchema)

module.exports={
    dogloseModel
}