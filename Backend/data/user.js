'use strict'

const config=require('../config')
const sql=require('mssql');


const userSignup=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('UserName',sql.VarChar,obj.UserName)
                        .input('CredBits',sql.VarChar,obj.CredBits)
                        .input('action',sql.VarChar,'INSERT')
                        .execute('USP_User');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const userLogin=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('UserName',sql.VarChar,obj.UserName)
                        .input('CredBits',sql.VarChar,obj.CredBits)
                        .input('action',sql.VarChar,'LOGIN')
                        .execute('USP_User');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const geneateotp=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('UserName',sql.VarChar,obj.UserName)
                        // .input('CredBits',sql.VarChar,obj.CredBits)
                        // .input('action',sql.VarChar,'LOGIN')
                        .execute('USP_GeneratePasscode');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const validateotp=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('UserName',sql.VarChar,obj.UserName)
                        .input('OTP',sql.VarChar,obj.OTP)
                        // .input('action',sql.VarChar,'LOGIN')
                        .execute('USP_ValidatePasscode');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const updatepassword=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('UserName',sql.VarChar,obj.UserName)
                        .input('CredBits',sql.VarChar,obj.CredBits)
                        // .input('action',sql.VarChar,'LOGIN')
                        .execute('USP_GenerateCredBits');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

module.exports={
    userSignup,
    userLogin,
    geneateotp,
    validateotp,
    updatepassword
}