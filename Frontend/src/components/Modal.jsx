import * as React from 'react';

import Box from '@mui/material/Box';

import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

import axios from 'axios';

import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import Menu from '@mui/material/Menu';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { MenuItem, Select, TextareaAutosize } from '@mui/material';

import { calculateDateDifference, format_date } from '../utils/Date';

 

const style = {

  position: 'absolute',

  top: '50%',

  left: '50%',

  transform: 'translate(-50%, -50%)',

  minWidth: 400,

  bgcolor: 'background.paper',

  border: '2px solid #000',

  boxShadow: 24,

  p: 4,

  display: 'grid',

  gap: '5px',

};

 

export function ShowDesModal({ data, leave, TYPE }) {

  const [open, setOpen] = React.useState(false);

  const handleMenuClose = () => {

    setAnchorEl(null);

  };

  const handleOpen = () => {

    setOpen(true);

    handleMenuClose();

  };

  const handleClose = () => setOpen(false);

 

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

 

  const handleMenuClick = (event) => {

    setAnchorEl(event.currentTarget);

  };

 

  if (TYPE === 'HISTORY') {

    return (

      <>

        <Button

          id='basic-button'

          aria-controls={openMenu ? 'basic-menu' : undefined}

          aria-haspopup='true'

          aria-expanded={openMenu ? 'true' : undefined}

          onClick={handleMenuClick}

        >

          <MoreVertIcon />

        </Button>

 

        <Menu

          id='basic-menu'

          anchorEl={anchorEl}

          open={openMenu}

          onClose={handleMenuClose}

          MenuListProps={{

            'aria-labelledby': 'basic-button',

          }}

        >

          <MenuItem>

            <Button onClick={handleOpen}> View </Button>

          </MenuItem>

        </Menu>

 

        <Modal

          open={open}

          onClose={handleClose}

          aria-labelledby='modal-modal-title'

          aria-describedby='modal-modal-description'

        >

          <Box sx={style}>

            <div

              style={{

                display: 'flex',

                flexDirection: 'column',

                gap: '8px',

              }}

            >

              <div

                style={{

                  display: 'flex',

                  alignItems: 'center',

                  justifyContent: 'space-between',

                }}

              >

                <h2>Leave details :</h2>

                <CloseIcon

                  style={{ cursor: 'pointer' }}

                  onClick={handleClose}

                />

              </div>

 

              <div>

                <span style={{ fontWeight: 'bold' }}>Leave ID :</span>

                {data.id}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>Leave Type :</span>

                {leave}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>From :</span>

                {format_date(data.from_date.slice(0, 10))}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>To :</span>

                {format_date(data.to_date.slice(0, 10))}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>Days :</span> {data.days}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>Description :</span>

                {data.description}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>Status :</span>

                {data.name}

              </div>

              {data.approver_comment != null && (

                <div>

                  <span style={{ fontWeight: 'bold' }}>Reason :</span>{' '}

                  {data.approver_comment}

                </div>

              )}

            </div>

          </Box>

        </Modal>

      </>

    );

  } else if (TYPE === 'APPROVAL') {

    return (

      <div style={{ width: '100%', textAlign: 'Center' }}>

        <Button style={{ width: '100%' }} onClick={handleOpen}>

          View

        </Button>

        <Modal

          open={open}

          onClose={handleClose}

          aria-labelledby='modal-modal-title'

          aria-describedby='modal-modal-description'

        >

          <Box sx={style}>

            <div

              style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}

            >

              <div

                style={{

                  display: 'flex',

                  alignItems: 'center',

                  justifyContent: 'space-between',

                }}

              >

                <h2>Leave details :</h2>

                <CloseIcon

                  style={{ cursor: 'pointer' }}

                  onClick={handleClose}

                />

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>Employee ID :</span>{' '}

                {data.employee_id}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>Leave ID :</span> {data.id}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>Leave Type :</span> {leave}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>Name :</span> {data.name}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>From :</span>{' '}

                {format_date(data.from_date.slice(0, 10))}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>To :</span>{' '}

                {format_date(data.to_date.slice(0, 10))}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>Days :</span> {data.days}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>Status :</span>{' '}

                {data.status}

              </div>

              <div>

                <span style={{ fontWeight: 'bold' }}>Description :</span>{' '}

                {data.description}

              </div>

            </div>

          </Box>

        </Modal>

      </div>

    );

  } else if (TYPE === 'REJECT') {

    return (

      <div style={{ width: '100%', textAlign: 'Center' }}>

        <Button style={{ width: '100%' }} onClick={handleOpen}>

          Rejected

        </Button>

 

        <Modal

          open={open}

          onClose={handleClose}

          aria-labelledby='modal-modal-title'

          aria-describedby='modal-modal-description'

        >

          <Box sx={style}>

            <div

              style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}

            >

              <h2>Reason</h2>

              <div>{data.approver_comment}</div>

            </div>

          </Box>

        </Modal>

      </div>

    );

  } else if (TYPE === 'REJECT') {

    return (

      <div style={{ width: '100%', textAlign: 'Center' }}>

        <Button style={{ width: '100%' }} onClick={handleOpen}>

          Rejected

        </Button>

 

        <Modal

          open={open}

          onClose={handleClose}

          aria-labelledby='modal-modal-title'

          aria-describedby='modal-modal-description'

        >

          <Box sx={style}>

            <div

              style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}

            >

              <h2>Reason</h2>

              <div>{data.approver_comment}</div>

            </div>

          </Box>

        </Modal>

      </div>

    );

  }

}

 

export function ShowEditLeaveModal({ data, leave }) {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {

    setOpen(true);

    handleMenuClose();

  };

  const handleClose = () => setOpen(false);

 

  const [openView, setViewOpen] = React.useState(false);

  const handleViewOpen = () => {

    setViewOpen(true);

    handleMenuClose();

  };

  const handleViewClose = () => setViewOpen(false);

 

  const [start_date, setStartDate] = useState(data.from_date);

  const [end_date, setEndDate] = useState(data.to_date);

  const today = new Date().toISOString().split('T')[0];

  const [selectedOption, setSelectedOption] = useState(data.leave_type[0]);

 

  const handleOptionChange = (event) => {

    setSelectedOption(event.target.value);

    console.log('new ' + selectedOption);

  };

 

  const [val, setVal] = useState({

    leave_des: data.description,

  });

  const changeHandler = (e) => {

    setVal({ ...val, [e.target.name]: e.target.value });

  };

  const empID = localStorage.getItem('employee_id');

 

  const handleSubmit = () => {

    const res = {

      employee_id: empID,

      id: data.id,

      from_date: start_date,

      to_date: end_date,

      description: val.leave_des,

      leave_type: selectedOption,

      received_days: calculateDateDifference(start_date, end_date),

      old_leave_type: data.leave_type[0],

    };

    console.log(res);

    axios

      .post(`${process.env.REACT_APP_URL}/sms/leave/editempleave`, res)

      .then((x) => {

        console.log(x);

        alert('Updated Successfully');

        handleClose();

        window.location.reload();

      })

      .catch((err) => {

        alert(err.response.data.error);

        console.log(err);

      });

  };

 

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

 

  const handleMenuClick = (event) => {

    setAnchorEl(event.currentTarget);

  };

 

  const showAlert = () => {

    handleMenuClose();

    const result = window.confirm('Are you sure you want to cancel the leave?');

    if (result) {

      const res = {

        id: data.id,

        days: data.days,

        leave_type: data.leave_type[0],

        employee_id: data.employee_id,

        status: 'CANCEL',

      };

      axios

        .post(`${process.env.REACT_APP_URL}/sms/leave/updateleave`, res)

        .then((_) => {

          alert('Cancel Successfull');

          window.location.reload();

        })

        .catch((err) => {

          console.log(err);

        });

    }

  };

 

  const handleMenuClose = () => {

    setAnchorEl(null);

  };

 

  return (

    <div>

      {/* pasted here  */}

      <Button

        id='basic-button'

        aria-controls={openMenu ? 'basic-menu' : undefined}

        aria-haspopup='true'

        aria-expanded={openMenu ? 'true' : undefined}

        onClick={handleMenuClick}

      >

        <MoreVertIcon />

      </Button>

 

      <Menu

        id='basic-menu'

        anchorEl={anchorEl}

        open={openMenu}

        onClose={handleMenuClose}

        MenuListProps={{

          'aria-labelledby': 'basic-button',

        }}

      >

        {/* View button  */}

        <MenuItem>

          <Button onClick={handleViewOpen}> View </Button>

        </MenuItem>

 

        {/* reject button */}

        <MenuItem>

          <Button onClick={handleOpen}>Edit</Button>

        </MenuItem>

        <MenuItem>

          <Button onClick={showAlert}>Cancel</Button>

        </MenuItem>

      </Menu>

 

      {/* till here */}

 

      <Modal

        open={open}

        onClose={handleClose}

        aria-labelledby='modal-modal-title'

        aria-describedby='modal-modal-description'

      >

        <Box sx={style}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

            <div

              style={{

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'space-between',

              }}

            >

              <h2>Leave details :</h2>

              <CloseIcon style={{ cursor: 'pointer' }} onClick={handleClose} />

            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

              <div>

                <div>Start Date</div>

                <input

                  style={{ padding: '10px' }}

                  type='date'

                  name='start_date'

                  value={start_date.slice(0, 10)}

                  min={today}

                  onChange={(e) => {

                    setStartDate(new Date(e.target.value).toISOString());

                  }}

                />

              </div>

              <div>

                <div>End Date</div>

                <input

                  style={{ padding: '10px' }}

                  type='date'

                  name='end_date'

                  min={start_date.slice(0, 10)}

                  value={end_date.slice(0, 10)}

                  onChange={(e) => {

                    setEndDate(new Date(e.target.value).toISOString());

                  }}

                />

              </div>

            </div>

            <div>

              <div>Leave Type</div>

              <Select

                style={{

                  width: '100%',

                }}

                value={selectedOption}

                onChange={handleOptionChange}

              >

                <MenuItem value='1'>Restricted Holiday</MenuItem>

                <MenuItem value='2'>Sick Leave</MenuItem>

                <MenuItem value='3'>Paid Leave</MenuItem>

                <MenuItem value='4'>Compensation Leave</MenuItem>

              </Select>

            </div>

            <div>

              <div>Leave Description</div>

              <TextareaAutosize

                onChange={changeHandler}

                name='leave_des'

                style={{

                  width: '100%',

                  height: '50px',

                  padding: '10px',

                  fontSize: '16px',

                }}

                value={val.leave_des}

              />

            </div>

            <Button onClick={handleSubmit} variant='contained' color='success'>

              Update

            </Button>

          </div>

        </Box>

      </Modal>

 

      <Modal

        open={openView}

        onClose={handleViewClose}

        aria-labelledby='modal-modal-title'

        aria-describedby='modal-modal-description'

      >

        <Box sx={style}>

          <div

            style={{

              display: 'flex',

              flexDirection: 'column',

              gap: '8px',

            }}

          >

            <div

              style={{

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'space-between',

              }}

            >

              <h2>Leave details :</h2>

              <CloseIcon

                style={{ cursor: 'pointer' }}

                onClick={handleViewClose}

              />

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>Leave ID :</span> {data.id}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>Leave Type :</span>

              {leave}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>From :</span>{' '}

              {format_date(data.from_date.slice(0, 10))}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>To :</span>{' '}

              {format_date(data.to_date.slice(0, 10))}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>Days :</span> {data.days}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>Description :</span>{' '}

              {data.description}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>Status :</span> {data.name}

            </div>

            {data.approver_comment != null && (

              <div>

                <span style={{ fontWeight: 'bold' }}>Reason :</span>{' '}

                {data.approver_comment}

              </div>

            )}

          </div>

        </Box>

      </Modal>

    </div>

  );

}

 

export function ApprovalModal({ data, leave }) {

  const emailID = localStorage.getItem('name');

  const [field, setField] = React.useState();

  const [count, setCount] = React.useState(0);

 

  //For Menu

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);

  const handleMenuClose = () => setAnchorEl(null);

 

  //For View Modal

  const [openView, setViewOpen] = React.useState(false);

  const handleViewOpen = () => {

    setViewOpen(true);

    handleMenuClose();

  };

  const handleViewClose = () => setViewOpen(false);

 

  //For Approve Modal

  const [openApproveView, setApproveViewOpen] = React.useState(false);

  const handleApproveOpen = () => {

    setApproveViewOpen(true);

    handleMenuClose();

  };

  const handleApproveClose = () => setApproveViewOpen(false);

 

  //For Reject Modal

  const [openRejectView, setRejectViewOpen] = React.useState(false);

  const handleRejectOpen = () => {

    setRejectViewOpen(true);

    handleMenuClose();

  };

  const handleRejectClose = () => setRejectViewOpen(false);

 

  const handleLeaveApprove = (e) => {

    axios

      .post(`${process.env.REACT_APP_URL}/sms/leave/updateleave`, e)

      .then((_) => {

        alert('Approved Successfully!');

        window.location.reload()

      })

      .then((err) => {

        console.log(err);

      });

  };

 

  const handleLeaveReject = (val) => {

    const info = {

      id: val.id,

      status: 'REJECT',

      leave_type: val.leave_type,

      employee_id: val.employee_id,

      days: val.days,

      aprrover_comment: field,

      updated_by: emailID,

    };

    axios

      .post(`${process.env.REACT_APP_URL}/sms/leave/updateleave`, info)

      .then((_) => {

        alert('Rejected Successfully!');

        handleRejectClose();

      })

      .then((err) => {

        console.log(err);

      });

  };

 

  return (

    <div>

      <Button

        id='basic-button'

        aria-controls={openMenu ? 'basic-menu' : undefined}

        aria-haspopup='true'

        aria-expanded={openMenu ? 'true' : undefined}

        onClick={handleMenuClick}

      >

        <MoreVertIcon />

      </Button>

 

      <Menu

        id='basic-menu'

        anchorEl={anchorEl}

        open={openMenu}

        onClose={handleMenuClose}

        MenuListProps={{

          'aria-labelledby': 'basic-button',

        }}

      >

        <MenuItem>

          <Button onClick={handleViewOpen}>View</Button>

        </MenuItem>

        <MenuItem>

          <Button onClick={handleApproveOpen}>Approve</Button>

        </MenuItem>

        <MenuItem>

          <Button onClick={handleRejectOpen}>Reject</Button>

        </MenuItem>

      </Menu>

 

      {/* Modal For View */}

      <Modal

        open={openView}

        onClose={handleViewClose}

        aria-labelledby='modal-modal-title'

        aria-describedby='modal-modal-description'

      >

        <Box sx={style}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

            <div

              style={{

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'space-between',

              }}

            >

              <h2>Leave details :</h2>

              <CloseIcon

                style={{ cursor: 'pointer' }}

                onClick={handleViewClose}

              />

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>Employee ID :</span>{' '}

              {data.employee_id}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>Leave ID :</span> {data.id}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>Leave Type :</span> {leave}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>Name :</span> {data.name}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>From :</span>{' '}

              {format_date(data.from_date.slice(0, 10))}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>To :</span>{' '}

              {format_date(data.to_date.slice(0, 10))}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>Days :</span> {data.days}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>Status :</span> {data.status}

            </div>

            <div>

              <span style={{ fontWeight: 'bold' }}>Description :</span>{' '}

              {data.description}

            </div>

          </div>

        </Box>

      </Modal>

 

      {/* Modal for approve */}

      <Modal

        open={openApproveView}

        onClose={handleApproveClose}

        aria-labelledby='modal-modal-title'

        aria-describedby='modal-modal-description'

      >

        <Box sx={style}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

            <div

              style={{

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'space-between',

               

              }}

            >

              <h2>Are you sure you want to approve the leave?</h2>

              <CloseIcon

                style={{ cursor: 'pointer',marginBottom: '15%' }}

                onClick={handleApproveClose}

              />

            </div>

 

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

              <Button

                onClick={() =>

                  handleLeaveApprove({

                    id: Number(data.id),

                    status: 'SUCCESS',

                    aprrover_comment: null,

                    leave_type: Number(data.leave_type),

                    employee_id: data.employee_id,

                    days: calculateDateDifference(data.from_date, data.to_date),

                    updated_by: emailID,

                  })

                }

                variant='contained'

                color='success'

              >

                Approve

              </Button>

              <Button

                onClick={handleApproveClose}

                variant='contained'

                color='error'

              >

                Cancel

              </Button>

            </div>

          </div>

        </Box>

      </Modal>

 

      {/* Modal for reject */}

      <Modal

        open={openRejectView}

        onClose={handleRejectClose}

        aria-labelledby='modal-modal-title'

        aria-describedby='modal-modal-description'

      >

        <Box sx={style}>

          <div

            style={{

              display: 'flex',

              alignItems: 'center',

              justifyContent: 'space-between',

            }}

          >

            <h2>Comments</h2>

            <CloseIcon

              style={{ cursor: 'pointer' }}

              onClick={handleRejectClose}

            />

          </div>

          <TextareaAutosize

            style={{

              width: '100%',

              height: '120px',

              padding: '10px',

              fontSize: '16px',

              fontWeight: 'normal',

            }}

            placeholder='Reason'

            value={field}

            onChange={(e) => {

              setField(e.target.value);

              setCount(e.target.value.length);

            }}

          />

          <label style={{ fontSize: '12px' }}>

            Max character {4000 - count >= 0 ? 4000 - count : 0}

          </label>

          <div

            style={{

              display: 'flex',

              alignItems: 'center',

              justifyContent: 'space-around',

              marginTop: '20px',

            }}

          >

            <Button

              onClick={() => handleLeaveReject(data)}

              variant='contained'

              color='success'

              disabled={count < 3 || count > 4000}

            >

              Reject

            </Button>

            <Button

              onClick={handleRejectClose}

              variant='contained'

              color='error'

            >

              Cancel

            </Button>

          </div>

        </Box>

      </Modal>

    </div>

  );

}