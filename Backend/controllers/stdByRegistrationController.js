'use strict'

const regstudentData = require('../data/stdByRegistration')

const getRegStudentList = async (req, res, next) => {
    try {
        const {id}=req.query
        // console.log(class,section)
        const classes = await regstudentData.getRegStudentList(id);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}


module.exports = {
    getRegStudentList
}