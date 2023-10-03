'use strict';

const EmployeeData = require('../data/leave');

const getemployeedata = async (req, res) => {
  try {
    const { id } = req.query;
    const classes = await EmployeeData.getemployeedata(id);
    res.send(classes);
  } catch (e) {
    res.status(400).send(e.message);
  }
};


const getleavedetails = async (req, res) => {
  try {
    const classes = await EmployeeData.getleavedetails();
    res.send(classes);
  } catch (e) {
    res.status(400).send(e.message);
  }
};


const getholidaydata = async (req, res) => {
  try {
    const { year, type } = req.query;
    const classes = await EmployeeData.getholidaydata(year, type);
    res.send(classes);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const leavedata = async (req, res) => {
  try {
    const { id } = req.query;
    const classes = await EmployeeData.leavedata(id);
    res.send(classes);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const editleavebyemp = async (req, res) => {
  try {
    const {
      employee_id,
      id,
      from_date,
      to_date,
      description,
      leave_type,
      received_days,
      old_leave_type,
    } = req.body;
    console.log(req.body);
    const classes = await EmployeeData.editleavebyemp(
      employee_id,
      id,
      from_date,
      to_date,
      description,
      leave_type,
      received_days,
      old_leave_type
    );
    if (classes == 1) {
      res.status(200).send({ message: 'Leave inserted successfully' });
    } else if (classes == -1) {
      res.status(400).send({ error: 'Leave balance is insufficient' });
    } else if (classes == -99) {
      res.status(400).send({ error: 'bla wefwe bla' });
    } else if (classes == 0) {
      res.status(400).send({ error: 'bla bla' });
    }
    res.send(classes);
  } catch (e) {
    // console.log(e.message);
    res.status(400).send(e.message);
  }
};

const getemployee_leave = async (req, res) => {
  try {
    const { id } = req.query;

    const classes = await EmployeeData.getLeaveBalance(id);
    res.send(classes);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
const getemployeeleaves = async (req, res) => {
  try {
    const { id } = req.query;

    const classes = await EmployeeData.getemployeeleaves(id);
    res.send(classes);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const insertleave = async (req, res) => {
  try {
    const {
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
      received_days,
    } = req.body;
    const classes = await EmployeeData.insertleave(
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
    );
    if (classes == 1) {
      res.status(200).send({ message: 'Leave inserted successfully' });
    } else if (classes == -1) {
      res.status(400).send({ error: 'Either Leave balance is insufficient or it`s a holiday' });
    } else if (classes == 0) {
      res.status(400).send({ error: 'Leave overlapping' });
    } else if (classes == -111) {
      res.status(400).send({ error: 'Condition Failed For restricted Holiday' });
    } else if (classes == -11) {
      res.status(400).send({ error: 'Enter valid Data' });
    } 
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const approve_reject_leave = async (req, res) => {
  try {
    const {
      employee_id,
      id,
      leave_type,
      status,
      days,
      aprrover_comment,
      updated_by,
    } = req.body;
    console.log(req.body);
    const classes = await EmployeeData.approve_reject_leave(
      employee_id,
      id,
      leave_type,
      status,
      days,
      aprrover_comment,
      updated_by
    );
    res.send(classes);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const leave_status = async (req, res) => {
  try {
    const { from_date, to_date } = req.body;
   // console.log(req.body);
    const classes = await EmployeeData.leave_status(from_date, to_date);
    res.send(classes);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  leave_status,
  editleavebyemp,
  getemployeedata,
  getemployee_leave,
  getemployeeleaves,
  insertleave,
  approve_reject_leave,
  leavedata,
  getholidaydata,
  getleavedetails
};
