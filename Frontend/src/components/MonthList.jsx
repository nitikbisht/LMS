import React from 'react';
import '../style/MonthList.css';

const MonthList = ({ data }) => {
 // console.log(data)
  return (
    <div className="month-list-container">
      <h2 className="month-list-heading">Fee Details</h2>
      <table className="month-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Month</th>
            <th>Balance Fee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className={`month-row ${+item.balance_fee === 0 ? 'green' : new Date(item.for_month) > new Date() ? 'orange' : 'red'}`}
            >
              <td>{item.student_id}</td>
              <td>{item.for_month}</td>
              <td>{item.balance_fee}</td>
              <td>
                <span className={`status ${+item.balance_fee === 0 ? 'paid' : new Date() ? 'upcoming' : 'paid'}`}>
                  {+item.balance_fee === 0 ? 'Paid' : new Date(item.for_month) > new Date() ? 'Upcoming' : 'Pending'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthList;
