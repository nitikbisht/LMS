'use strict'

const express=require('express')
const formcontroller=require('../controllers/formController');

const router =express.Router();


const {getFormList}=formcontroller

router.get('/getFormList',getFormList)

// router.post('/addBranchClass',)
module.exports={
    routes:router
}