import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { format_iso_Date } from '../utils/Date';
import Loader from './Loader';
import { ShowDesModal, ShowEditLeaveModal } from './Modal';

const LeaveSummary = () => {
  const [empData, setEmpData] = useState([]);
  const [loading, setLoading] = useState(true);
  const empID = localStorage.getItem('employee_id');

  const fetchEmpLeaveData = () => {
    axios
      .get(
        `${process.env.REACT_APP_URL}/sms/leave/getemployeeleaves?id=${empID}`
      )
      .then((res) => {
        setEmpData(res.data);
        // console.log(data.data);
        // window.location.reload()
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    fetchEmpLeaveData();
  }, []);

  return (
    <div>
      <>
        {empData.length > 0 ? (
          <>
            <h2>Leave Histories</h2>
            {!loading ? (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>
                        Leave ID
                      </TableCell>
                      <TableCell style={{ fontWeight: 'bold' }}>From</TableCell>
                      <TableCell style={{ fontWeight: 'bold' }}>To</TableCell>
                      <TableCell style={{ fontWeight: 'bold' }}>Days</TableCell>
                      <TableCell style={{ fontWeight: 'bold' }}>Type</TableCell>
                      <TableCell style={{ fontWeight: 'bold' }}>
                        Status
                      </TableCell>
                      <TableCell style={{ fontWeight: 'bold' }}>
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {empData.length > 0
                      ? empData.map((e) => {
                          return (
                            <TableRow key={e?.id}>
                              <TableCell>{e?.id}</TableCell>
                              <TableCell>
                                {format_iso_Date(e?.from_date)}
                              </TableCell>
                              <TableCell>
                                {format_iso_Date(e?.to_date)}
                              </TableCell>
                              <TableCell>{e?.days}</TableCell>
                              <TableCell>{e?.leave_type[1]}</TableCell>
                              <TableCell>{e?.name}</TableCell>
                              <TableCell>
                                {e?.name != 'Pending' && (
                                  <ShowDesModal
                                    data={e}
                                    TYPE='HISTORY'
                                    leave={e?.leave_type[1]}
                                  />
                                )}
                                {e?.name == 'Pending' && (
                                  <ShowEditLeaveModal
                                    data={e}
                                    leave={e?.leave_type[1]}
                                  />
                                )}
                              </TableCell>
                            </TableRow>
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
            No Histories found
          </div>
        )}
      </>
    </div>
  );
};

export default LeaveSummary;
