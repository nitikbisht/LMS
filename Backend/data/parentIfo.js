'use strict'

const config=require('../config')
const sql=require('mssql');


const getparentInfoByid=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
        .input('guardian_id',sql.BigInt,id)
                        .input('action',sql.VarChar,'GETBYID')
                        .execute('Usp_student_guardian_info');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const addparentInfo=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('branch_id',sql.Int,obj.branch_id)
                        .input('client_id',sql.Int,obj.client_id)
                        .input('first_name',sql.VarChar,obj.first_name)
                        .input('middle_name',sql.VarChar,obj.middle_name)
                        .input('last_name',sql.VarChar,obj.last_name)
                        .input('photo',sql.VarChar,obj.photo)
                        .input('guardian_type',sql.VarChar,obj.guardian_type)
                        .input('created_by',sql.VarChar,obj.created_by)
                        .input('home_address',sql.VarChar,obj.home_address)
                        .input('work_address',sql.VarChar,obj.work_address)
                        .input('mobile_no',sql.VarChar,obj.mobile_no)
                        .input('alternate_mobile_no',sql.VarChar,obj.alternate_mobile_no)
                        .input('occupation',sql.VarChar,obj.occupation)
                        .input('highest_education',sql.VarChar,obj.highest_education)
                        .input('id_type',sql.VarChar,obj.id_type)
                        .input('id_number',sql.VarChar,obj.id_number)
                        .input('income',sql.Int,obj.income)
                        .input('email_address',sql.VarChar,obj.email_address)
                        .input('is_active',sql.Bit,obj.is_active)
                        .input('student_id',sql.Int,obj.student_id)
                        .input('action',sql.VarChar,'INSERT')
                        .execute('Usp_student_guardian_info');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const updateparentInfo=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('guardian_id',sql.Int,obj.guardian_id)
                        .input('branch_id',sql.Int,obj.branch_id)
                        .input('client_id',sql.Int,obj.client_id)
                        .input('first_name',sql.VarChar,obj.first_name)
                        .input('middle_name',sql.VarChar,obj.middle_name)
                        .input('last_name',sql.VarChar,obj.last_name)
                        .input('photo',sql.VarChar,obj.photo)
                        .input('guardian_type',sql.VarChar,obj.guardian_type)
                        .input('modified_by',sql.VarChar,obj.modified_by)
                        .input('home_address',sql.VarChar,obj.home_address)
                        .input('work_address',sql.VarChar,obj.work_address)
                        .input('mobile_no',sql.VarChar,obj.mobile_no)
                        .input('alternate_mobile_no',sql.VarChar,obj.alternate_mobile_no)
                        .input('occupation',sql.VarChar,obj.occupation)
                        .input('highest_education',sql.VarChar,obj.highest_education)
                        .input('id_type',sql.VarChar,obj.id_type)
                        .input('id_number',sql.VarChar,obj.id_number)
                        .input('income',sql.Int,obj.income)
                        .input('email_address',sql.VarChar,obj.email_address)
                        .input('is_active',sql.Bit,obj.is_active)
                        .input('action',sql.VarChar,'UPDATE')
                        .execute('Usp_student_guardian_info');
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const EnableparentInfo=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('guardian_id',sql.BigInt,id)
                        .input('action',sql.VarChar,'ACTIVATE')
                        .execute('Usp_student_guardian_info');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const DisableparentInfo=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('guardian_id',sql.BigInt,id)
                        .input('action',sql.VarChar,'DEACTIVATE')
                        .execute('Usp_student_guardian_info');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const DeleteparentInfo=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('guardian_id',sql.BigInt,id)
                        .input('action',sql.VarChar,'DELETE')
                        .execute('Usp_student_guardian_info');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}



module.exports={
    getparentInfoByid,
    addparentInfo,
    updateparentInfo,
    EnableparentInfo,
    DisableparentInfo,
    DeleteparentInfo

}