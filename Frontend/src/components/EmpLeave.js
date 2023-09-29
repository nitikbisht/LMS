import React, { useEffect, useState } from 'react';
import EmployeeScheduleTable from './EmployeeScheduleTable';
import axios from 'axios';

const EmpLeave = () => {
  const d = new Date().toJSON().slice(0, 10);
  const [start_date, setStartDate] = useState(d);
  const [end_date, setEndDate] = useState();

  const [employees, setEmployees] = useState([
    {
      employee_id: '101',
      employee_name: 'Manish',
      leave: [
        {
          from: '2023-08-25',
          to: '2023-08-25',
        },
        {
          from: '2023-08-27',
          to: '2023-08-29',
        },
      ],
    },
    {
      employee_id: '101',
      employee_name: 'Atul',
      leave: [
        {
          from: '2023-08-26',
          to: '2023-08-26',
        },
        {
          from: '2023-08-30',
          to: '2023-08-31',
        },
      ],
    },
  ]);

  // console.log(employees);

  // const employees = [
  //   { name: 'Manish', id: 1 },
  //   { name: 'Atul', id: 2 },
  //   { name: 'Akash', id: 3 },
  //   { name: 'Singh', id: 4 },
  // ];

  useEffect(() => {
    axios
      .get('')
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <h2 style={{ marginY: '10px' }}>Employee Leave</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px', marginBottom: '10px' }}>
          <div>Start Date</div>
          <input
            style={{
              marginRight: '50px',
              padding: '16px',
              fontSize: '16px',
              border: '1px solid black',
              borderRadius: '5px',
            }}
            type='date'
            name='start_date'
            onChange={(e) => {
              setStartDate(new Date(e.target.value).toISOString());
              setEndDate(null);
            }}
          />
        </div>
        <div>
          <div>End Date</div>
          <input
            style={{
              padding: '16px',
              fontSize: '16px',
              border: '1px solid black',
              borderRadius: '5px',
            }}
            type='date'
            name='end_date'
            min={start_date.slice(0, 10)}
            onChange={(e) => {
              setEndDate(new Date(e.target.value).toISOString());
            }}
          />
        </div>
      </div>
      {start_date && end_date && (
        <EmployeeScheduleTable
          startDate={new Date(start_date.slice(0, 10))}
          endDate={new Date(end_date.slice(0, 10))}
          employees={employees}
        />
      )}
    </div>
  );
};

export default EmpLeave;
