'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const classRoutes = require('./routes/classRoutes');
const userRoute = require('./routes/userRoute');
const subjectRoute = require('./routes/subjectRoute');
const branchRouter = require('./routes/branchRoutes');
const clientRoutes = require('./routes/clientRoute');
const studentRoutes = require('./routes/studentRoutes');
const sectionRoute = require('./routes/sectionRoutes');
const employeeRoute = require('./routes/employeeRoute');
const parentInfo = require('./routes/parentInfoRoute');
const formRoute = require('./routes/formRoute');

const stdByRegistration = require('./routes/stdByRegistrationRoute');
const stdfeedata = require('./routes/stdfeeRoute');
const teacherdata = require('./routes/teacherroute');
const Salary = require('./routes/salaryRoute');
const leave = require('./routes/leaveRoute');
const pagination = require('./routes/paginationRoute');
const cp = require('cookie-parser');
// const { test } = require('./controllers/classController');
const app = express();

app.use(
  cors({
    origin: 'http://20.231.218.166:3002', // Replace with your frontend domain
    credentials: true, // Allow credentials (cookies)
  })
);
app.use(cp());
app.use(bodyParser.json());

// app.use('/',test)
app.use('/sms/class', classRoutes.routes);
app.use('/sms/user', userRoute.routes);
app.use('/sms/subject', subjectRoute.routes);
app.use('/sms/branch', branchRouter.routes);
app.use('/sms/client', clientRoutes.routes);
app.use('/sms/student', studentRoutes.routes);
app.use('/sms/section', sectionRoute.routes);
app.use('/sms/employee', employeeRoute.routes);
app.use('/sms/parentInfo', parentInfo.routes);
app.use('/sms/form', formRoute.routes);
app.use('/sms/registration', stdByRegistration.routes);
app.use('/sms/stdfee', stdfeedata.routes);
app.use('/sms/salary', Salary.routes);
app.use('/sms/getteacher', teacherdata.routes);
app.use('/sms/leave', leave.routes);
app.use('/sms/pagination', pagination.routes);
app.use('/Images', express.static('Images'));

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:` + config.port);
});
// app.listen();

// const swaggerUI=require('swagger-ui-express')
// const swaggerJsDoc=require('swagger-jsdoc')
// const swaggerDocument= require('./swagger_output.json')
// const options = {
//     definition: {
//       openapi: "3.0.0",
//       info: {
//         title: "Library API",
//         version: "1.0.0",
//         description: "A simple Express Library API"
//       },

//       servers: [
//         {
//           url: "http://localhost:8080",
//           description: "My API Documentation",
//         },
//       ],
//     },
//     apis: ["./routes/*.js"],
//   };

//   const specs = swaggerJsDoc(options);
//   app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
