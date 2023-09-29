'use strict'

const express=require('express')
const parentInfocontroller=require('../controllers/parentInfoController')
const router =express.Router();


const {getparentInfoByid,addParentInfo,updateParentInfo,EnableParentInfo,DisableParentInfo, DeleteParentInfo}=parentInfocontroller

router.get('/parentInfoList',getparentInfoByid)
router.post('/addparentInfo',addParentInfo);
router.post('/updateparentInfo',updateParentInfo);
router.post('/EnableparentInfo',EnableParentInfo);
router.post('/DisableparentInfo',DisableParentInfo);
router.post('/DeleteparentInfo',DeleteParentInfo);

// router.post('/addBranchClass',)
module.exports={
    routes:router
}