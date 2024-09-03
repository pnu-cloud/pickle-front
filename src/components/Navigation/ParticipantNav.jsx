import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Avatar, Typography, Button } from '@mui/material';
import exImg from 'assets/bluee.svg';
import AuthButton from 'components/Buttons/AuthButton';

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

const ParticipantNav = () => {
  return (
    <List>
      <ListItem>
        <ListItemButton>
          <Avatar src={exImg} />
          <Typography></Typography>
          <AuthButton />
          <CircleOutlinedIcon />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
export default ParticipantNav;
