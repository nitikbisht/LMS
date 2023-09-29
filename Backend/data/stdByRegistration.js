'use strict'

const config = require('../config')
const sql = require('mssql');


const getRegStudentList = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
        .input('id',sql.BigInt,id)
        // .input('Section',sql.BigInt,Section)
            // .input('action', sql.VarChar, 'GET')
            .execute('Usp_GetStudentByReg');
        console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}





module.exports = {
    getRegStudentList
}