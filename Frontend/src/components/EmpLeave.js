

import React, { useEffect, useState } from 'react';



import EmployeeScheduleTable from './EmployeeScheduleTable';



import axios from 'axios';



import { Button } from '@mui/material';







const EmpLeave = () => {



  const d = new Date().toJSON().slice(0, 10);



  const [start_date, setStartDate] = useState(d);



  const [end_date, setEndDate] = useState();



  const [loading, setLoading] = useState(true);







  const [employees, setEmployees] = useState([]);







  const fetchData = () => {



    console.log(start_date, end_date);



    axios



      .post(`${process.env.REACT_APP_URL}/sms/leave/leave_status`, {



        from_date: start_date,



        to_date: end_date,



      })



      .then((res) => {



        console.log(res);



        setEmployees(res.data);



        setLoading(false);



      })



      .catch((e) => {



        console.log(e);



      });



  };







  return (



    <div>



      <h2 style={{ marginY: '0' }}>Employee Leave</h2>



      <div style={{ display: 'flex', alignItems: 'center' }}>



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



            }}



          />



        </div>



        <div style={{ marginRight: '20px', marginBottom: '10px' }}>



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



        <Button



          style={{ marginLeft: '50px' }}



          variant='contained'



          color='success'



          onClick={() => fetchData(start_date.end_date)}



        >



          Go



        </Button>



      </div>



      {!loading ? (



        <EmployeeScheduleTable



          startDate={new Date(start_date.slice(0, 10))}



          endDate={new Date(end_date.slice(0, 10))}



          employees={employees}



        />



      ) : (



        <></>



      )}



    </div>



  );



};


export default EmpLeave;



