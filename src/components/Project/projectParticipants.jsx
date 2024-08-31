import React from 'react';
import { Avatar, Grid, Typography, Stack } from '@mui/material';

const ProjectParticipants = (props) => {
  const users = props.projectParticipants;
  return (
    <Box>
      <AvatarGroup>
        {users.map((user) => (
          <Grid item key={user.paticipantIds}>
            <Stack direction="column" alignItems="center" spacing={1} sx={{ width: '100%' }}>
              <Avatar
                alt={user.participantName}
                src={user.participantProfile}
                sx={{
                  width: 54,
                  height: 54,
                  border: '2px solid white',
                  boxShadow: '0px 4px 4.5px rgba(0, 0, 0, 0.25)',
                }}
              />
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 15,
                  color: '#858585',
                }}
              >
                {users.participantName}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </AvatarGroup>
    </Box>
  );
};
export default ProjectParticipants;
