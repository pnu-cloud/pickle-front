import React, { useState } from 'react';
import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import AddIcon from '@mui/icons-material/Add';
import CreateGroupAPI from 'APIs/CreateGroupAPI';
import UserAPI from 'APIs/UserApi';
import { useNavigate } from 'react-router-dom';
const GroupCreateModal = ({ open, onClose, createGroupAPI }) => {
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');

  const handleCreate = () => {
    const groupData = {
      groupName: groupName,
      groupDescription: groupDescription,
    };
    CreateGroupAPI(groupData.groupName, groupData.groupDescription)
      .then((data) => {
        console.log(data);
        alert('group created');
      })
      .catch((error) => {
        alert(error.message);
        console.error('Error during sign-in:', error);
      });
    let email_Token = localStorage.getItem('email');
    UserAPI(email_Token);
    // navigate('/');
    onClose(); // 모달 닫기
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
            <Typography id="modal-title" sx={{ fontSize: 24, fontWeight: 600, marginTop: 3 }}>
              Create a New Group
            </Typography>

            <TextField
              label="Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              fullWidth
              sx={{ marginTop: 2, width: '80%', height: '50px' }}
            />

            <TextField
              label="Group Description"
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
              multiline
              rows={2}
              fullWidth
              sx={{ marginTop: 2, width: '80%', height: '50px' }}
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
                onClick={handleCreate}
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
                Create
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Modal>
  );
};

export default GroupCreateModal;
