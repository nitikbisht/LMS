"use strict";

const config = require("../config");
const sql = require("mssql");

const getStudentList = async (BranchId,pageno,results) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input("BranchId", sql.BigInt, BranchId)
      .input("pageno", sql.BigInt, pageno)
      .input("result", sql.BigInt, results)
      .input("action", sql.VarChar, "GETALL")
      .execute("Usp_Student");
    // console.log(result.recordset);
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};
const getStudentByclassSection = async (Class, Section) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input("Class", sql.BigInt, Class)
      .input("Section", sql.BigInt, Section)
      .input("action", sql.VarChar, "GET")
      .execute("Usp_Student");
    // console.log(result.recordset);
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};
const getStudentByclass = async (Class) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input("Class", sql.BigInt, Class)
      .input("action", sql.VarChar, "GETBYCLASS")
      .execute("Usp_Student");
    // console.log(result.recordset);
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};

const getStudentbyId = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input("id", sql.BigInt, id)
      // .input('Section',sql.BigInt,Section)
      .input("action", sql.VarChar, "GETBYID")
      .execute("Usp_Student");
    // console.log(result.recordset);
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};
const addStudent = async (obj) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input("RegistrationNo", sql.NVarChar, obj.RegistrationNo)
      .input("Class", sql.BigInt, obj.Class)
      .input("Name", sql.VarChar, obj.Name)
      .input("Photo", sql.NVarChar, obj.Photo)
      .input("AdmissionDate", sql.DateTime, obj.AdmissionDate)
      .input("MobileNo", sql.NVarChar, obj.MobileNo)
      .input("OrphenStudent", sql.Bit, obj.OrphenStudent)
      .input("DOB", sql.DateTime, obj.DOB)
      .input("Gender", sql.NVarChar, obj.Gender)
      .input("Cast", sql.NVarChar, obj.Cast)
      .input("OSC", sql.Bit, obj.OSC)
      .input("AnyIdentificationMark", sql.NVarChar, obj.AnyIdentificationMark)
      .input("PreviousSchool", sql.NVarChar, obj.PreviousSchool)
      .input("Religion", sql.NVarChar, obj.Religion)
      .input("BloodGroup", sql.NVarChar, obj.BloodGroup)
      .input("PreviousID_BoardRollNo", sql.NVarChar, obj.PreviousID_BoardRollNo)
      .input("DiseaseIfAny", sql.NVarChar, obj.DiseaseIfAny)
      .input("AnyAdditionalNote", sql.NVarChar, obj.AnyAdditionalNote)
      .input("TotalSiblings", sql.Int, obj.TotalSiblings)
      .input("Address", sql.NVarChar, obj.Address)
      .input("FatherFirstName", sql.VarChar, obj.FatherFirstName)
      .input("FatherMiddleName", sql.VarChar, obj.FatherMiddleName)
      .input("FatherLastName", sql.VarChar, obj.FatherLastName)
      .input("FatherPhoto", sql.VarChar, obj.FatherPhoto)
      .input("FatherHomeAddress", sql.VarChar, obj.FatherHomeAddress)
      .input("FatherWorkAddress", sql.VarChar, obj.FatherWorkAddress)
      .input("FatherContact", sql.VarChar, obj.FatherContact)
      .input("FatherAlternateContact", sql.VarChar, obj.FatherAlternateContact)
      .input("FatherOccupation", sql.VarChar, obj.FatherOccupation)
      .input("FatherEducation", sql.VarChar, obj.FatherEducation)
      .input("FatherIdType", sql.VarChar, obj.FatherIdType)
      .input("FatherIdNumber", sql.VarChar, obj.FatherIdNumber)
      .input("FatherIncome", sql.Decimal, obj.FatherIncome)
      .input("FatherEmailAddress", sql.VarChar, obj.FatherEmailAddress)

      .input("MotherFirstName", sql.VarChar, obj.MotherFirstName)
      .input("MotherMiddleName", sql.VarChar, obj.MotherMiddleName)
      .input("MotherLastName", sql.VarChar, obj.MotherLastName)
      .input("MotherPhoto", sql.VarChar, obj.MotherPhoto)
      .input("MotherHomeAddress", sql.VarChar, obj.MotherHomeAddress)
      .input("MotherWorkAddress", sql.VarChar, obj.MotherWorkAddress)
      .input("MotherContact", sql.VarChar, obj.MotherContact)
      .input("MotherAlternateContact", sql.VarChar, obj.MotherAlternateContact)
      .input("MotherOccupation", sql.VarChar, obj.MotherOccupation)
      .input("MotherEducation", sql.VarChar, obj.MotherEducation)
      .input("MotherIdType", sql.VarChar, obj.MotherIdType)
      .input("MotherIdNumber", sql.VarChar, obj.MotherIdNumber)
      .input("MotherIncome", sql.Decimal, obj.MotherIncome)
      .input("MotherEmailAddress", sql.VarChar, obj.MotherEmailAddress)

      .input("GaurdianFirstName", sql.VarChar, obj.GaurdianFirstName)
      .input("GaurdianMiddleName", sql.VarChar, obj.GaurdianMiddleName)
      .input("GaurdianLastName", sql.VarChar, obj.GaurdianLastName)
      .input("GaurdianPhoto", sql.VarChar, obj.GaurdianPhoto)
      .input("GaurdianHomeAddress", sql.VarChar, obj.GaurdianHomeAddress)
      .input("GaurdianWorkAddress", sql.VarChar, obj.GaurdianWorkAddress)
      .input("GaurdianContact", sql.VarChar, obj.GaurdianContact)
      .input(
        "GaurdianAlternateContact",
        sql.VarChar,
        obj.GaurdianAlternateContact
      )
      .input("GaurdianOccupation", sql.VarChar, obj.GaurdianOccupation)
      .input("GaurdianEducation", sql.VarChar, obj.GaurdianEducation)
      .input("GaurdianIdType", sql.VarChar, obj.GaurdianIdType)
      .input("GaurdianIdNumber", sql.VarChar, obj.GaurdianIdNumber)
      .input("GaurdianIncome", sql.Decimal, obj.GaurdianIncome)
      .input("GaurdianEmailAddress", sql.VarChar, obj.GaurdianEmailAddress)
      .input("ClientId", sql.BigInt, obj.ClientId)
      .input("BranchId", sql.BigInt, obj.BranchId)
      .input("CreatedBy", sql.NVarChar, obj.CreatedBy)
      .input("AadhaarNumber", sql.NVarChar, obj.AadhaarNumber)
      .input("Section", sql.BigInt, obj.Section)
      .input("action", sql.VarChar, "INSERT")
      .execute("Usp_Student");
    // console.log(result.recordset);
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};

const updateStudent = async (obj) => {
  try {
    let pool = await sql.connect(config.sql);
    console.log(obj);
    const result = await pool
      .request()
      .input("Class", sql.BigInt, obj.Class)
      .input("Name", sql.VarChar, obj.Name)
      .input("Photo", sql.NVarChar, obj.Photo)
      .input("AdmissionDate", sql.DateTime, obj.AdmissionDate)
      .input("MobileNo", sql.NVarChar, obj.MobileNo)
      .input("OrphenStudent", sql.Bit, obj.OrphenStudent)
      .input("DOB", sql.DateTime, obj.DOB)
      .input("Gender", sql.NVarChar, obj.Gender)
      .input("Cast", sql.NVarChar, obj.Cast)
      .input("OSC", sql.Bit, obj.OSC)
      .input("AnyIdentificationMark", sql.NVarChar, obj.AnyIdentificationMark)
      .input("PreviousSchool", sql.NVarChar, obj.PreviousSchool)
      .input("Religion", sql.NVarChar, obj.Religion)
      .input("BloodGroup", sql.NVarChar, obj.BloodGroup)
      .input("PreviousID_BoardRollNo", sql.NVarChar, obj.PreviousID_BoardRollNo)
      .input("DiseaseIfAny", sql.NVarChar, obj.DiseaseIfAny)
      .input("AnyAdditionalNote", sql.NVarChar, obj.AnyAdditionalNote)
      .input("TotalSiblings", sql.Int, obj.TotalSiblings)
      .input("Address", sql.NVarChar, obj.Address)
      .input("Father", sql.BigInt, obj.Father)
      .input("Mother", sql.BigInt, obj.Mother)
      .input("Gaurdian", sql.BigInt, obj.Gaurdian)
      .input("ClientId", sql.BigInt, obj.ClientId)
      .input("BranchId", sql.BigInt, obj.BranchId)
      .input("UpdatedBy", sql.NVarChar, obj.UpdatedBy)
      .input("AadhaarNumber", sql.NVarChar, obj.AadhaarNumber)
      .input("Section", sql.BigInt, obj.section)
      .input("id", sql.BigInt, obj.id)
      .input("action", sql.VarChar, "UPDATE")
      .execute("Usp_Student");
    console.log(result.recordset);
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};
const EnableStudent = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      // .input('name',sql.VarChar,name)
      .input("id", sql.BigInt, id)
      .input("action", sql.VarChar, "ACTIVATE")
      .execute("Usp_Student");
    // console.log(result.recordset);
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};
const DisableStudent = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      // .input('name',sql.VarChar,name)
      .input("id", sql.BigInt, id)
      .input("action", sql.VarChar, "DEACTIVATE")
      .execute("Usp_Student");
    // console.log(result.recordset);
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};

const DeleteStudent = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      // .input('name',sql.VarChar,name)
      .input("id", sql.BigInt, id)
      .input("action", sql.VarChar, "DELETE")
      .execute("Usp_Student");
    // console.log(result.recordset);
    return result.recordset;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  getStudentList,
  addStudent,
  updateStudent,
  EnableStudent,
  DisableStudent,
  DeleteStudent,
  getStudentbyId,
  getStudentByclassSection,
  getStudentByclass
};
