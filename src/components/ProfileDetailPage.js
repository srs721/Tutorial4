import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@mui/material';

import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        marginTop: theme.spacing(4),
        fontWeight: 'bold',
        fontFamily: "Open Sans"
      },
    }));

const ProfileDetailPage = () => {
    const classes = useStyles();
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Title'> <Typography variant='h2' className={classes.title} gutterBottom>Profile Listing Page</Typography>

    <div>
      <h2>{`${user.name}`}</h2>
      <img src={user.picture} alt={user.name} />
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
      <p>Balance: {user.balance}</p>
      <p>Age: {user.age}</p>
      <p>Company: {user.company}</p>
      <p>Gender: {user.gender}</p>
      <p>About: {user.about}</p>
      <p>Greeting: {user.greeting}</p>
      <p>Favorite Fruit: {user.favoriteFruit}</p>
      <p>Friends:</p>
      <ul>
      {user.friends.map((friend) => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </ul>
    </div>
    </div>
  );
};

export default ProfileDetailPage;
