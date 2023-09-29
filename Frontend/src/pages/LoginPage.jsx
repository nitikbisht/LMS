import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});
export default function LoginPage() {
  useEffect(() => {
    const type = localStorage.getItem('type');
    if (type === 'logout') {
      alert('Logged out sucessfully');
      localStorage.removeItem('type');
    }
  }, []);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    handleLogin(data.get('email'), data.get('password'));
  };
  const handleLogin = (userName, credBits) => {
    axios
      .post(`${process.env.REACT_APP_URL}/sms/user/login`, {
        UserName: userName,
        CredBits: credBits,
      })

      .then((response) => {
        console.log(response.data);
        if (response.data) {
          console.log(response.data);
          localStorage.setItem('token', JSON.stringify(response.data.token));
          localStorage.setItem('name', JSON.stringify(userName));
          localStorage.setItem(
            'employee_id',
            JSON.stringify(response.data.employee_id)
          );
          localStorage.setItem('id', JSON.stringify(response.data.id));
          console.log('Login successful!');
          // localStorage.setItem('name', JSON.stringify(userName));
          navigate('/home');
        } else {
          console.log('Login failed!');
          setOpen(true);
        }
      })

      .catch((error) => {
        console.log(error);
        setmessage(error.message);
        setOpen(true);
      });
  };
  const [message, setmessage] = useState('');
  return (
    <Container component='main' maxWidth='lg'>
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert severity='error'>{message}</Alert>
      </Snackbar>
      <Box
        sx={{
          marginTop: 13,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                'url(https://pmtool.mittalsoftwarelabs.com/img/homeimage.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component='h1' variant='h5'>
                Log In
              </Typography>
              <Box
                component='form'
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />
                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
                <Typography sx={{ mt: 2, mb: 1 }}>
                  First time Login?
                  <Link to='/firstlogin' variant='body2'>
                    Click Here
                  </Link>
                </Typography>

                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Log In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to='/forget' variant='body2'>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    Don't have an account?{' '}
                    <Link to='/signup' variant='body2'>
                      Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
