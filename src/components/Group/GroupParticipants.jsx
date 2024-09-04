import React, { useState } from 'react';
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
  Stack,
  InputLabel,
} from '@mui/material';
//import {} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import StyledIconButton from './StyledIconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Crown from '../../assets/crown.svg';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import ParticipantDelModal from './ParticipantDelModal';
import ParticipantAddModal from './ParticipantAddModal';
const GroupParticipants = (props) => {
  const [openDelModal, setOpenDelModal] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const users = props.groupParticipants;
  const [authority, setAuthority] = useState(
    users.reduce((acc, user) => {
      acc[user.participantId] = user.participantAuthority;
      return acc;
    }, {}),
  );

  const handleAuthorityChange = (event, userId) => {
    setAuthority({
      ...authority,
      [userId]: event.target.value,
    });
  };

  const handleOpenDelModal = (participant) => {
    setSelectedParticipant(participant);
    setOpenDelModal(true);
  };

  const handleCloseDelModal = () => {
    setOpenDelModal(false);
    setSelectedParticipant(null);
  };
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <Box
      sx={{
        width: 795,
        height: 269,
        backgroundColor: 'transparent',
        borderRadius: 0,
        padding: 1,
        overflowY: 'hidden',
      }}
    >
      {/* 여기를 admin ver, member ver */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', padding: 1, overflow: 'hidden' }}>
        <StyledIconButton variant="outlined" aria-label="add" onClick={handleOpenAddModal}>
          {/* 본인이 admin이면 */}
          <AddIcon sx={{ width: 18, height: 18 }} />
          <Typography sx={{ fontWeight: 500, fontSize: 15, marginLeft: 1 }}> add</Typography>
        </StyledIconButton>
        {/* 본인이 memebr면 아무것도 안보임*/}
        {/* <StyledIconButton sx={{ borderColor: 'transparent', color: 'transparent' }} disabled></StyledIconButton> */}
      </Box>

      <Box
        sx={{
          height: 220,
          overflowX: 'hidden',
          '&::-webkit-scrollbar': {
            width: 8,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: PICKLE_COLOR.pointOrange,
            borderRadius: 999,
            width: 200,
          },
          '&::-webkit-scrollbar-track': {
            borderRadius: 999,
            backgroundColor: PICKLE_COLOR.lightGray,
          },
        }}
      >
        <List sx={{ width: 650, height: 240 }}>
          {/* 여기를 admin ver member ver 나누기 */}
          {props.groupParticipants.map((Participant) => (
            <ListItem
              key={Participant.participantId}
              sx={{ marginTop: 1, marginBottom: 0, padding: 0.5, boxSizing: 'border-box' }}
            >
              <ListItemIcon
                sx={{
                  marginLeft: 1,
                  marginRight: 0.5,
                }}
              >
                {/* memeber면 없애기 */}
                <IconButton
                  edge="start"
                  aria-label="remove"
                  onClick={() => handleOpenDelModal(Participant)}
                  sx={{
                    margin: 0,
                    boxSizing: 'border-box',
                  }}
                >
                  <RemoveCircleIcon
                    sx={{
                      margin: 0,
                      width: 27,
                      height: 27,
                      color: PICKLE_COLOR.pointOrange,
                    }}
                  />
                  {/* 본인이 memebr면 아무것도 안보임*/}
                  {/* <StyledIconButton sx={{ borderColor: 'transparent', color: 'transparent' }} disabled></StyledIconButton> */}
                </IconButton>
              </ListItemIcon>
              <ListItemAvatar>
                <Avatar
                  alt="participant"
                  src={Participant.participantImage}
                  sx={{
                    width: 36,
                    height: 36,
                    border: `1px solid ${PICKLE_COLOR.lightGray}`,
                    boxShadow: `0px 3px 7px ${PICKLE_COLOR.lightGray} `,
                  }}
                />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                      fontWeight={Participant.participantAuthority === 'OWNER' ? 600 : 400}
                      sx={{ marginRight: '8px', width: 130, fontSize: 18, display: 'flex' }}
                    >
                      {Participant.participantAuthority === 'OWNER' && (
                        <Box sx={{ marginRight: 1, height: 16 }}>
                          <img src={Crown} alt="OWNER" sx={{ width: 21, height: 16 }} />
                        </Box>
                      )}
                      {Participant.participantName}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: 15,
                        color: '#858585',
                      }}
                    >
                      {Participant.participantEmail}
                    </Typography>
                  </Box>
                }
              />
              <ListItemSecondaryAction>
                {Participant.participantAuthority !== 'OWNER' && (
                  <FormControl variant="outlined" sx={{ width: 120, height: 28, marginBottom: 2 }}>
                    <Select
                      value={authority[Participant.participantId]}
                      onChange={(e) => handleAuthorityChange(e, Participant.participantId)}
                      displayEmpty
                      IconComponent={ArrowDropDownIcon}
                      sx={{
                        borderRadius: 999,
                        height: 28,
                        border: `1.5px solid ${PICKLE_COLOR.pointOrange}`, // 오렌지 색상
                        padding: '4px 10px',
                        '& .MuiSelect-icon': {
                          color: '#000',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                        '& .MuiSelect-select': {
                          paddingRight: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          fontWeight: 500,
                        },
                      }}
                    >
                      <MenuItem value="admin">admin</MenuItem>
                      <MenuItem value="member">member</MenuItem>
                    </Select>
                  </FormControl>
                )}
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
      <ParticipantDelModal
        open={openDelModal}
        handleClose={handleCloseDelModal}
        participant={selectedParticipant}
        groupId={props.groupId}
      />
      <ParticipantAddModal open={isAddModalOpen} onClose={handleCloseAddModal} groupId={props.groupId} />
    </Box>
  );
};
export default GroupParticipants;
