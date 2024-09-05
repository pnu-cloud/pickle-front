import React from 'react';
import { List, ListItem, Avatar, Typography, IconButton, Box, Divider } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import exImg from 'assets/bluee.svg';
import AuthButton from 'components/Buttons/AuthButton';

import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

const ParticipantNav = React.memo(({ subjects }) => {
  return (
    <Box
      className="absolute w-[467px] h-[160px]"
      sx={{
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.25)',
        backgroundColor: 'white',
        borderRadius: '10px',
        zIndex: 2,
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '7px',
        },
        '&::-webkit-scrollbar-track': {
          background: PICKLE_COLOR.mainWhite,
        },
        '&::-webkit-scrollbar-thumb': {
          background: PICKLE_COLOR.pointOrange,
          borderRadius: '10px',
        },
      }}
    >
      <List>
        {subjects.map((participant) => (
          <React.Fragment key={participant.participantId}>
            <ListItem sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Avatar src={participant.participantImage} />
              <Typography>{participant.participantName}</Typography>
              <AuthButton />
              <IconButton>
                <RemoveCircleOutlineOutlinedIcon sx={{ color: PICKLE_COLOR.pointOrange }} />
              </IconButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
});

export default ParticipantNav;
