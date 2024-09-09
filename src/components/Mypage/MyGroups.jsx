import React, { useEffect, useState } from 'react';
import { Divider, Stack, Button, TextField, Typography, Avatar, Box, Grid, Container } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import UserAPI from '../../APIs/UserApi';
import GroupAPI from 'APIs/GroupAPI';
import GroupAvatar from './GroupAvatar';
const MyGroups = () => {
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
        <GroupAvatar groupId={g.id}></GroupAvatar>
      ))}
    </Grid>
  );
};
export default MyGroups;
