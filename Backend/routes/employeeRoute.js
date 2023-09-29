'use strict'

const express=require('express')
const Employeecontroller=require('../controllers/employeeController')
const router =express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'Images' })



const {getEmployeeList,addEmployee,updateEmployee,EnableEmployee,DisableEmployee, managerlist,DeleteEmployee,GetEmployeeType,GetEmployeeByType,getEmployeebyId}=Employeecontroller

router.get('/EmployeeList',getEmployeeList)
router.post('/addEmployee',upload.single('image'),addEmployee);
router.post('/updateEmployee',upload.single('image'),updateEmployee);
router.post('/EnableEmployee',EnableEmployee);
router.post('/DisableEmployee',DisableEmployee);
router.post('/DeleteEmployee',DeleteEmployee);
router.get('/employeeType',GetEmployeeType)
router.get('/employeeByType',GetEmployeeByType)
router.get('/employeeById',getEmployeebyId)
router.get('/managerlist',managerlist)
// router.post('/addBranchClass',)
module.exports={
    routes:router
}