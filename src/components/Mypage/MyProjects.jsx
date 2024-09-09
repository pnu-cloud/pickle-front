import React, { useEffect, useState } from 'react';
import { Divider, Stack, Button, TextField, Typography, Avatar, Box, Grid, Container } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import UserAPI from '../../APIs/UserApi';
import GroupAPI from 'APIs/GroupAPI';
import MyProject2 from './MyProject2';
const MyProjects = ({ groupId }) => {
  const [memberGroups, setMemberGroups] = useState([]);
  useEffect(() => {
    UserAPI()
      .then((data) => {
        console.log(data);
        setMemberGroups(data.data.userGroupInfoList);
        // console.log('memberGroup ' + memberGroups[0].id);
      })
      .catch((error) => {
        alert(error.message);
        console.error('Error during load UserData:', error);
      });
  }, []);
  return (
    <Grid container sx={{ marginTop: 1, marginBottom: 4 }}>
      {memberGroups.map((g) => (
        // <div>{g.id} / </div>
        <MyProject2 groupId={g.id}></MyProject2>
      ))}
    </Grid>
  );
};
export default MyProjects;
