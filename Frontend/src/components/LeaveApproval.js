import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import axios from 'axios';
import Loader from './Loader';
import { ApprovalModal } from './Modal';
import React, { useEffect, useState } from 'react';
import { format_date } from '../utils/Date';

const LeaveApproval = () => {
  const loginUserID = localStorage.getItem('id');
  const [empData, setEmpData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaveData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/sms/leave/leavedata?id=${loginUserID}`)
      .then((response) => {
        setEmpData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchLeaveData();
  }, []);

  let count = 0;
  empData.map((e) => {
    if (e.status == 'Pending') count++;
  });

  return (
    <div>
      {count > 0 ? (
        <>
          <h2 style={{ marginY: '10px' }}>Approval List</h2>
          {!loading ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 'bold' }}>
                      Leave ID
                    </TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>
                      Employee ID
                    </TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>From</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>To</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Days</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Status</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {empData.length > 0
                    ? empData.map((e, id) => {
                        let leave;
                        if (e.leave_type == 3) leave = 'Paid Leave';
                        else if (e.leave_type == 1)
                          leave = 'Restricted Holiday';
                        else if (e.leave_type == 2) leave = 'Sick Leave';
                        else if (e.leave_type == 4)
                          leave = 'Compensatory Leave';
                        return (
                          // pasted from here
                          <>
                            {e.status == 'Pending' ? (
                              <TableRow key={id}>
                                <TableCell>{e.id}</TableCell>
                                <TableCell>{e.employee_id}</TableCell>
                                <TableCell>{e.name}</TableCell>
                                <TableCell>
                                  {format_date(e.from_date.slice(0, 10))}
                                </TableCell>
                                <TableCell>
                                  {format_date(e.to_date.slice(0, 10))}
                                </TableCell>
                                <TableCell>{e.days}</TableCell>
                                <TableCell>{e.status}</TableCell>
                                <TableCell>
                                  <ApprovalModal data={e} leave={leave} />
                                </TableCell>
                              </TableRow>
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })
                    : ''}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Loader />
          )}
        </>
      ) : (
        <div
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '18px',
          }}
        >
          No Approval Requests
        </div>
      )}
    </div>
  );
};

export default LeaveApproval;
