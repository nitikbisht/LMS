'use strict'

const ParentInfoData =require('../data/parentIfo')

const getparentInfoByid=async (req,res,next)=>{
    try{
        const {id}=req.query
        const classes=await ParentInfoData.getparentInfoByid(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const addParentInfo=async (req,res,next)=>{
    try{
        
        const {branch_id,client_id,first_name,middle_name,
            last_name,photo,guardian_type,home_address,work_address,
        mobile_no,alternate_mobile_number,occupation,highest_education,
      id_type,id_number,income,email_address,created_by,is_active,student_id}=req.body
       // console.log(req.body)
        const obj={
           branch_id,
           client_id,
           first_name,
           middle_name,
           last_name,
           photo,
           guardian_type,
           home_address,
           work_address,
           mobile_no,
           alternate_mobile_number,
           occupation,
           highest_education,
           id_number,
           id_type,
           income,email_address,
           created_by,
           is_active,
           student_id
        }
        console.log(obj)
        // const classes=await classData.addClass(name,user);
        const classes=await ParentInfoData.addparentInfo(obj);
        // const classes=await classData.addClass(req.body);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const updateParentInfo=async (req,res,next)=>{
    try{
        const {guardian_id,branch_id,client_id,first_name,middle_name,
            last_name,photo,guardian_type,home_address,work_address,
        mobile_no,alternate_mobile_number,occupation,highest_education,
      id_type,id_number,income,email_address,modified_by,is_active}=req.body
       // console.log(req.body)
        const obj={
            guardian_id,
            branch_id,
            client_id,
            first_name,
            middle_name,
            last_name,
            photo,
            guardian_type,
            home_address,
            work_address,
            mobile_no,
            alternate_mobile_number,
            occupation,
            highest_education,
            id_number,
            id_type,
            income,email_address,
            modified_by,
            is_active
        }
        const classes=await ParentInfoData.updateparentInfo(obj);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const EnableParentInfo=async (req,res,next)=>{
    try{
        const id=req.query.id
        //console.log(req.body)
        const classes=await ParentInfoData.EnableparentInfo(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DisableParentInfo=async (req,res,next)=>{
    try{
        const id=req.query.id
        //console.log(req.body)
        const classes=await ParentInfoData.DisableparentInfo(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DeleteParentInfo=async (req,res,next)=>{
    try{
        
        // const user=req.body.user;
        const id=req.query.id
      //  console.log(req.body)
        const classes=await ParentInfoData.DeleteparentInfo(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}



module.exports={
    getparentInfoByid,
    addParentInfo,
    updateParentInfo,
    EnableParentInfo,
    DisableParentInfo,
    DeleteParentInfo
}