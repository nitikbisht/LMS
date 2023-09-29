'use strict'

const stdfeeData = require('../data/stdfee')

const getstdlist = async (req, res, next) => {
    try {        
        // console.log(req.query);
        const {pageno,result}=req.query
        const classes = await stdfeeData.getstdList(pageno,result);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}

const getStdlistbynameandmobile = async (req, res) => {
    try {
        const { name,mobile } = req.body
        const obj={name,mobile}
        // console.log(obj)
        const classes = await stdfeeData.getStdfeebynameandmobile(obj);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}

const getStdlistbyId = async (req, res) => {
    try {
        const { id } = req.query
        // console.log(id)
        const classes = await stdfeeData.getStdfeebyId(id);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}

const addStudentfee = async (req, res, next) => {
    try {
        const {
            studentId, formonth, totalfee, feepaid, balancefee, paydate,
            status, monthlyfee, latefee, createdby
        } = req.body
        // const classes=await classData.addClass(name,user);
        const obj = {
            studentId, formonth, totalfee, feepaid, balancefee, paydate,
            status, monthlyfee, latefee, createdby
        }
        console.log(obj)
        const classes = await stdfeeData.addStdfee(obj);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const getStudentFeeByname = async (req, res, next) => {
    try {
        const { studentName } = req.query
        // console.log(studentName)
        const student = await stdfeeData.getStudentFeeByName(studentName);
        res.send(student);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const updateStudentfee = async (req, res, next) => {
    try {
        const payload = req.body;
        console.log(payload);
        const studentFeeDetail = await stdfeeData.updateStudentFee(payload);
        res.send(studentFeeDetail)

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateStudentFeeAllmonth = async (req, res, next) => {
    try {
        const payload = req.body;
       console.log(payload);
        const studentFeeDetailallmonth = await stdfeeData.updateStudentFeeAllmonth(payload);
        res.send(studentFeeDetailallmonth)

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const StudentFeetransaction = async (req, res, next) => {
    try {
        const payload = req.body;
       // console.log(payload);
        const StudentFeetransaction = await stdfeeData.StudentFeetranscation(payload);
        res.send(StudentFeetransaction)

    } catch (error) {
        res.status(400).send(error.message);
    }
}




module.exports = {
    updateStudentFeeAllmonth,
    getstdlist,
    getStdlistbynameandmobile,
    addStudentfee,
    getStudentFeeByname,
    updateStudentfee,
    getStdlistbyId,
    StudentFeetransaction
}