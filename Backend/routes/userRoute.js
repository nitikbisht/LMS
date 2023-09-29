'use strict'

const express=require('express')
const usercontroller=require('../controllers/userController');

const router =express.Router();


const {userSignup,userLogin,geneateotp,validateotp,updatepassword}=usercontroller

router.post('/signup',userSignup)
router.post('/login',userLogin);
router.post('/generateotp',geneateotp)
router.post('/validateotp',validateotp)
router.post('/updatepassword',updatepassword)
// router.post('/addBranchClass',)
module.exports={
    routes:router
}