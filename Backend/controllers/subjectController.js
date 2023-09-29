'use strict'

const subjectData =require('../data/subject')

const getsubjectList=async (req,res,next)=>{
    try{
        const classes=await subjectData.getsubjectList();
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const addSubject=async (req,res,next)=>{
    try{
        // const name=req.body.name;
        // const user=req.body.user;
        const {name,CreatedBy}=req.body
        console.log(req.body)
        const obj={
            name,
            CreatedBy
        }
        // const classes=await classData.addClass(name,user);
        const classes=await subjectData.addSubject(obj);
        // const classes=await classData.addClass(req.body);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const updateSubject=async (req,res,next)=>{
    try{
        const name=req.body.name;
        // const user=req.body.user;
        const id=req.body.id
        console.log(req.body)
        const classes=await subjectData.updateSubject(name,id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const EnableSubject=async (req,res,next)=>{
    try{
        const id=req.query.id
        console.log(req.body)
        const classes=await subjectData.EnableSubject(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DisableSubject=async (req,res,next)=>{
    try{
        const id=req.query.id
        console.log(req.body)
        const classes=await subjectData.DisableSubject(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DeleteSubject=async (req,res,next)=>{
    try{
        
        // const user=req.body.user;
        const id=req.query.id
        console.log(req.body)
        const classes=await subjectData.DeleteSubject(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const getClassSubject=async (req,res,next)=>{
    try{
        
        // const user=req.body.user;
        const id=req.query.classId
        // console.log(req.body)
        const classes=await subjectData.getClassSubject(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const addClassSubject=async (req,res,next)=>{
    try{
        
        // const user=req.body.user;
        const obj=req.body
        console.log(obj)
        const classes=await subjectData.addClassSubject(obj);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const EnableClassSubject=async (req,res,next)=>{
    try{
        const id=req.query.id
        console.log(req.body)
        const classes=await subjectData.EnableClassSubject(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DisableClassSubject=async (req,res,next)=>{
    try{
        const id=req.query.id
        console.log(req.body)
        const classes=await subjectData.DisableClassSubject(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const updateClassSubject=async (req,res,next)=>{
    try{
        const {ClassId,Id,SubjectId,SubjectDisplayName,UpdatedBy}=req.body
        // console.log(req.body)
        const classes=await subjectData.updateClassSubject(ClassId,Id,SubjectId,SubjectDisplayName,UpdatedBy);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

module.exports={
    getsubjectList,
    addSubject,
    updateSubject,
    EnableSubject,
    DisableSubject,
    DeleteSubject,
    getClassSubject,
    addClassSubject,
    EnableClassSubject,
    DisableClassSubject,
    updateClassSubject
}