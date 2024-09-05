import React from 'react';
import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import trashcan from '../../assets/trashcan.svg';
import DelParticipantAPI from 'APIs/DelParticipantAPI';

const ParticipantDelModal = ({ open, handleClose, participant, groupId }) => {
  const handleDelete = (username) => {
    const participantData = {
      groupId: groupId,
      username: username,
    };
    DelParticipantAPI(participantData.groupId, participantData.username)
      .then((data) => {
        console.log(data);
        alert('삭제 성공!');
      })
      .catch((error) => {
        alert(error.message);
        console.error('Error during user deleting:', error);
      });
    handleClose();
    // window.location.reload();
  };
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
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
          <img
            src={trashcan}
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
            sx={{ width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'center' }}
          >
            <Typography id="modal-title" sx={{ fontSize: 24, fontWeight: 600, marginTop: 2 }}>
              You are about to delete a member
            </Typography>
            <Typography id="modal-description" sx={{ marginTop: 3, fontSize: 18, fontWeight: 600, color: '#00000080' }}>
              This will delete {participant?.participantName} from your group. <br /> Are you sure?
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                //width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 7,
                marginBottom: 3,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                onClick={handleClose}
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
                color="error"
                onClick={() => handleDelete(participant?.participantName)}
                sx={{
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
                Delete
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Modal>
  );
};

export default ParticipantDelModal;
