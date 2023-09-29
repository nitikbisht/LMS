'use strict'

const EmployeeData =require('../data/employee')
const fs=require('fs');

const getEmployeeList=async (req,res,next)=>{
    try{
        const {pageno,result}=req.query
        // console.log(req.query);
        const classes=await EmployeeData.getEmployeeList(pageno,result);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const managerlist=async (req,res,next)=>{
    try{
        const classes=await EmployeeData.managerlist();
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const getEmployeebyId = async (req, res, next) => {
    try {
        const {id}=req.query
        // console.log(class,section)
        const classes = await EmployeeData.getEmployeebyId(id);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}

const addEmployee=async (req,res,next)=>{
    try{
        const {EmployeeId,Name,EmployeeType,Salary,Photo,ContactNo,Manager,EmergencyContact,JoinningDate,FatherName,Gender,Experience,AadharNumber,ClientId,BranchId,Religion,Email,Education,BloodGroup,DateOfBirth,Address,IsActive,CreatedBy,CreatedOn,UpdatedBy,UpdatedOn}=req.body
        const obj={
            EmployeeId,
            Name,
            Salary,
            EmployeeType,
            ContactNo,
            JoinningDate,
            FatherName,
            Gender,
            Experience,
            AadharNumber,
            ClientId,
            BranchId,
            Religion,
            Email,
            Education,
            BloodGroup,
            DateOfBirth,
            Address,
            CreatedBy,
            path:req.file.path,
            Manager
        }
        console.log(obj)
        const classes=await EmployeeData.addEmployee(obj);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const updateEmployee=async (req,res,next)=>{
    try{
        const {Id,EmployeeId,Name,EmployeeType,Photo,ContactNo,JoinningDate,FatherName,Gender,Experience,AadharNumber,ClientId,BranchId,Salary,Religion,Email,Education,BloodGroup,DateOfBirth,Address,IsActive,CreatedBy,CreatedOn,UpdatedBy,UpdatedOn}=req.body
        const obj={
            Id,
            EmployeeId,
            Name,
            Salary,
            EmployeeType,
            Photo,
            ContactNo,
            JoinningDate,
            FatherName,
            Gender,
            Experience,
            AadharNumber,
            ClientId,
            BranchId,
            Religion,
            Email,
            IsActive,
            Education,
            BloodGroup,
            DateOfBirth,
            Address,
            UpdatedBy,
            path:req.file.path
        }
        console.log(obj)
       // console.log(Photo);
        // if(Photo!='null'){
        //     var filePath = Photo; 
        //     fs.unlinkSync(filePath);
        // }
        // else{
        //     console.log("no photo available")
        // }
        const classes=await EmployeeData.updateEmployee(obj);
        console.log(classes)
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const EnableEmployee=async (req,res,next)=>{
    try{
        const id=req.query.id
        const classes=await EmployeeData.EnableEmployee(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DisableEmployee=async (req,res,next)=>{
    try{
        const id=req.query.id
        const classes=await EmployeeData.DisableEmployee(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const DeleteEmployee=async (req,res,next)=>{
    try{
        const id=req.query.id
        const classes=await EmployeeData.DeleteEmployee(id);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
const GetEmployeeType=async (req,res,next)=>{
    try{
        const classes=await EmployeeData.GetEmployeeType();
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const GetEmployeeByType=async (req,res,next)=>{
    try{
        const {type,pageno,result}=req.query
        const classes=await EmployeeData.GetEmployeeByType(type,pageno,result);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
module.exports={
    GetEmployeeByType,
    GetEmployeeType,
    getEmployeeList,
    getEmployeebyId,
    addEmployee,
    updateEmployee,
    EnableEmployee,
    DisableEmployee,
    DeleteEmployee,
    managerlist
}