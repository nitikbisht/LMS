'use strict'

const express=require('express')
const paginationcontroller=require('../controllers/paginationController');

const router =express.Router();

const {getEmployeeCount,getEmployeeCountByType,getStudentFeeCount}=paginationcontroller

router.get('/getEmployeeCount',getEmployeeCount)
router.get('/getEmployeeCountByType',getEmployeeCountByType)
router.get('/getStudentFeeCount',getStudentFeeCount)

module.exports={
    routes:router
}