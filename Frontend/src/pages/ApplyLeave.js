import {
  Button,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { calculateDateDifference } from '../utils/Date';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ApplyLeave = ({ empID, clientID, branchID, setSwitchh }) => {
  const [wait, setWait] = useState(false);
  const [data, setData] = useState({
    contact: '',
    leave_des: '',
  });

  const [leaveTypes, setLeaveTypes] = useState([])

  const emailID = localStorage.getItem('name');
  const today = new Date().toISOString().split('T')[0];
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const d = new Date().toJSON().slice(0, 10);
  const [start_date, setStartDate] = useState(d);
  const [end_date, setEndDate] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setWait(true);
    const value = {
      employeeid: empID,
      clientid: clientID ? clientID : 0,
      branchid: branchID ? branchID : 0,
      leavetype: Number(selectedOption),
      fromdate: start_date,
      todate: end_date,
      emergency_contact: data.contact,
      description: data.leave_des,
      status: 1,
      createdby: emailID,
      received_days: calculateDateDifference(start_date, end_date),
    };

    // console.log(value.received_days,value.leavetype);
    if (value.received_days > 1  && value.leavetype === 1 ) {
      alert("Restricted Holidays Can`t be more then 1")
      setWait(false);

    }
    else {
      // alert("in else")
      // setWait(false);

      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_URL}/sms/leave/insertleave`, value)
        .then((x) => {
          setSwitchh(false);
          setLoading(false);
          setWait(false);
          alert('Leave submitted!');
          window.location.reload();
          navigate('/home/leavedashboard');
        })
        .catch((err) => {
          alert(err?.response?.data?.error);
          setWait(false);

        })
    }

    // setLoading(true);
    // axios
    //   .post(`${process.env.REACT_APP_URL}/sms/leave/insertleave`, value)
    //   .then((x) => {
    //     setSwitchh(false);
    //     setLoading(false);
    //     setWait(false);
    //     alert('Leave submitted!');
    //     window.location.reload();
    //     navigate('/home/leavedashboard');
    //   })
    //   .catch((err) => {
    //     alert(err?.response?.data?.error);
    //   });
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [count, setCount] = React.useState(0);

  const [isDateDisabled, setDateDisabled] = useState(true)


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/sms/leave/leaveactive`)
      .then((res) => setLeaveTypes(res.data),
        // console.log(res.data)
      )
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <div>
        <h1>Leave Application</h1>
      </div>
      <form style={{ backgroundColor: '' }}>
        <div
          style={{
            display: 'flex',
            width: '70%',
          }}
        >
          <div>
            <div>Start Date</div>
            <input
              style={{
                marginRight: '50px',
                padding: '16px',
                fontSize: '16px',
              }}
              type='date'
              name='start_date'
              min={today}
              onChange={(e) => {
                setStartDate(new Date(e.target.value).toISOString());
                setDateDisabled(false)
              }}
            />
          </div>
          <div>
            <div>End Date</div>
            <input
              disabled={isDateDisabled}
              style={{ padding: '16px', fontSize: '16px' }}
              type='date'
              name='end_date'
              min={start_date.slice(0, 10)}
              onChange={(e) => {
                setEndDate(new Date(e.target.value).toISOString());
              }}
            />
          </div>
        </div>
        <div>
          <div>Your Leave Type</div>
          <Select
            value={selectedOption}
            style={{ width: '70%' }}
            onChange={handleOptionChange}
          >
            {
              leaveTypes.map((val, id) => {
                return <MenuItem value={id + 1}> {val.leave_type} </MenuItem>;
              })
            }
            {/* <MenuItem value=''>Select an option</MenuItem>
            <MenuItem value='1'>Restricted Holiday</MenuItem>
            <MenuItem value='2'>Sick Leave</MenuItem>
            <MenuItem value='3'>Paid Leave</MenuItem>
            <MenuItem value='4'>Compensation Leave</MenuItem> */}
          </Select>
        </div>
        <div>
          <div>Emergency Contact</div>
          <TextField
            style={{ width: '70%' }}
            type='number'
            onChange={changeHandler}
            name='contact'
            value={data.contact}
          />
        </div>
        <div>
          <div>Leave Description</div>
          <TextareaAutosize
            value={data.leave_des}
            onChange={(x) => {
              changeHandler(x);
              setCount(data.leave_des.length);
            }}
            name='leave_des'
            style={{
              width: '70%',
              height: '100px',
              padding: '10px',
              fontSize: '16px',
            }}
          />
        </div>
        <label style={{ fontSize: '12px' }}>
          Max character (4000). Remining :{' '}
          {4000 - count >= 0 ? 4000 - count : 0}
        </label>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '200px',
          }}
        >
          <Button
            onClick={handleSubmit}
            disabled={count < 3 || count > 4000 || wait}
            variant='contained'
            color='success'
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              if (setSwitchh) return setSwitchh(false);
              navigate('/home/leavedashboard');
            }}
            variant='contained'
            color='error'
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default ApplyLeave;
