'use strict'

const express=require('express')
const leavecontroller=require('../controllers/leaveController');

const router =express.Router();

const { getleavedetails,leave_status,getemployee_leave,getemployeeleaves,insertleave,approve_reject_leave,getemployeedata,leavedata,editleavebyemp,getholidaydata}=leavecontroller

router.get('/leavedata',leavedata)
router.get('/leaveactive',getleavedetails)
router.get('/holidaydata',getholidaydata)
router.get('/employeedata',getemployeedata)
router.get('/getLeaveBalance',getemployee_leave)
router.get('/getemployeeleaves',getemployeeleaves)
router.post('/insertleave',insertleave)
router.post('/updateleave',approve_reject_leave)
router.post('/editempleave',editleavebyemp)
router.post('/leave_status',leave_status)

module.exports={
    routes:router
}

// http://localhost:8080/sms/leave/getemployeeleaves?id=1