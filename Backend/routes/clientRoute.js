'use strict'

const express=require('express')
const clientcontroller=require('../controllers/clientController')
const router =express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'Images' })

const {getClientList,getClientbyUser,addClient,updateClient,EnableClient,DisableClient, DeleteClient}=clientcontroller

router.get('/ClientList',getClientList)
router.post('/getClientbyUser',getClientbyUser)
router.post('/addClient',addClient);
router.post('/updateClient',upload.single('image'),updateClient);
router.post('/EnableClient',EnableClient);
router.post('/DisableClient',DisableClient);
router.post('/DeleteClient',DeleteClient);

// router.post('/addBranchClass',)
module.exports={
    routes:router
}