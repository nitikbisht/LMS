'use strict';

const config = require('../config');
const sql = require('mssql');

const getemployeedata = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
        .input('id', sql.VarChar, id)
      .execute('Usp_GetEmployeeInfoForLeave');
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};

const  getleavedetails = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .execute('Usp_ActiveLeave');
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};




const getholidaydata = async (year, holiday_type) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('year', sql.BigInt, year)
      .input('holiday_type', sql.NVarChar, holiday_type)
      .execute('Usp_Getholidayslist');
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};

const leavedata = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('manager', sql.BigInt, id)
      .execute('Usp_EmployeeLeaveList');
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};

const editleavebyemp = async (
  employee_id,
  id,
  from_date,
  to_date,
  description,
  leave_type,
  received_days,
  old_leave_type
) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('employee_id', sql.NVarChar, employee_id)
      .input('id', sql.BigInt, id)
      .input('from_date', sql.DateTime, from_date)
      .input('to_date', sql.DateTime, to_date)
      .input('leave_type', sql.BigInt, leave_type)
      .input('description', sql.NVarChar, description)
      .input('received_days', sql.BigInt, received_days)
      .input('prev_leavetype', sql.BigInt, old_leave_type)
      .execute('Usp_UpdateEmpLeave');
    console.log(result);
    return result.returnValue;
  } catch (err) {
    // console.log(err)
    return err.message;
  }
};

const getLeaveBalance = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('employee_id', sql.VarChar, id)
      // .input('action',sql.VarChar,'GETALL')
      .execute('Usp_getleavebalance');
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};
const getemployeeleaves = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('employee_id', sql.VarChar, id)
      // .input('action',sql.VarChar,'GETALL')
      .execute('Usp_getemployeeleaves');
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};
const insertleave = async (
  employeeid,
  clientid,
  branchid,
  leavetype,
  fromdate,
  todate,
  description,
  status,
  createdby,
  emergency_contact,
  received_days
) => {
  try {
    let pool = await sql.connect(config.sql);

    const result = await pool
      .request()
      .input('employee_id', sql.NVarChar, employeeid)
      .input('client_id', sql.BigInt, clientid)
      .input('branch_id', sql.BigInt, branchid)
      .input('leave_type', sql.BigInt, leavetype)
      .input('from_date', sql.DateTime, fromdate)
      .input('to_date', sql.DateTime, todate)
      .input('description', sql.VarChar, description)
      .input('status', sql.BigInt, status)
      .input('created_by', sql.VarChar, createdby)
      .input('emergency_contact', sql.NVarChar, emergency_contact)
      .input('received_days', sql.BigInt, received_days)
      // .input('approver',sql.VarChar,id)
      // .input('action',sql.VarChar,'GETALL')
      .execute('Usp_insertemployeeleavedata');

    console.log(result);
    // console.log(result);
    return result.returnValue;
  } catch (err) {
    return err.message;
  }
};

const approve_reject_leave = async (
  employee_id,
  id,
  leave_type,
  status,
  days,
  aprrover_comment,
  updated_by
) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('employee_id', sql.NVarChar, employee_id)
      .input('id', sql.BigInt, id)
      .input('leave_type', sql.BigInt, leave_type)
      .input('status', sql.NVarChar, status)
      .input('days', sql.BigInt, days)
      .input('approver_comment', sql.NVarChar, aprrover_comment)
      .input('updated_by', sql.NVarChar, updated_by)
      .execute('Usp_Approve_reject_Leave');
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};


const leave_status = async (
  from_date,
  to_date
) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('user_from_date', sql.Date, from_date)
      .input('user_to_date', sql.Date, to_date)
      .execute('Usp_employee_leave_status');
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};


module.exports = {
  leave_status,
  editleavebyemp,
  getemployeedata,
  getLeaveBalance,
  getemployeeleaves,
  insertleave,
  approve_reject_leave,
  leavedata,
  getholidaydata,
  getleavedetails
};