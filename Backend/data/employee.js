'use strict'

const config = require('../config')
const sql = require('mssql');


const getEmployeeList=async(pageno,results)=>{
    try{
        let pool =await sql.connect(config.sql);
        // console.log(pageno);
        // console.log(results);
        const result = await pool.request()
                        .input('action',sql.VarChar,'GETALL')
                        .input('pageno',sql.BigInt,pageno)
                        .input('result',sql.BigInt,results)
                        .execute('USP_Employee');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const managerlist=async()=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .execute('Usp_Managerlist');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const getEmployeebyId = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('id', sql.BigInt, id)
            .input('action', sql.VarChar, 'GETBYID')
            .execute('Usp_Employee');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}

const addEmployee = async (obj) => {
    try {
        // console.log("name:",obj.Name)
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
                        .input('EmployeeId',sql.VarChar,obj.EmployeeId)
                        .input('Name',sql.VarChar,obj.Name)
                        .input('EmployeeType',sql.Int,obj.EmployeeType)
                        .input('Photo',sql.VarChar,obj.path)
                        .input('ContactNo',sql.VarChar,obj.ContactNo)
                        .input('JoinningDate',sql.VarChar,obj.JoinningDate)
                        .input('FatherName',sql.VarChar,obj.FatherName)
                        .input('Gender',sql.Int,obj.Gender)
                        .input('Experience',sql.Int,obj.Experience)
                        .input('AadharNumber',sql.VarChar,obj.AadharNumber)
                        .input('ClientId',sql.Int,obj.ClientId)
                        .input('BranchId',sql.Int,obj.BranchId)
                        .input('Religion',sql.VarChar,obj.Religion)
                        .input('Email',sql.VarChar,obj.Email)
                        .input('Education',sql.VarChar,obj.Education)
                        .input('BloodGroup',sql.VarChar,obj.BloodGroup)
                        .input('DateOfBirth',sql.VarChar,obj.DateOfBirth)
                        .input('Address',sql.VarChar,obj.Address)
                        .input('IsActive',sql.Int,1)
                        .input('CreatedBy',sql.VarChar,obj.CreatedBy)
                        .input('Salary',sql.Decimal,obj.Salary)
                        .input('Manager',sql.VarChar,obj.Manager)
                        .input('action',sql.VarChar,'INSERT')
                        .execute('USP_Employee');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}

const updateEmployee = async (obj) => {
    try {
        // console.log(obj.Name)
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('Id', sql.Int, obj.Id)
            .input('EmployeeId', sql.VarChar, obj.EmployeeId)
            .input('Name', sql.VarChar, obj.Name)
            .input('EmployeeType', sql.Int, obj.EmployeeType)
            .input('Photo', sql.VarChar, obj.path)
            .input('ContactNo', sql.VarChar, obj.ContactNo)
            .input('EmergencyContact', sql.VarChar, obj.EmergencyContact)
            .input('JoinningDate', sql.VarChar, obj.JoinningDate)
            .input('FatherName', sql.VarChar, obj.FatherName)
            .input('Gender', sql.Int, obj.Gender)
            .input('Experience', sql.Int, obj.Experience)
            .input('AadharNumber', sql.VarChar, obj.AadharNumber)
            .input('ClientId', sql.Int, obj.ClientId)
            .input('BranchId', sql.Int, obj.BranchId)
            .input('Religion', sql.VarChar, obj.Religion)
            .input('Email', sql.VarChar, obj.Email)
            .input('Education', sql.VarChar, obj.Education)
            .input('BloodGroup', sql.VarChar, obj.BloodGroup)
            .input('DateOfBirth', sql.VarChar, obj.DateOfBirth)
            .input('Address', sql.VarChar, obj.Address)
            .input('IsActive', sql.Int, obj.IsActive)
            .input('UpdatedBy', sql.VarChar, obj.CreatedBy)
            .input('Salary', sql.Decimal, obj.Salary)

            .input('action', sql.VarChar, 'UPDATE')
            .execute('USP_Employee');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}
const EnableEmployee = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            // .input('name',sql.VarChar,name)
            .input('id', sql.BigInt, id)
            .input('action', sql.VarChar, 'ACTIVATE')
            .execute('USP_Employee');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}
const DisableEmployee = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            // .input('name',sql.VarChar,name)
            .input('id', sql.BigInt, id)
            .input('action', sql.VarChar, 'DEACTIVATE')
            .execute('USP_Employee');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}

const DeleteEmployee = async (id) => {
    try {
        //console.log(id);
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            // .input('name',sql.VarChar,name)
            .input('id', sql.BigInt, id)
            .input('action', sql.VarChar, 'DELETE')
            .execute('USP_Employee');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}
const GetEmployeeType = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            // .input('name',sql.VarChar,name)
            .input('action', sql.VarChar, 'GET')
            .execute('USP_EmployeeType');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}
const GetEmployeeByType = async (type,pageno,resultno) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('pageno', sql.BigInt,pageno)
            .input('result', sql.BigInt,resultno)
            .input('EmployeeType', sql.VarChar, type)
            .input('action', sql.VarChar, 'GETBYTYPE')
            .execute('USP_Employee');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}


module.exports = {
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