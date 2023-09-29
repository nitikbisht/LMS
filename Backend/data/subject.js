'use strict'

const config=require('../config')
const sql=require('mssql');


const getsubjectList=async()=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('action',sql.VarChar,'GETALL')
                        .execute('Usp_SubjectMaster');
        console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const addSubject=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('name',sql.VarChar,obj.name)
                        .input('CreatedBy',sql.VarChar,obj.CreatedBy)
                        .input('action',sql.VarChar,'INSERT')
                        .execute('Usp_SubjectMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const updateSubject=async(name,id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'UPDATE')
                        .execute('Usp_SubjectMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const EnableSubject=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'ACTIVATE')
                        .execute('Usp_SubjectMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const DisableSubject=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'DEACTIVATE')
                        .execute('Usp_SubjectMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const DeleteSubject=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'DELETE')
                        .execute('Usp_SubjectMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const getClassSubject=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('ClassId',sql.BigInt,id)
                        .input('action',sql.VarChar,'GETALL')
                        .execute('Usp_ClassSubjectMapping');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const addClassSubject=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('ClassId',sql.BigInt,obj.classId)
                        .input('SubjectDisplayName',sql.NVarChar,obj.subjectDisplayName)
                        .input('SubjectId',sql.BigInt,obj.subjectId)
                        .input('CreatedBy',sql.NVarChar,obj.createdBy)
                        .input('ClientId',sql.BigInt,obj.clientId)
                        .input('BranchId',sql.BigInt,obj.branchId)
                        .input('action',sql.VarChar,'INSERT')
                        .execute('Usp_ClassSubjectMapping');
                        
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const EnableClassSubject=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'ACTIVATE')
                        .execute('Usp_ClassSubjectMapping');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const DisableClassSubject=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        // .input('name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'DEACTIVATE')
                        .execute('Usp_ClassSubjectMapping');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const updateClassSubject=async(ClassId,Id,SubjectId,SubjectDisplayName,UpdatedBy)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('ClassId',sql.BigInt,ClassId)
                        .input('SubjectId',sql.BigInt,SubjectId)
                        .input('SubjectDisplayName',sql.NVarChar,SubjectDisplayName)
                        .input('UpdatedBy',sql.NVarChar,UpdatedBy)
                        .input('Id',sql.BigInt,Id)
                        .input('action',sql.VarChar,'UPDATE')
                        .execute('Usp_ClassSubjectMapping');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
module.exports={
    getsubjectList,
    addSubject,
    updateSubject,
    EnableSubject,
    DisableSubject,
    DeleteSubject,
    getClassSubject,
    addClassSubject,
    EnableClassSubject,
    DisableClassSubject,
    updateClassSubject
}