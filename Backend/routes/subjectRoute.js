'use strict'

const express=require('express')
const subjectcontroller=require('../controllers/subjectController')
const router =express.Router();


const {getsubjectList,addSubject,updateSubject,EnableSubject,DisableSubject, DeleteSubject,getClassSubject,addClassSubject,EnableClassSubject,DisableClassSubject,updateClassSubject}=subjectcontroller

router.get('/subjectList',getsubjectList)
router.post('/addSubject',addSubject);
router.post('/updateSubject',updateSubject);
router.post('/EnableSubject',EnableSubject);
router.post('/DisableSubject',DisableSubject);
router.post('/DeleteSubject',DeleteSubject);
router.get('/getClassSubject',getClassSubject)
router.post('/addClassSubject',addClassSubject)
router.post('/EnableClassSubject',EnableClassSubject)
router.post('/DisableClassSubject',DisableClassSubject)
router.post('/updateClassSubject',updateClassSubject)


module.exports={
    routes:router
}