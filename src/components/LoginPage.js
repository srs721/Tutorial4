import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { TextField, Button,Typography,Grid } from '@mui/material';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  title: {
      flexGrow: 1,
      marginTop: theme.spacing(4),
      fontWeight: "bold",
      fontFamily: "Open Sans"
    },
  }));

const LoginPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://express-t4.onrender.com/api/login', {
        username: email,
        password: password,
      });

      if (response.status === 200) {
        navigate('/profile');
      } else {
        // Handle login failure
        console.log('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div className='Title'> <Typography variant='h2' className={classes.title} gutterBottom>Login Page</Typography>

    <div>
    <Grid container>
    <Grid item xs={12} sm={6} md={4}>
    <TextField
      label="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <br/><br/>
    <TextField
      label="Password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <br/><br/>
    <Button variant="contained" onClick={handleLogin}>Login</Button>
    <br /><br/><br/>
    </Grid>
   </Grid> 
  </div>
  </div>
  );
};

export default LoginPage;
