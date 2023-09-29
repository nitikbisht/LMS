import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { format_date } from '../utils/Date';
import { generateDays } from '../utils/GenerateDays';

const EmployeeScheduleTable = ({ startDate, endDate, employees }) => {
  const days = generateDays(startDate, endDate);

  return (
    <TableContainer>
      <Table
        style={{ border: '1px solid black' }}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableHead style={{ border: '1px solid black' }}>
          <TableRow style={{ border: '1px solid black' }}>
            <TableCell
              style={{ fontWeight: 'bold', border: '1px solid black' }}
            >
              Employee
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
        <TableBody>
          {employees.map((employee, empIndex) => (
            <TableRow key={empIndex}>
              <TableCell style={{ border: '1px solid black' }}>
                {employee.employee_name}
              </TableCell>
              {days.map((day, dayIndex) => {
                const isLeaveDay = employee.leave.some((leave) => {
                  const leaveFrom = new Date(leave.from);
                  const leaveTo = new Date(leave.to);
                  return day >= leaveFrom && day <= leaveTo;
                });

                return (
                  <TableCell
                    style={{
                      border: '1px solid black',
                      backgroundColor: isLeaveDay ? '#ff8f94' : 'white',
                    }}
                    key={dayIndex}
                  ></TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeScheduleTable;
