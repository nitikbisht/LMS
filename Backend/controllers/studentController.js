'use strict'

const studentData = require('../data/student')

const getStudentList = async (req, res, next) => {
    try {
        const {BranchId,pageno,result}=req.query
// console.log(req.query);
        // console.log(class,section)
        const classes = await studentData.getStudentList(BranchId,pageno,result);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const getStudentByclass = async (req, res, next) => {
    try {
        const {classid,section}=req.query
        // console.log(class,section)
        const classes = await studentData.getStudentByclass(classid,section);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const getStudentByclassSection = async (req, res, next) => {
    try {
        const {classid,section}=req.query
        // console.log(class,section)
        const classes = await studentData.getStudentByclassSection(classid,section);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const getStudentbyId = async (req, res, next) => {
    try {
        const {id}=req.query
        // console.log(class,section)
        const classes = await studentData.getStudentbyId(id);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const addStudent = async (req, res, next) => {
    try {
        // const name=req.body.name;
        // const user=req.body.user;
        const { RegistrationNo, Name,Section, Class, Photo, AdmissionDate, MobileNo, OrphenStudent, DOB, Gender, Cast, OSC, AnyIdentificationMark, PreviousSchool, Religion, BloodGroup, PreviousID_BoardRollNo, DiseaseIfAny, AnyAdditionalNote, TotalSiblings, Address, ClientId, BranchId, CreatedBy, AadhaarNumber,
            FatherFirstName,
		    FatherMiddleName,
		    FatherLastName,
		    FatherPhoto,
		    FatherHomeAddress,
		    FatherWorkAddress,
	        FatherContact,
	        FatherAlternateContact,
	        FatherOccupation,
	        FatherEducation,
	        FatherIdType,
	        FatherIdNumber,
	        FatherIncome,
	        FatherEmailAddress,
            MotherFirstName,
		    MotherMiddleName,
		    MotherLastName,
		    MotherPhoto,
		    MotherHomeAddress,
		    MotherWorkAddress,
	        MotherContact,
	        MotherAlternateContact,
	        MotherOccupation,
	        MotherEducation,
	        MotherIdType,
	        MotherIdNumber,
	        MotherIncome,
	        MotherEmailAddress,
            GaurdianFirstName,
		    GaurdianMiddleName,
		    GaurdianLastName,
		    GaurdianPhoto,
		    GaurdianHomeAddress,
		    GaurdianWorkAddress,
	        GaurdianContact,
	        GaurdianAlternateContact,
	        GaurdianOccupation,
	        GaurdianEducation,
	        GaurdianIdType,
	        GaurdianIdNumber,
	        GaurdianIncome,
	        GaurdianEmailAddress } = req.body
        // console.log(req.body)
        const obj = {
            RegistrationNo
            ,Section
            , Name
            , Class
            ,Section
            , Photo
            , AdmissionDate
            , MobileNo
            , OrphenStudent
            , DOB
            , Gender
            , Cast
            , OSC
            , AnyIdentificationMark
            , PreviousSchool
            , Religion
            , BloodGroup
            , PreviousID_BoardRollNo
            , DiseaseIfAny
            , AnyAdditionalNote
            , TotalSiblings
            , Address
            , ClientId
            , BranchId
            , CreatedBy
            , AadhaarNumber,
            FatherFirstName,
		    FatherMiddleName,
		    FatherLastName,
		    FatherPhoto,
		    FatherHomeAddress,
		    FatherWorkAddress,
	        FatherContact,
	        FatherAlternateContact,
	        FatherOccupation,
	        FatherEducation,
	        FatherIdType,
	        FatherIdNumber,
	        FatherIncome,
	        FatherEmailAddress,
            MotherFirstName,
		    MotherMiddleName,
		    MotherLastName,
		    MotherPhoto,
		    MotherHomeAddress,
		    MotherWorkAddress,
	        MotherContact,
	        MotherAlternateContact,
	        MotherOccupation,
	        MotherEducation,
	        MotherIdType,
	        MotherIdNumber,
	        MotherIncome,
	        MotherEmailAddress,
            GaurdianFirstName,
		    GaurdianMiddleName,
		    GaurdianLastName,
		    GaurdianPhoto,
		    GaurdianHomeAddress,
		    GaurdianWorkAddress,
	        GaurdianContact,
	        GaurdianAlternateContact,
	        GaurdianOccupation,
	        GaurdianEducation,
	        GaurdianIdType,
	        GaurdianIdNumber,
	        GaurdianIncome,
	        GaurdianEmailAddress
        }
        // console.log(obj)
        // const classes=await classData.addClass(name,user);
        const classes = await studentData.addStudent(obj);
        // const classes=await classData.addClass(req.body);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const updateStudent = async (req, res, next) => {
    try {
        const { id, Name, Class, Photo,Section, AdmissionDate, MobileNo, OrphenStudent, DOB, Gender, Cast, OSC, AnyIdentificationMark, PreviousSchool, Religion, BloodGroup, PreviousID_BoardRollNo, DiseaseIfAny, AnyAdditionalNote, TotalSiblings, Address, Father, Mother, Gaurdian, ClientId, BranchId, UpdatedBy, AadhaarNumber } = req.body
        console.log(req.body)
        const obj = {
            id
            , Name
            , Class
            , Photo
            , AdmissionDate
            , MobileNo
            , OrphenStudent
            , DOB
            , Gender
            , Cast
            , OSC
            , AnyIdentificationMark
            , PreviousSchool
            , Religion
            , BloodGroup
            , PreviousID_BoardRollNo
            , DiseaseIfAny
            , AnyAdditionalNote
            , TotalSiblings
            , Address
            , Father
            , Mother
            , Gaurdian
            , ClientId
            , BranchId
            , UpdatedBy
            , AadhaarNumber
            , Section
        }
        const classes = await studentData.updateStudent(obj);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}

const EnableStudent = async (req, res, next) => {
    try {
        const id = req.query.id
        // console.log(req.body)
        const classes = await studentData.EnableStudent(id);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const DisableStudent = async (req, res, next) => {
    try {
        const id = req.query.id
        console.log(req.body)
        const classes = await studentData.DisableStudent(id);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const DeleteStudent = async (req, res, next) => {
    try {

        // const user=req.body.user;
        const id = req.query.id
        console.log(req.body)
        const classes = await studentData.DeleteStudent(id);
        res.send(classes);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}


module.exports = {
    getStudentList,
    addStudent,
    updateStudent,
    EnableStudent,
    DisableStudent,
    DeleteStudent,
    getStudentByclassSection,
    getStudentByclass,
    getStudentbyId
}