'use strict'

const config=require('../config')
const sql=require('mssql');




const getClientList=async()=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('action',sql.VarChar,'GETALL')
                        .execute('Usp_ClientMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const getClientbyUser=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('CreatedBy',sql.VarChar,obj.userName)
                        .input('action',sql.VarChar,'GETBYUSER')
                        .execute('Usp_ClientMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const addClient=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('name',sql.VarChar,obj.name)
                        // .input('user',sql.VarChar,obj.user)
                        .input('action',sql.VarChar,'INSERT')
                        .execute('Usp_ClientMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const updateClient=async(Name,ClientId,Logo,ContactPerson,UpdatedBy,ContactNumber)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('name',sql.VarChar,Name)
                        .input('ClientId',sql.BigInt,ClientId)
                        .input('Logo',sql.VarChar,Logo)
                        .input('ContactPerson',ContactPerson)
                        .input('UpdatedBy',UpdatedBy)
                        .input('ContactNumber',ContactNumber)
                        .input('action',sql.VarChar,'UPDATE')
                        .execute('Usp_ClientMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const EnableClient=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'ACTIVATE')
                        .execute('Usp_ClientMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const DisableClient=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'DEACTIVATE')
                        .execute('Usp_ClientMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const DeleteClient=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'DELETE')
                        .execute('Usp_ClientMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}



module.exports={
    getClientList,
    getClientbyUser,
    addClient,
    updateClient,
    EnableClient,
    DisableClient,
    DeleteClient

}