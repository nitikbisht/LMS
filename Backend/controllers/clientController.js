'use strict'

const clientData =require('../data/client')
const fs=require('fs')


const getClientList=async (req,res,next)=>{
    try{
        const classes=await clientData.getClientList();
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const getClientbyUser=async (req,res,next)=>{
    try{
        // const name=req.body.name;
        // const user=req.body.user;
        const {userName}=req.query
        const obj={
            userName
        }
        // const classes=await classData.addClass(name,user);
        const classes=await clientData.getClientbyUser(obj);
        // const classes=await classData.addClass(req.body);
        // console.log(classes)
        res.status(200).send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const addClient=async (req,res,next)=>{
    try{
        // const name=req.body.name;
        // const user=req.body.user;
        const {name,user}=req.body
        console.log(req.body)
        const obj={
            name,
            user
        }
        // const classes=await classData.addClass(name,user);
        const classes=await clientData.addClient(obj);
        // const classes=await classData.addClass(req.body);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const updateClient=async (req,res,next)=>{
    console.log(req.body)
    console.log(req.file)
    try{
        const {Name,ClientId,ContactPerson,UpdatedBy,ContactNumber,Logo}=req.body;
        console.log(req.body)
        if(Logo!='null'){
            var filePath = Logo; 
            fs.unlinkSync(filePath);
        }
        else{
            console.log("no logo available")
        }
        const classes=await clientData.updateClient(Name,ClientId,req.file.path,ContactPerson,UpdatedBy,ContactNumber);
        
        res.send(classes);
        
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const EnableClient=async (req,res,next)=>{
    try{
        const id=req.query.id
        console.log(req.body)
        const classes=await clientData.EnableClient(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DisableClient=async (req,res,next)=>{
    try{
        const id=req.query.id
        console.log(req.body)
        const classes=await clientData.DisableClient(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DeleteClient=async (req,res,next)=>{
    try{
        
        // const user=req.body.user;
        const id=req.query.id
        console.log(req.body)
        const classes=await clientData.DeleteClient(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}


module.exports={
    getClientList,
    getClientbyUser,
    addClient,
    updateClient,
    EnableClient,
    DisableClient,
    DeleteClient
}