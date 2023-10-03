import {



  Table,



  TableBody,



  TableCell,



  TableContainer,



  TableHead,



  TableRow,



} from '@mui/material';



import React from 'react';



import { formatDate2, format_date } from '../utils/Date';



import { generateDays } from '../utils/GenerateDays';



import Paper from '@mui/material/Paper';







const EmployeeScheduleTable = ({ startDate, endDate, employees }) => {



  const days = generateDays(startDate, endDate);







  return (



    <TableContainer style={{ width: '90%', overflowY: true }}>



      <Table



        style={{ border: '1px solid black' }}



        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}



      >



        <TableHead style={{ border: '1px solid black' }}>



          <TableRow style={{ border: '1px solid black' }}>



            <TableCell



              style={{ fontWeight: 'bold', border: '1px solid black' }}



            >



              Employee Name



            </TableCell>







            {days?.map((day, index) => (



              <TableCell



                style={{ fontWeight: 'bold', border: '1px solid black' }}



                key={index}



              >



                {format_date(day.toLocaleDateString())}



              </TableCell>



            ))}



          </TableRow>



        </TableHead>







        {employees.length > 0 ? (



          <TableHead>



            {employees?.map((employee, empIndex) => (



              <TableRow key={empIndex}>



                <TableCell style={{ border: '1px solid black' }}>



                  {employee?.username}



                </TableCell>



                {days.map((day, dayIndex) => {



                  const d = formatDate2(day);



                  return (



                    <TableCell



                      style={{



                        border: '1px solid black',



                        backgroundColor:



                          employee[d] == 1 ? '#ff8f94' : '#b6f2c6',



                      }}



                      key={dayIndex}



                    ></TableCell>



                  );



                })}



              </TableRow>



            ))}



          </TableHead>



        ) : (



          <div style={{ textAlign: 'center', padding: '20px' }}>No data</div>



        )}



      </Table>



    </TableContainer>



  );



};







export default EmployeeScheduleTable;