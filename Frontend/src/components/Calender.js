import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { format_date } from '../utils/Date';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Loader from './Loader';

const Calender = () => {
  const [holidays, setholidays] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState('2023');
  const [type, setType] = useState('');

  const handleType = (event) => {
    const selectedType = event.target.value;
    setType(selectedType);

    if (selectedType) {
      try {
        fetchholidayss(selectedYear, selectedType);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    }
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedYear(selectedValue);

    if (selectedValue) {
      try {
        fetchholidayss(selectedValue, type);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    }
  };

  const fetchholidayss = (year, type) => {
    if (type == undefined || type == null || type == 'N' || type == '') {
      axios
        .get(`${process.env.REACT_APP_URL}/sms/leave/holidaydata?year=${year}`)
        .then((data) => {
          setholidays(data.data);
          setLoading(false);
        })
        .catch((err) => {
          setholidays(null);
          console.log(err);
        });
    } else {
      axios
        .get(
          `${process.env.REACT_APP_URL}/sms/leave/holidaydata?year=${year}&type=${type}`
        )
        .then((data) => {
          setholidays(data.data);
          setLoading(false);
        })
        .catch((err) => {
          setholidays(null);
          console.log(err);
        });
    }
  };

  useEffect(() => {
    fetchholidayss(selectedYear);
  }, []);

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      {!loading ? (
        <>
          <h2>Holiday Calender of {selectedYear}</h2>
          <div style={{ display: 'flex' }}>
            <div>
              <select
                style={{
                  fontWeight: '14px',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  marginRight: '20px',
                }}
                value={selectedYear}
                onChange={handleChange}
              >
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
              </select>
            </div>
            <div>
              <select
                style={{
                  fontWeight: '14px',
                  padding: '10px 15px',
                  borderRadius: '5px',
                }}
                value={type}
                onChange={handleType}
              >
                <option value='N'>Leave type</option>
                <option value='H'>Company Holidays</option>
                <option value='RH'>Restricted Holidays</option>
              </select>
            </div>
          </div>
          {holidays?.length > 0 ? (
            <TableContainer style={{ width: '600px' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 'bold' }}>
                      Holidays
                    </TableCell>
                    <TableCell align='center' style={{ fontWeight: 'bold' }}>
                      Date
                    </TableCell>
                    <TableCell align='center' style={{ fontWeight: 'bold' }}>
                      Day
                    </TableCell>
                    {/* <TableCell align='center' style={{ fontWeight: 'bold' }}>
                      Type
                    </TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {holidays?.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{row.name}</TableCell>
                      <TableCell align='center'>
                        {format_date(row.date)}
                      </TableCell>
                      <TableCell align='center'>{row.dayofweek}</TableCell>
                      {/* <TableCell align='center'>{row.holiday_type}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <h4 style={{ padding: '20px' }}>No Holidays Found</h4>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Calender;
