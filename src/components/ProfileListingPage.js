import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        marginTop: theme.spacing(4),
        fontWeight: 'bold',
        fontFamily: "Open Sans"
      },
    }));

const ProfileListingPage = () => {
    const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://express-t4.onrender.com/api/users');
        if (response.status === 200) {
          setUsers(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = () => {
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setUsers(filteredUsers);
  };

  return (
    <div className='Title'> <Typography variant='h2' className={classes.title} gutterBottom>Profile Listing Page</Typography>
   
          <TextField
              label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
              <br/><br/>
          <Button variant="contained" onClick={handleSearch}>Search</Button>
          <br/><br/><br/>
          <Grid container spacing={2}>
              {users.map((user) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
                      <Card>
                          <CardContent>
                              <Link to={`/user/${user._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                  <img src={user.picture} alt={user.name} style={{ width: '100%', height: 'auto' }} />
                                  <Typography variant="h5" component="div">{`${user.name}`}</Typography>
                                  <Typography variant="body2" color="textSecondary">{user.email}</Typography>
                              </Link>
                          </CardContent>
                      </Card>
                  </Grid>
              ))}
          </Grid>
      </div>
    
  );
};

export default ProfileListingPage;
