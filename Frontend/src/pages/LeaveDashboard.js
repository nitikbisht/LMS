import React, { useEffect, useState } from 'react';
import classes from '../styles/LeaveDashboard.module.css';
import axios from 'axios';
import LeaveSummary from '../components/LeaveSummary';
import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import ApplyLeave from './ApplyLeave';
import { format_iso_Date } from '../utils/Date';
import LeaveApproval from '../components/LeaveApproval';
import Loader from '../components/Loader';
import EmpLeave from '../components/EmpLeave';

const LeaveDashboard = () => {
  const [data, setData] = useState({});
  const [switchh, setSwitchh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [leaveDetails, setLeaveDetails] = useState([]);
  const loginUserID = localStorage.getItem('id');
  const empID = localStorage.getItem('employee_id');

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}/sms/leave/employeedata?id=${loginUserID}`
      )
      .then((res) => {
        setData(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${process.env.REACT_APP_URL}/sms/leave/getLeaveBalance?id=${empID}`)
      .then((res) => {
        setLeaveDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='leave_dashboard'>
      <div className={classes.head}>Leave Dashboard</div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={`${classes.flex} ${classes.card}`}>
            <div className={classes.user_info}>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{ fontWeight: 'bold', fontSize: '20px' }}
                      >
                        Employee Details
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>Name :</span>{' '}
                        {data?.name}
                      </TableCell>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>
                          Employee ID :{' '}
                        </span>
                        {data?.employee_id}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>
                          Joining Date :{' '}
                        </span>
                        {format_iso_Date(data?.joinning_date)}
                      </TableCell>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>Phone : </span>
                        {data?.contact_no}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>
                          Designation :{' '}
                        </span>
                        {data?.designation_name}
                      </TableCell>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>
                          Department :{' '}
                        </span>
                        {data?.department_name}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className={classes.leave_details}>
              <TableContainer>
                <Table aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{
                          fontWeight: 'bold',
                          fontSize: '20px',
                        }}
                      >
                        Leave Balance
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>Type</span>
                      </TableCell>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>Total</span>
                      </TableCell>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>Availed</span>
                      </TableCell>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>Remaining</span>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {leaveDetails.length > 0
                      ? leaveDetails.map((data, ind) => (
                          <TableRow key={data?.id}>
                            <TableCell>
                              <span style={{ fontWeight: 'bold' }}>
                                {data?.leave_type[1]}
                              </span>
                            </TableCell>
                            <TableCell>{data?.total_earn}</TableCell>
                            <TableCell>{data?.availed}</TableCell>
                            <TableCell>{data?.balance}</TableCell>
                          </TableRow>
                        ))
                      : ''}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          {!switchh ? (
            <div className={classes.apply_leave}>
              <Button
                onClick={() => setSwitchh(!switchh)}
                variant='contained'
                color='success'
                style={{ marginBottom: '2%' }}
              >
                Apply Leave
              </Button>
            </div>
          ) : (
            <></>
          )}

          {switchh ? (
            <ApplyLeave
              empID={data?.employee_id}
              clientID={data?.client_id}
              branchID={data?.branch_id}
              name={data?.name}
              setSwitchh={setSwitchh}
            />
          ) : (
            <>
              <Divider />
              <LeaveSummary />
              <Divider />
              <div style={{ marginTop: '2%' }}>
                {data?.manager == null ? <LeaveApproval /> : <></>}
              </div>
              <Divider />
              {/* <div style={{ marginTop: '2%' }}>
                {data?.manager == null ? <EmpLeave /> : <></>}
              </div> */}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default LeaveDashboard;
