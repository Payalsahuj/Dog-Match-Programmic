const express=require("express")
const { dogModel } = require("../model/dogdata.model")

const dogRouter=express.Router()




dogRouter.post("/addwinnerdata",async(req,res)=>{
const {image,time}=req.body
try{
    const data=new dogModel(req.body)
    await data.save()
    res.json({msg:"new data added",dogwin:req.body})
}catch(err){
    res.json({error:err.message})
}
})







    dogRouter.get("/addwinnerdata",async(req,res)=>{
        try{
            const dog=await dogModel.find()
            res.send(dog)
        }catch(err){
            res.json({error:err.message})
        }
    })
        


module.exports={
    dogRouter
}