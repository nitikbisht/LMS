'use strict'

const config = require('../config')
const sql = require('mssql');

const getstdList = async (pageno,results) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('pageno', sql.BigInt,pageno)
            .input('result', sql.BigInt,results)
            .execute('Usp_GetAllStudentFeeDetails');
        // console.log(result.recordset);
        return result.recordset;
    } catch (err) {
        return err.message;
    }
};

const getStdfeebynameandmobile = async (obj) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('name', sql.VarChar, obj.name) 
             .input('mobile', sql.VarChar, obj.mobile)
            .execute('Usp_SearchStudentFeeDetailsbyNameAndMobileNumber');
        // console.log(result.recordset);
        return result.recordset;
    } catch (err) {
        return err.message;
    }
};

const getStdfeebyId = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('studentId', sql.BigInt, id) 
            // .input('action', sql.VarChar, 'GETBYID')
            .execute('Usp_GetStudentFeeDetails');
        // console.log(result.recordset);
        return result.recordset;
    } catch (err) {
        return err.message;
    }
};

const getStudentFeeByName= async(name)=>{
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('studentName', sql.VarChar, name) 
            //.input('action', sql.VarChar, 'GETBYID')
            .execute('Usp_GetStudentFeeByStudentName');
        // console.log(result.recordset);
        return result.recordset;
    } catch (err) {
        return err.message;
    }
}


const addStdfee = async (obj) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('studentId', sql.BigInt, obj.studentId)
            .input('formonth', sql.NVarChar, obj.formonth)
            .input('totalfee', sql.BigInt, obj.totalfee)
            .input('feepaid', sql.BigInt, obj.feepaid)
            .input('balancefee', sql.BigInt, obj.balancefee)
            .input('paydate', sql.DateTime, obj.paydate)
            .input('status', sql.NVarChar, obj.status)
            .input('monthlyfee', sql.BigInt, obj.monthlyfee)
            .input('latefee', sql.BigInt, obj.latefee)
            .input('createdby', sql.NVarChar, obj.createdby)
            .input('action', sql.VarChar, 'INSERT')
            .execute('Usp_GetStudentFeeDetails');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}

const updateStudentFee = async (student)=>{
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('student_id', sql.BigInt, student.student_id)
            .input('for_month', sql.NVarChar, student.for_month)
            .input('amount', sql.BigInt, student.amount)
            .execute('Usp_UpdateStudentFeeDetail');
        
        return result.recordset;
    } catch (error) {
        return error.message
    }
}

const updateStudentFeeAllmonth = async (student)=>{
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('student_id', sql.BigInt, student.student_id)
            .input('amount', sql.BigInt, student.amount)
            .execute('Usp_DeductPendingBalances');
        
        return result.recordset;
    } catch (error) {
        return error.message
    }
}

const StudentFeetranscation = async (student)=>{
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('student_id', sql.BigInt, student.student_id)
            .execute('Usp_Feetranscation');
        return result.recordset;
    } catch (error) {
        return error.message
    }
}



module.exports = {
    updateStudentFeeAllmonth,
    getstdList,
    getStdfeebynameandmobile,
    addStdfee,
    getStudentFeeByName,
    updateStudentFee,
    getStdfeebyId,
    StudentFeetranscation
};
