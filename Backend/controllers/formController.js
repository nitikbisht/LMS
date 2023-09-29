'use strict'
const userForm =require('../data/form')

const getFormList=async (req,res,next)=>{
    try{
        const {name}=req.query
        // console.log(name)
        const classes=await userForm.getFormList(name);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

module.exports={
    getFormList

}