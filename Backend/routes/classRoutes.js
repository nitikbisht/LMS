'use strict'

const express=require('express')
const classcontroller=require('../controllers/classController');
const router =express.Router();


const {getclasses,addClass,updateClass,EnableClass,DisableClass,DeleteClass,getBranchClass,addBranchClass,getBranchClassById,editBranchClass,EnableBranchClass,DisableBranchClass,test}=classcontroller

router.get('/classList',getclasses)
router.get('/classListById',getBranchClassById)
router.post('/addClass',addClass);
router.post('/updateClass',updateClass);
router.post('/enableClass',EnableClass);
router.post('/disableClass',DisableClass);
router.post('/deleteClass',DeleteClass);
router.post('/addBranchClass',addBranchClass)
router.get('/getbranchclassList',getBranchClass)
router.post('/editbranchclassList',editBranchClass)
router.post("/enablebranchclass",EnableBranchClass)
router.post("/disablebranchclass",DisableBranchClass)
router.get("/test",test)
module.exports={
    routes:router
}