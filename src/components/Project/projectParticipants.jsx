import React from 'react';
import { Container, Box, AvatarGroup, Avatar, Grid, Typography, Stack } from '@mui/material';
import bluee from 'assets/bluee.svg';
const ProjectParticipants = (props) => {
  const users = props.participants;
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container sx={{ marginTop: 1, marginBottom: 4 }}>
        {users.map((user) => (
          <Grid item key={user.id} sx={{ width: '10%' }}>
            <Stack alignItems="center">
              <Avatar
                alt={user.name}
                src={bluee}
                sx={{
                  width: 54,
                  height: 54,
                  border: '3px solid white',
                  boxShadow: '0px 4px 4.5px rgba(0, 0, 0, 0.25)',
                }}
              />
              <Typography
                sx={{
                  marginTop: 1,
                  fontWeight: 400,
                  fontSize: 15,
                  color: '#858585',
                }}
              >
                {user.name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default ProjectParticipants;
