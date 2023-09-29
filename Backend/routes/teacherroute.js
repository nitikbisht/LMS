'use strict'

const express=require('express')
const teachercontroller=require('../controllers/teachercontroller')
const router =express.Router();

const {getteacherlist}=teachercontroller

router.get('/all',getteacherlist)


// router.post('/addBranchClass',)
module.exports={
    routes:router
}