'use strict'

const express=require('express')
const salarycontroller=require('../controllers/salaryController')
const router =express.Router();

//const {getsalaryList}=salarycontroller

const {getsalaryList,getsalarybyid,addSalary,updateSalary,deleteSalary}=salarycontroller

router.get('/EmpsalaryList',getsalaryList),
router.get('/salarybyid',getsalarybyid),
router.post('/addempsalary',addSalary);
router.patch('/updatesalary',updateSalary);
router.delete('/deletesalary',deleteSalary);


module.exports={
    routes:router
}