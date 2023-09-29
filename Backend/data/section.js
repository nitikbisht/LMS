'use strict'

const config=require('../config')
const sql=require('mssql');


const getsectionList=async()=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('action',sql.VarChar,'GETALL')
                        .execute('Usp_SectionMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const addSection=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('name',sql.VarChar,obj.name)
                        // .input('user',sql.VarChar,obj.user)
                        .input('action',sql.VarChar,'INSERT')
                        .execute('Usp_SectionMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const updateSection=async(name,id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'UPDATE')
                        .execute('Usp_SectionMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const EnableSection=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'ACTIVATE')
                        .execute('Usp_SectionMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const DisableSection=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'DEACTIVATE')
                        .execute('Usp_SectionMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const DeleteSection=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'DELETE')
                        .execute('Usp_SectionMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const GetClassSection=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
       // console.log(id);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('ClassId',sql.BigInt,id)
                        .input('action',sql.VarChar,'GET')
                        .execute('Usp_ClassSectionMapping');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const GetClassSectionSubject=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('ClassId',sql.BigInt,id)
                        .input('action',sql.VarChar,'GETALL')
                        .execute('Usp_ClassSectionMapping');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const AddClassSection=async(ClassId,SectionId,SectionDisplayName,CreatedBy,subjects,Effective_Fee)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('ClassId',sql.BigInt,ClassId)
                        .input('SectionId',sql.BigInt,SectionId)
                        .input('SectionDisplayName',sql.NVarChar,SectionDisplayName)
                        .input('CreatedBy',sql.NVarChar,CreatedBy)
                        .input('subjects',sql.NVarChar,subjects)
                        .input('Effective_Fee',sql.BigInt,Effective_Fee)
                        .input('action',sql.VarChar,'INSERT')
                        .execute('Usp_ClassSectionMapping');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}


module.exports={
    GetClassSectionSubject,
    getsectionList,
    addSection,
    updateSection,
    EnableSection,
    DisableSection,
    DeleteSection,
    GetClassSection,
    AddClassSection

}