import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import InputBase from '@mui/material/InputBase';

const Topnav = (props) => {
  const navigate = useNavigate();
  const drawerWidth = 240;
  const handleDrawerOpen = () => {
    props.setOpen(true);
  };
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgb(248,248,255,0.15)',
    '&:hover': { backgroundColor: 'rgb(248,248,255,0.25)' },
    marginRight: theme.spacing(5),
    cursor: 'pointer',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  const [drop, setDrop] = useState(false);

  return (
    <AppBar
      position='fixed'
      direction='row'
      justifycontent='flex-start'
      alignItems='center'
      spacing={12}
    >
      <Toolbar>
        <Stack direction='row' width={'100%'} justifyContent='space-between'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
            <div style={{ width: '220px' }}>
              <img
                style={{ width: '150px' }}
                src='https://www.mittalsoftwarelabs.com/img/logo.jpg'
              />
            </div>

            <Link to='/home' style={{ color: 'white', textDecoration: 'none' }}>
              <Typography variant='h6' noWrap component='div'>
                Leave Management
              </Typography>
            </Link>
          </div>
          <Button
            variant='h6'
            onClick={() => {
              localStorage.removeItem('employee_id');
              localStorage.removeItem('id');
              localStorage.removeItem('name');
              localStorage.removeItem('token');
              navigate('/');
            }}
          >
            Logout
          </Button>
        </Stack>
        {drop ? (
          <div
            style={{
              backgroundColor: 'white',
              position: 'fixed',
              top: '55px',
              right: '10px',
              width: '200px',
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              paddingTop: '0px',
              borderRadius: '5px',
            }}
          >
            <Button
              variant='outlined'
              startIcon={<SettingsIcon />}
              onClick={() => {
                navigate('profile');
                setDrop(false);
              }}
            >
              Profile
            </Button>
            <Button
              variant='outlined'
              startIcon={<SettingsIcon />}
              onClick={() => {
                localStorage.setItem('type', 'logout');
                localStorage.removeItem('token');
                localStorage.removeItem('id');
                localStorage.removeItem('clientid');
                localStorage.removeItem('employee_id');
                localStorage.removeItem('name');
                localStorage.removeItem('branchid');
                navigate('/login');
                setDrop(false);
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          ''
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Topnav;
