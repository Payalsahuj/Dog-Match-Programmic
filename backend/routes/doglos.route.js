const express=require("express")

const { dogloseModel } = require("../model/doglosser.model")

const dogloRouter=express.Router()




dogloRouter.post("/addlosserdata",async(req,res)=>{
    const {image,time}=req.body
    try{
        const data=new dogloseModel(req.body)
        await data.save()
        res.json({msg:"new data added",dogloose:req.body})
    }catch(err){
        res.json({error:err.message})
    }
    })







 
    dogloRouter.get("/addlosserdata",async(req,res)=>{
        try{
            const dog=await dogloseModel.find()
            res.send(dog)
        }catch(err){
            res.json({error:err.message})
        }  
    })

module.exports={
    dogloRouter
}