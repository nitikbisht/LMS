'use strict'

const config = require('../config')
const sql = require('mssql');


const getEmployeeCount = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('action', sql.VarChar, 'GETEMPLOYEECOUNT')
            .execute('Usp_pagination');
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}
const getEmployeeCountByType = async (type) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('EmployeeType', sql.BigInt, type)
            .input('action', sql.VarChar, 'GETEMPLOYEECOUNTBYTYPE')
            .execute('Usp_pagination');
        // console.log(result.recordset)
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}

// student fee count
const getStudentFeeCount = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('action', sql.VarChar, 'GETSTUDENTFEECOUNT')
            .execute('Usp_pagination');
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}

module.exports = {
    getEmployeeCount,
    getEmployeeCountByType,
    getStudentFeeCount
}