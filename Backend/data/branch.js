'use strict'

const config = require('../config')
const sql = require('mssql');



const getBranchList = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('action', sql.VarChar, 'GETALL')
            .execute('Usp_BranchMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}

const addBranch = async (obj) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('name', sql.NVarChar, obj.name)
            .input('Address', sql.NVarChar, obj.address)
            .input('Logo', sql.NVarChar, obj.logo)
            .input('ContactPersonFirstName', sql.NVarChar, obj.contactPersonFirstName)
            .input('ContactPersonLastName', sql.NVarChar, obj.contactPersonLastName)
            .input('ContactPersonEmail', sql.NVarChar, obj.contactPersonEmail)
            .input('ContactNumber', sql.NVarChar, obj.contactNumber)
            .input('CreatedBy', sql.NVarChar, obj.createdBy)
            .input('ClientId', sql.BigInt, obj.ClientId)

            .input('action', sql.VarChar, 'INSERT')
            .execute('Usp_BranchMaster');
            // console.log("first")
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}

const updateBranch = async (obj) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('name', sql.NVarChar, obj.Name)
            .input('Address', sql.NVarChar, obj.Address)
            .input('Logo', sql.NVarChar, obj.Logo)
            .input('ContactPersonFirstName', sql.NVarChar, obj.ContactPersonFirstName)
            .input('ContactPersonLastName', sql.NVarChar, obj.ContactPersonLastName)
            .input('ContactPersonEmail', sql.NVarChar, obj.ContactPersonEmail)
            .input('ContactNumber', sql.NVarChar, obj.ContactNumber)
            .input('branchId', sql.BigInt, obj.branchId)
            .input('ClientId', sql.BigInt, obj.ClientId)
            .input('UpdatedBy', sql.NVarChar, obj.UpdatedBy)
            .input('action', sql.VarChar, 'UPDATE')
            .execute('Usp_BranchMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}
const EnableBranch = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('BranchId', sql.BigInt, id)
            .input('action', sql.VarChar, 'ACTIVATE')
            .execute('Usp_BranchMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}
const DisableBranch = async (BranchId) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('BranchId', sql.BigInt, BranchId)
            .input('action', sql.VarChar, 'DEACTIVATE')
            .execute('Usp_BranchMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}

const DeleteBranch = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('BranchId', sql.BigInt, id)
            .input('action', sql.VarChar, 'DELETE')
            .execute('Usp_BranchMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}
const ClientBranchList = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('ClientId', sql.BigInt, id)
            .input('action', sql.VarChar, 'GETBYCLIENT')
            .execute('Usp_BranchMaster');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        return err.message
    }
}


module.exports = {
    getBranchList,
    addBranch,
    updateBranch,
    DisableBranch,
    EnableBranch,
    DeleteBranch,
    ClientBranchList
}