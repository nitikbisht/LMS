'use strict'

const express=require('express')
const stdByRegistrationcontroller=require('../controllers/stdByRegistrationController')
const router =express.Router();

const {getRegStudentList}=stdByRegistrationcontroller

router.get('/studentbyregistration',getRegStudentList)


// router.post('/addBranchClass',)
module.exports={
    routes:router
}