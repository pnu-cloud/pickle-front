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
import StarsIcon from '@mui/icons-material/Stars';
import DeleteIcon from '@mui/icons-material/Delete';
const GroupParticipants = (props) => {
  const [authority, setAuthority] = React.useState('');
  const handleAuthorityChange = (event) => {
    setAuthority(event.target.value);
  };
  return (
    <Box
      sx={{ width: 795, height: 269, backgroundColor: 'transparent', borderRadius: 0, padding: 1, overflowX: 'hidden' }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', padding: 1 }}>
        <StyledIconButton variant="outlined" aria-label="add">
          <AddIcon sx={{ width: 18, height: 18 }} />
          <Typography sx={{ fontWeight: 500, fontSize: 15, marginLeft: 1 }}> add</Typography>
        </StyledIconButton>
      </Box>

      <div style={{ height: 220, overflowY: 'auto' }}>
        <List sx={{ width: 650, height: 240 }}>
          {props.groupParticipants.map((Participant) => (
            <ListItem key={Participant.participantId}>
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

                {Participant.participantAuthority !== 'owner' && (
                  <FormControl
                    sx={{
                      width: 118,
                      height: 28,
                      borderRadius: 999,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 999,
                        border: '1px solid #FF9029',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FF9029',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FF9029',
                      },
                      '& .MuiOutlinedInput-input': {
                        padding: '0 10px',
                      },
                    }}
                  >
                    <Select
                      value={authority}
                      onChange={handleAuthorityChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value="">
                        <em>{Participant.participantAuthority}</em>
                      </MenuItem>
                      <MenuItem value={2}>admin</MenuItem>
                      <MenuItem value={3}>member</MenuItem>
                    </Select>
                  </FormControl>
                )}
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </Box>
  );
};
export default GroupParticipants;
