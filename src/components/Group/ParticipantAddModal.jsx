import React, { useState } from 'react';
import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import AddIcon from '@mui/icons-material/Add';
import AddParticipantAPI from 'APIs/AddParticipantAPI';
import { useNavigate } from 'react-router-dom';

const ParticipantAddModal = ({ open, onClose, groupId }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); // email을 위한 상태
  const handleAddParticipant = () => {
    const participantData = {
      groupId: groupId,
      email: email,
    };
    AddParticipantAPI(participantData.groupId, participantData.email)
      .then((data) => {
        console.log(data);
        alert('초대 성공!');
      })
      .catch((error) => {
        alert(error.message);
        console.error('Error during user adding:', error);
      });
    onClose();
    window.location.reload();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Stack
        sx={{
          margin: '150px auto',
          textAlign: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            borderRadius: '50%',
            width: 88,
            height: 88,
            backgroundColor: PICKLE_COLOR.pointOrange,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute', // Absolute position
            top: '-44px', // Half of the height to position it at the top center of the parent box
            left: '50%',
            transform: 'translateX(-50%)', // Center horizontally
            boxShadow: '0px 4px 6.7px rgba(0, 0, 0, 0.25)',
          }}
        >
          <AddIcon
            sx={{
              width: 60,
              height: 70,
              color: 'white',
            }}
          />
        </Box>
        <Box
          sx={{
            width: 590,
            height: 330,
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: '20px',
            textAlign: 'center',
            boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Stack
            direction="column"
            sx={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', padding: 3 }}
          >
            <Typography id="modal-title" sx={{ fontSize: 24, fontWeight: 600, marginTop: 5 }}>
              Add Participant to Group
            </Typography>

            <TextField
              label="UserEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // email 업데이트
              fullWidth
              sx={{ marginTop: 5, width: '80%', height: '50px' }}
            />

            <Stack
              direction="row"
              spacing={2}
              sx={{
                marginTop: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                onClick={onClose}
                sx={{
                  textTransform: 'none',
                  width: 116,
                  height: 37,
                  fontSize: 18,
                  fontWeight: 600,
                  borderRadius: '10px',
                  background: 'white',
                  boxShadow: 'none',
                  color: PICKLE_COLOR.pointOrange,
                  border: `2px solid ${PICKLE_COLOR.pointOrange}`,
                  '&:hover': {
                    background: 'white',
                    color: PICKLE_COLOR.pointOrange,
                    border: `2px solid ${PICKLE_COLOR.pointOrange}`,
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleAddParticipant}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  width: 116,
                  height: 37,
                  fontSize: 18,
                  fontWeight: 600,
                  borderRadius: '10px',
                  background: PICKLE_COLOR.pointOrange,
                  boxShadow: 'none',
                }}
              >
                Add
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Modal>
  );
};

export default ParticipantAddModal;
