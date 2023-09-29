'use strict'

const express=require('express')
const sectioncontroller=require('../controllers/sectionController')
const router =express.Router();


const {getsectionList,addSection,updateSection,EnableSection,DisableSection, DeleteSection,GetClassSectionSubject,GetClassSection,AddClassSection}=sectioncontroller

router.get('/sectionList',getsectionList)
router.post('/addSection',addSection);
router.post('/updateSection',updateSection);
router.post('/EnableSection',EnableSection);
router.post('/DisableSection',DisableSection);
router.post('/DeleteSection',DeleteSection);

router.get('/sectionsubjectbyclass',GetClassSectionSubject)
router.get('/sectionbyclass',GetClassSection)
router.post('/AddClassSection',AddClassSection)
module.exports={
    routes:router
}