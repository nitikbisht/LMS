'use strict';
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const userData = require('../data/user');
const config = require('../config');
const userdata2 = require('../data/form');

const userSignup = async (req, res, next) => {
  try {
    // const name=req.body.name;
    // const user=req.body.user;
    const { UserName, CredBits } = req.body;
    // console.log(req.body)
    const obj = {
      UserName,
      CredBits,
    };
    const classes = await userData.userSignup(obj);
    // console.log(classes)
    const data2 = await userdata2.getFormList(UserName);
    console.log(data2[0]);
    console.log(classes);
    const obj2 = {
      UserName,
      ClientId: data2[0].ClientId,
      RoleName: data2[0].RoleName,
    };
    console.log(obj2);
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: obj2,
      },
      config.key,
      { algorithm: 'HS512' }
    );
    console.log(token);
    res.send({ token: token });
  } catch (e) {
    res.status(400).send(e.message);
  }
};
const userLogin = async (req, res, next) => {
  try {
    // const name=req.body.name;
    // const user=req.body.user;
    const { UserName, CredBits } = req.body;
    // console.log(req.body)
    const obj = {
      UserName,
      CredBits,
    };
    // const classes=await classData.addClass(name,user);
    const classes = await userData.userLogin(obj);
    // const classes=await classData.addClass(req.body);
    // console.log('classes', classes);
    if (classes.length > 0) {
      //    const UserName=classes[0].UserName
      //    const data2=await userdata2.getFormList(UserName)
      // //    console.log("data2",data2)
      const obj = {
        mail: classes[0]?.UserName,
        name: classes[0]?.name,
        ClientId: classes[0]?.ClientId,
        BranchId: classes[0]?.BranchId,
        employee_id: classes[0]?.employee_id,
        id: classes[0]?.Emp_id,
      };
      console.log(obj);
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: obj,
        },
        config.key,
        { algorithm: 'HS512' }
      );
      return res
        .status(200)
        .cookie('access_token', token, {
          // httpOnly: true,
          // secure: true,
        })
        .cookie('mail', obj.mail, {
          // httpOnly: true,
          // secure: true,
        })
        .cookie('name', obj.name, {
          // httpOnly: true,
          // secure: true,
        })
        .cookie('clientId', obj.ClientId, {
          // httpOnly: true,
          // secure: true,
        })
        .cookie('branchId', obj.BranchId, {
          // httpOnly: true,
          // secure: true,
        })
        .cookie('employee_id', obj.employee_id, {
          // httpOnly: true,
          // secure: true,
        })
        .cookie('id', obj.id, {
          // httpOnly: true,
          // secure: true,
        })
        .json({
          token,
          id: +classes[0].Emp_id,
          employee_id: +classes[0].employee_id,
        });
    } else {
      return res.status(400).send('Invalid Username or Password');
    }
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

const geneateotp = async (req, res, next) => {
  try {
    // const name=req.body.name;
    // const user=req.body.user;
    const { UserName } = req.body;
    console.log(req.body);
    const obj = {
      UserName,
    };
    // const classes=await classData.addClass(name,user);
    const classes = await userData.geneateotp(obj);
    // const classes=await classData.addClass(req.body);
    res.send(classes);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
const validateotp = async (req, res, next) => {
  try {
    // const name=req.body.name;
    // const user=req.body.user;
    const { UserName, OTP } = req.body;
    console.log(req.body);
    const obj = {
      UserName,
      OTP,
    };
    // const classes=await classData.addClass(name,user);
    const classes = await userData.validateotp(obj);
    // const classes=await classData.addClass(req.body);
    res.send(classes);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
const updatepassword = async (req, res, next) => {
  try {
    // const name=req.body.name;
    // const user=req.body.user;
    const { UserName, CredBits } = req.body;
    // console.log(req.body)
    const obj = {
      UserName,
      CredBits,
    };
    // const classes=await classData.addClass(name,user);
    const classes = await userData.userLogin(obj);
    // const classes=await classData.addClass(req.body);
    res.send(classes);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  userSignup,
  userLogin,
  geneateotp,
  validateotp,
  updatepassword,
};
