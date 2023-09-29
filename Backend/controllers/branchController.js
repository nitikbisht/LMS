'use strict'

const branchData =require('../data/branch')

const getBranchList=async (req,res,next)=>{
    try{
        const classes=await branchData.getBranchList();
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const addBranch=async (req,res,next)=>{
    try{
        // const name=req.body.name;
        // const user=req.body.user;
        const {name,address,logo,contactPersonFirstName,contactPersonLastName,contactPersonEmail,
            contactNumber,createdBy,ClientId,updatedBy,updatedOn}=req.body
        // console.log(req.body)
        const obj={
            name
				  ,address
				  ,logo
				  ,contactPersonFirstName
				  ,contactPersonLastName
				  ,contactPersonEmail
				  ,contactNumber
				  ,createdBy
				  ,ClientId
        }
        // console.log(obj)
        // const classes=await classData.addClass(name,user);
        const classes=await branchData.addBranch(obj);
        // const classes=await classData.addClass(req.body);
        // console.log(classes)
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const updateBranch=async (req,res,next)=>{
    try{
        const {Name,branchId,Address,Logo,ContactPersonFirstName,ContactPersonLastName,ContactPersonEmail,ContactNumber,UpdatedBy,ClientId}=req.body
        console.log(req.body)
        const obj={
            Name,
            branchId
              ,Address
              ,Logo
              ,ContactPersonFirstName
              ,ContactPersonLastName
              ,ContactPersonEmail
              ,ContactNumber
              ,ClientId,
              UpdatedBy
    }
        const classes=await branchData.updateBranch(obj);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const EnableBranch=async (req,res,next)=>{
    try{
        const id=req.query.id
        // console.log(req.body)
        const classes=await branchData.EnableBranch(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DisableBranch=async (req,res,next)=>{
    try{
        const id=req.query.id
        // console.log(id)
        const classes=await branchData.DisableBranch(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DeleteBranch=async (req,res,next)=>{
    try{
        
        // const user=req.body.user;
        const id=req.query.id
        console.log(req.body)
        const classes=await branchData.DeleteBranch(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const ClientBranchList=async (req,res,next)=>{
    try{
        
        // const user=req.body.user;
        const id=req.query.clientId
        console.log(req.body)
        const classes=await branchData.ClientBranchList(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

module.exports={
    getBranchList,
    addBranch,
    updateBranch,
    EnableBranch,
    DisableBranch,
    DeleteBranch,
    ClientBranchList
}