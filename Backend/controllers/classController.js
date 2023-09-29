'use strict'

const classData =require('../data/class')
const test=async (req,res,next)=>{
    try{
        res.send("api is running");
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const getclasses=async (req,res,next)=>{
    try{
        const classes=await classData.getClassList();
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const getBranchClassById=async (req,res,next)=>{
    try{
        const {Id}=req.query
        const classes=await classData.getBranchClassById(Id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const addClass=async (req,res,next)=>{
    try{
        // const name=req.body.name;
        // const user=req.body.user;
        const {name}=req.body
        console.log(req.body)
        const obj={
            name
        }
        // const classes=await classData.addClass(name,user);
        const classes=await classData.addClass(obj);
        // const classes=await classData.addClass(req.body);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const updateClass=async (req,res,next)=>{
    try{
        const name=req.body.name;
        // const user=req.body.user;
        const id=req.body.id
        // console.log(req.body)
        const classes=await classData.updateClass(name,id);
        console.log(classes)
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const EnableClass=async (req,res,next)=>{
    try{
        const id=req.query.id
        const classes=await classData.EnableClass(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DisableClass=async (req,res,next)=>{
    try{
        const id=req.query.id
        console.log(req.body)
        const classes=await classData.DisableClass(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DeleteClass=async (req,res,next)=>{
    try{
        const id=req.query.id
        console.log(req.body)
        const classes=await classData.DeleteClass(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const getBranchClass=async (req,res,next)=>{
    try{
        const {branchId}=req.query;
        // console.log(branchId)
        const classes=await classData.getBranchClassList(branchId);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const addBranchClass=async (req,res,next)=>{
    try{
        const {classDisplayName,branchid,createdBy,classId,basefee}=req.body;
        // const user=req.body.user;
        // const id=req.body.id
        console.log(req.body)
        const classes=await classData.addBranchClass(classDisplayName,branchid,createdBy,classId,basefee);
        // console.log(classes)
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const editBranchClass=async (req,res,next)=>{
    try{
        const {classNickName,updatedBy,id,basefee}=req.body;
         //const user=req.body.user;
         //const id=req.body.id
        console.log(req.body)
        const classes=await classData.editBranchClass(classNickName,updatedBy,id,basefee);
        // console.log(classes)
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const EnableBranchClass=async (req,res,next)=>{
    try{
        const id=req.query.id
        // console.log(req.body)
        const classes=await classData.EnableBranchClass(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DisableBranchClass=async (req,res,next)=>{
    try{
        const id=req.query.id
        console.log(req.body)
        const classes=await classData.DisableBranchClass(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}


module.exports={
    getclasses,
    addClass,
    updateClass,
    DisableClass
    ,EnableClass
    ,DeleteClass,
    addBranchClass,
    editBranchClass,
    getBranchClass,
    getBranchClassById,
    EnableBranchClass,
    DisableBranchClass,
    test
}