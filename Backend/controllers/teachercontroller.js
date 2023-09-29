'use strict'

const teacherData = require('../data/teacher')

const getteacherlist = async (req, res, next) => {
    try {
        //const {id}=req.query
        // console.log(class,section)
        const classes = await teacherData.getteacherList();
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}


module.exports = {
    getteacherlist
}