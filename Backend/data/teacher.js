'use strict'

const config = require('../config')
const sql = require('mssql');


const getteacherList = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
        .input('action', sql.VarChar, 'GET')
            .execute('Usp_GetSubjectTeachers_Table');
        //console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}
module.exports = {
    getteacherList
}