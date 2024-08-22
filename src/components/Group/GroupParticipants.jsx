import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  MenuItem,
  Select,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  FormControl,
  ListItemIcon,
} from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import StyledIconButton from './StyledIconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import StarsIcon from '@mui/icons-material/Stars'; // Replace with the appropriate crown icon
import DeleteIcon from '@mui/icons-material/Delete';
const GroupParticipants = (props) => {
  const [authority, setAuthority] = React.useState('');

  const handleAuthorityChange = (event) => {
    setAuthority(event.target.value);
  };
  return (
    <Box sx={{ width: 795, height: 269, backgroundColor: 'transparent', borderRadius: 0 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '8px' }}>
        <StyledIconButton edge="end">
          <AddIcon />
          Add
        </StyledIconButton>
      </Box>

      <div style={{ height: 220, overflowY: 'auto' }}>
        <List sx={{ width: 650, height: 240 }}>
          {props.groupParticipants.map((Participant, index) => (
            <ListItem key={index}>
              <ListItemIcon
                sx={{
                  marginLeft: 1,
                  marginRight: 1,
                }}
              >
                <IconButton
                  edge="start"
                  aria-label="delete"
                  sx={{
                    margin: 0,
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemIcon>
              <ListItemAvatar>
                <Avatar
                  alt="participant"
                  src={Participant.participantImage}
                  sx={{ width: 36, height: 36, border: 1 }}
                />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                      fontWeight={Participant.participantAuthority === 'owner' ? 600 : 400}
                      sx={{ marginRight: '8px', width: 130, fontSize: 18 }}
                    >
                      {Participant.participantAuthority === 'owner' && (
                        <StarsIcon
                          sx={{ fontSize: 21, verticalAlign: 'middle', color: '#FFA726', marginRight: '4px' }}
                        />
                      )}
                      {Participant.participantName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontWeight: 400,
                        fontSize: 15,
                      }}
                    >
                      {Participant.participantEmail}
                    </Typography>
                  </Box>
                }
              />
              <ListItemSecondaryAction>
                {/* <RoleSelect value={Participant.participantAuthority} variant="outlined" displayEmpty>
                  <MenuItem value="admin">admin</MenuItem>
                  <MenuItem value="member">member</MenuItem>
                </RoleSelect> */}

                <FormControl>
                  <Select
                    value={authority}
                    onChange={handleAuthorityChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                      width: 118,
                      height: 28,
                      borderRadius: 999,
                      border: '1px solid #FF9029',
                    }}
                  >
                    <MenuItem value="">
                      <em>{Participant.participantAuthority} </em>
                    </MenuItem>
                    <MenuItem value={2}>admin</MenuItem>
                    <MenuItem value={3}>member</MenuItem>
                  </Select>
                </FormControl>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </Box>
  );
};
export default GroupParticipants;
