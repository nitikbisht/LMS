'use strict'

const sectionData =require('../data/section')

const getsectionList=async (req,res,next)=>{
    try{
        const classes=await sectionData.getsectionList();
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const addSection=async (req,res,next)=>{
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
        const classes=await sectionData.addSection(obj);
        // const classes=await classData.addClass(req.body);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const updateSection=async (req,res,next)=>{
    try{
        const name=req.body.name;
        // const user=req.body.user;
        const id=req.body.id
        console.log(req.body)
        const classes=await sectionData.updateSection(name,id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const EnableSection=async (req,res,next)=>{
    try{
        const id=req.query.id
        console.log(req.body)
        const classes=await sectionData.EnableSection(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DisableSection=async (req,res,next)=>{
    try{
        const id=req.query.id
        console.log(req.body)
        const classes=await sectionData.DisableSection(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DeleteSection=async (req,res,next)=>{
    try{
        
        // const user=req.body.user;
        const id=req.query.id
        console.log(req.body)
        const classes=await sectionData.DeleteSection(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const GetClassSection=async (req,res,next)=>{
    try{
        
        // const user=req.body.user;
        const id=req.query.classId
        console.log(id)
        const classes=await sectionData.GetClassSection(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const AddClassSection=async (req,res,next)=>{
    try{
        
        // const user=req.body.user;
        const {ClassId,SectionId,SectionDisplayName,CreatedBy,subjects,Effective_Fee}=req.body
        // console.log(req.body)
        const classes=await sectionData.AddClassSection(ClassId,SectionId,SectionDisplayName,CreatedBy,subjects,Effective_Fee);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const GetClassSectionSubject=async (req,res,next)=>{
    try{
        
        // const user=req.body.user;
        const id=req.query.classId
        // console.log(req.body)
        const classes=await sectionData.GetClassSectionSubject(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

module.exports={
    GetClassSectionSubject,
    AddClassSection,
    getsectionList,
    addSection,
    updateSection,
    EnableSection,
    DisableSection,
    DeleteSection,
    GetClassSection
}