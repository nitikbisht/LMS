'use strict'

const config=require('../config')
const sql=require('mssql');


const getFormList=async(name)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('UserName',sql.NVarChar,name)
                        .input('action',sql.VarChar,'GET')
                        .execute('Usp_RoleFormMapping');
        // console.log(name);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}


module.exports={
    getFormList,
}