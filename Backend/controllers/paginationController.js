'use strict'


const PaginationData=require('../data/pagination')
const getEmployeeCount=async (req,res)=>{
    try {
        const classes = await PaginationData.getEmployeeCount();
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const getEmployeeCountByType=async (req,res)=>{
    try {
        const {employeetype}=req.query
        // console.log(req.query)
        // console.log(employeetype)
        const classes = await PaginationData.getEmployeeCountByType(employeetype);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const getStudentCount=async (req,res)=>{
    try {
        const classes = await PaginationData.getEmployeeCount();
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const getStudentCountByClass=async (req,res)=>{
    try {
        const {classid}=req.query
        const classes = await PaginationData.getEmployeeCountByType(classid);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const getStudentCountByClassandSection=async (req,res)=>{
    try {
        const {classid,sectionid}=req.query
        const classes = await PaginationData.getEmployeeCountByType(classid,sectionid);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
// student fee
const getStudentFeeCount=async (req,res)=>{
    try {
        const classes = await PaginationData.getStudentFeeCount();
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
module.exports={
    getEmployeeCount,
    getEmployeeCountByType,
    getStudentCount,
    getStudentCountByClass,
    getStudentCountByClassandSection,
    getStudentFeeCount
}