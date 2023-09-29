'use strict'

const config = require('../config')
const sql = require('mssql');


const getempsalaryList = async () => {
        try{
            let pool =await sql.connect(config.sql);
            const result = await pool.request()
                            .input('action',sql.VarChar,'GETALL')
                            .execute('USP_Salary');
          //  console.log(result.recordset);
            return result.recordset;
        }
        catch(err){
            return err.message
        }
}

const getsalarybyid = async (id) => {
    try {
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
            .input('Action', sql.VarChar(20), 'GETBYID') // Set the action to 'GETBYID'
            .input('Id', sql.Int, id)
            .execute('USP_Salary');
        //console.log(result.recordset);
        return result.recordset;
    } catch (err) {
        return err.message;
    }
};

const deleteSalarydetails=async(id)=>{
    try {
       // console.log(id);
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
            .input('action', sql.VarChar(20), 'DELETE') 
            .input('Id', sql.BigInt, id)
            .execute('USP_Salary');
        //console.log(result.recordset);
        return result.recordset;
    } catch (err) {
        return err.message;
    }   
}


const addSalarydetails=async(obj)=>{
    try{
        // console.log("bonous:",obj.Basesalary)
        let pool =await sql.connect(config.sql);
        //console.log(obj.EmployeeId);
        const result = await pool.request()
                        .input('employeeid',sql.VarChar,obj.EmployeeId)
                        .input('basesalary',sql.Decimal,obj.Basesalary)
                        .input('bonus',sql.Decimal,obj.Bonus)
                        .input('overtime',sql.Decimal,obj.Overtime)
                        .input('deductions',sql.Decimal,obj.Deductions)
                        .input('ctc',sql.Decimal,obj.Ctc)
                        .input('paydate',sql.DateTime,obj.Paydate)
                        .input('taxamount',sql.Decimal,obj.Taxamount)
                        .input('socialsecurity',sql.Decimal,obj.Socialsecurity)
                        .input('healthinsurance',sql.Decimal,obj.Healthinsurance)
                        .input('pfemployercontribution',sql.Decimal,obj.Pfemployercontribution)
                        .input('pfemployeeContribution',sql.Decimal,obj.Pfemployeecontribution)
                        .input('otherdeductions',sql.Decimal,obj.Otherdeductions)
                        .input('otherallowances',sql.Decimal,obj.Otherallowances)
                        .input('travelallowances',sql.Decimal,obj.Travelallowances)
                        .input('foodallowances',sql.Decimal,obj.Foodallowances)
                        .input('housingallowances',sql.Decimal,obj.Housingallowances)
                        .input('educationAllowances',sql.Decimal,obj.Educationallowances)
                        .input('createdby',sql.VarChar,obj.CreatedBy)
                        .input('createdon',sql.DateTime,obj.CreatedOn)
                        .input('action',sql.VarChar,'INSERT')
                        .execute('USP_Salary');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch(err){
        return err.message
    }
}

const updateSalarydetails=async(obj)=>{
    try{
         //console.log("bonous:",obj.Bonous)
        let pool =await sql.connect(config.sql);
        const result = await pool.request()
        .input('employeeid',sql.VarChar,obj.EmployeeId)
        .input('basesalary',sql.Decimal,obj.Basesalary)
        .input('bonous',sql.Decimal,obj.Bonous)
        .input('overtime',sql.Decimal,obj.Overtime)
        .input('deductions',sql.Decimal,obj.Deductions)
        .input('ctc',sql.Decimal,obj.Ctc)
        .input('paydate',sql.DateTime,obj.Paydate)
        .input('taxamount',sql.Decimal,obj.Taxamount)
        .input('socialsecurity',sql.Decimal,obj.Socialsecurity)
        .input('healthinsurance',sql.Decimal,obj.Healthinsurance)
        .input('pfemployercontribution',sql.Decimal,obj.Pfemployercontribution)
        .input('pfemployeeContribution',sql.Decimal,obj.Pfemployeecontribution)
        .input('otherdeductions',sql.Decimal,obj.Otherdeductions)
        .input('otherallowances',sql.Decimal,obj.Otherallowances)
        .input('travelallowances',sql.Decimal,obj.Travelallowances)
        .input('foodallowances',sql.Decimal,obj.Foodallowances)
        .input('housingallowances',sql.Decimal,obj.Housingallowances)
        .input('educationAllowances',sql.Decimal,obj.Educationallowances)
        .input('createdby',sql.VarChar,obj.CreatedBy)
        .input('createdon',sql.DateTime,obj.CreatedOn)
                        .input('action',sql.VarChar,'UPDATE')
                        .input('Id', sql.BigInt, obj.id)
                        .execute('USP_Salary');
         //console.log(result.recordset);

        return result.recordset;
    }
    catch(err){
        return err.message
    }
}


module.exports = {
    getempsalaryList,
    getsalarybyid,
    addSalarydetails,
    updateSalarydetails,
    deleteSalarydetails
}