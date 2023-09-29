'use strict'

const express=require('express')
const studentcontroller=require('../controllers/studentController')
const router =express.Router();


const {getStudentList,addStudent,updateStudent,EnableStudent,DisableStudent, DeleteStudent,getStudentbyId,getStudentByclass,getStudentByclassSection}=studentcontroller

router.get('/allstudent',getStudentList)
router.get('/studentList',getStudentByclassSection)
router.get('/studentListByClass',getStudentByclass)
router.post('/addStudent',addStudent);
router.post('/updateStudent',updateStudent);
router.post('/EnableStudent',EnableStudent);
router.post('/DisableStudent',DisableStudent);
router.post('/DeleteStudent',DeleteStudent);
router.get('/studentbyId',getStudentbyId)
module.exports={
    routes:router
}

