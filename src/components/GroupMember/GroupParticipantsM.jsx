import React, { useState } from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import StyledIconButton from 'components/Group/StyledIconButton';
import Crown from '../../assets/crown.svg';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import bluee from 'assets/bluee.svg';

const GroupParticipantsM = (props) => {
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
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', padding: 1, overflow: 'hidden' }}>
        <StyledIconButton sx={{ borderColor: 'transparent', color: 'transparent' }} disabled></StyledIconButton>
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
        <List sx={{ width: 650, height: 240, paddingLeft: 5 }}>
          {props.groupParticipants.map((Participant) => (
            <ListItem
              key={Participant.participantId}
              sx={{
                display: 'flex', // Flexbox로 변환
                justifyContent: 'center', // 수평 가운데 정렬
                alignItems: 'center', // 수직 가운데 정렬
                marginTop: 0,
                marginBottom: 0,
                padding: 0.5,
                boxSizing: 'border-box',
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="participant"
                  src={bluee}
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
                      fontWeight={Participant.participantAuthority !== 'MEMBER' ? 600 : 400}
                      sx={{ marginRight: '8px', width: 130, fontSize: 18, display: 'flex' }}
                    >
                      {Participant.participantAuthority !== 'MEMBER' && (
                        <Box sx={{ marginRight: 1, marginTop: 0.8, height: 16 }}>
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
                        width: 160,
                        marginRight: 1,
                      }}
                    >
                      {Participant.participantEmail}
                    </Typography>

                    <Typography
                      sx={{
                        marginTop: 1.3,
                        borderRadius: 999,
                        height: 28,
                        color: PICKLE_COLOR.darkGray,
                      }}
                    >
                      {Participant.participantAuthority}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
export default GroupParticipantsM;
