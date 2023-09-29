'use strict'

const express=require('express')
const branchcontroller=require('../controllers/branchController')
const router =express.Router();


const {getBranchList,addBranch,updateBranch,EnableBranch,DisableBranch,DeleteBranch,ClientBranchList}=branchcontroller

router.get('/branchList',getBranchList)
router.post('/addBranch',addBranch);
router.post('/updateBranch',updateBranch);
router.post('/EnableBranch',EnableBranch);
router.post('/DisableBranch',DisableBranch);
router.post('/DeleteBranch',DeleteBranch);
router.get('/ClientBranchList',ClientBranchList)
// router.post('/addBranchClass',)

module.exports={
    routes:router
}