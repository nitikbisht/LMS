'use strict'

const config=require('../config')
const sql=require('mssql');



const getClassList=async()=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('action',sql.VarChar,'GETALL')
                        .execute('USP_ClassMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const addClass=async(obj)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('name',sql.VarChar,obj.name)
                        .input('user',sql.VarChar,obj.user)
                        .input('action',sql.VarChar,'INSERT')
                        .execute('USP_ClassMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const updateClass=async(name,id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('Name',sql.VarChar,name)
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'UPDATE')
                        .execute('USP_ClassMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const EnableClass=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'ACTIVATE')
                        .execute('USP_ClassMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const DisableClass=async(id)=>{
    console.log(id)
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'DEACTIVATE')
                        .execute('USP_ClassMaster');
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const DeleteClass=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'DELETE')
                        .execute('USP_ClassMaster');
        
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const getBranchClassList=async(branchId)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('BranchId',sql.BigInt,branchId)
                        .input('action',sql.VarChar,'GETALL')
                        .execute('Usp_BranchClassMapping');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const getBranchClassById=async(Id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('Id',sql.BigInt,Id)
                        .input('action',sql.VarChar,'GETALL')
                        .execute('Usp_BranchClassMapping');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const addBranchClass=async(classDisplayName,branchid,createdBy,classId,basefee)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('BranchId',sql.BigInt,branchid)
                        // .input('Base_Fee',sql.Int,value)
                        .input('ClassNickName',sql.NVarChar,classDisplayName)
                        .input('CreatedBy',sql.NVarChar,createdBy)
                        .input('Base_Fee',sql.Int,basefee)
                        .input('ClassId',sql.BigInt,classId)
                        .input('action',sql.VarChar,'INSERT')

                        .execute('Usp_BranchClassMapping');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
    const editBranchClass=async(classNickName,updatedBy,id,basefee)=>{
        try{
            let pool =await sql.connect(config.sql);
            const result = await pool.request()
                            .input('id',sql.BigInt,id)
                            .input('updatedBy',sql.NVarChar,updatedBy)
                            .input('ClassNickName',sql.NVarChar,classNickName)
                            .input('Base_Fee',sql.Int,basefee)
                            .input('action',sql.VarChar,'UPDATE')
    
                            .execute('Usp_BranchClassMapping');
             console.log(result.recordset);
            return result.recordset;
        }
        catch(err){
            return err.message
        }
}


const EnableBranchClass=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'ACTIVATE')
                        .execute('Usp_BranchClassMapping');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}
const DisableBranchClass=async(id)=>{
    try{
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
                        .input('id',sql.BigInt,id)
                        .input('action',sql.VarChar,'DEACTIVATE')
                        .execute('Usp_BranchClassMapping');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}





module.exports={
    getClassList,
    addClass,
    updateClass,
    DisableClass,
    EnableClass,
    DeleteClass,
    addBranchClass,
    editBranchClass,
    getBranchClassList,
    getBranchClassById,
    EnableBranchClass,
    DisableBranchClass
}