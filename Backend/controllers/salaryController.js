'use strict'

const regsalaryData = require('../data/empsalary')

const getsalaryList = async (req, res, next) => {
    try{
        const classes=await regsalaryData.getempsalaryList();
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

const  getsalarybyid=async (req, res, next)=>{
    try {
        const {id}=req.query
        const classes = await regsalaryData.getsalarybyid(id);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}

const deleteSalary=async (req,res,next)=>{
    try {
        const {id}=req.query
        const classes = await regsalaryData.deleteSalarydetails(id);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }  
}

const addSalary=async (req,res)=>{
    try{
        const {EmployeeId,Basesalary,Bonous,Overtime,Deductions,Ctc,Paydate,Taxamount,Socialsecurity,Healthinsurance,
            Pfemployercontribution,Pfemployeecontribution,Otherdeductions,Otherallowances,
            Travelallowances,Foodallowances,Housingallowances,Educationallowances,CreatedBy,CreatedOn}=req.body
        // console.log(Name)
        const obj={
            EmployeeId,
            Basesalary,
            Bonous,
            Overtime,
            Deductions,
            Ctc,
            Paydate,
            Taxamount,
            Socialsecurity,
            Healthinsurance,
            Pfemployercontribution,
            Pfemployeecontribution,
            Otherdeductions,
            Otherallowances,
            Travelallowances,
            Foodallowances,
            Housingallowances,
            Educationallowances,
            CreatedBy,
            CreatedOn
        }
        // const classes=await classData.addClass(name,user);
        const classes=await regsalaryData.addSalarydetails(obj);
      //  console.log(classes);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }

}


const updateSalary=async (req,res,next)=>{
    try{
        const {id}=req.query;
        const {EmployeeId,Basesalary,Bonous,Overtime,Deductions,Ctc,Paydate,Taxamount,Socialsecurity,Healthinsurance,
            Pfemployercontribution,Pfemployeecontribution,Otherdeductions,Otherallowances,
            Travelallowances,Foodallowances,Housingallowances,Educationallowances,CreatedBy,CreatedOn}=req.body
        // console.log(Name)
        const obj={
            id,
            EmployeeId,
            Basesalary,
            Bonous,
            Overtime,
            Deductions,
            Ctc,
            Paydate,
            Taxamount,
            Socialsecurity,
            Healthinsurance,
            Pfemployercontribution,
            Pfemployeecontribution,
            Otherdeductions,
            Otherallowances,
            Travelallowances,
            Foodallowances,
            Housingallowances,
            Educationallowances,
            CreatedBy,
            CreatedOn
        }
        // const classes=await classData.addClass(name,user);
        const classes=await regsalaryData.updateSalarydetails(obj);
      //  console.log(classes);
        res.send(classes);
    }
    catch(e){
        res.status(400).send(e.message)
    }
}
module.exports = {
    getsalaryList,
    getsalarybyid,
    addSalary,
    deleteSalary,
    updateSalary
}