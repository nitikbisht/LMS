'use strict'

const express=require('express')
const stdfeecontroller=require('../controllers/stdfeeController')
const router =express.Router();

const {StudentFeetransaction,getstdlist,getStdlistbynameandmobile,addStudentfee,updateStudentfee,getStudentFeeByname,getStdlistbyId,updateStudentFeeAllmonth}=stdfeecontroller

router.get('/all',getstdlist)
router.post('/stdlistbynameandmobile',getStdlistbynameandmobile)
router.post('/addfee',addStudentfee)
router.post('/updatefee',updateStudentfee)
router.get('/studentfeebyname',getStudentFeeByname)
router.get('/stdlistbyid',getStdlistbyId)
router.post('/allfee',updateStudentFeeAllmonth)
router.post('/feetranscation',StudentFeetransaction)

module.exports={
    routes:router
}