import React, { useState, useEffect } from 'react';
import { Stack, Box, Card, CardContent, Typography, Button, Avatar, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import StyledIconButton from './StyledIconButton';
import { PICKLE_COLOR } from 'constants/pickleTheme';

const GroupInfo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [groupName, setGroupName] = useState(props.groupName);
  const [groupDescription, setGroupDescription] = useState(props.groupDescription);
  const [groupProfileImage, setGroupProfileImage] = useState(props.groupProfileImage);

  // Store original values
  const [originalGroupName, setOriginalGroupName] = useState(props.groupName);
  const [originalGroupDescription, setOriginalGroupDescription] = useState(props.groupDescription);
  const [originalGroupProfileImage, setOriginalGroupProfileImage] = useState(props.groupProfileImage);

  useEffect(() => {
    // Update state when groupId or related props change
    setGroupName(props.groupName);
    setGroupDescription(props.groupDescription);
    setGroupProfileImage(props.groupProfileImage);

    // Also update the original values to reset when canceling
    setOriginalGroupName(props.groupName);
    setOriginalGroupDescription(props.groupDescription);
    setOriginalGroupProfileImage(props.groupProfileImage);
  }, [props.groupId, props.groupName, props.groupDescription, props.groupProfileImage]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Here you can add API call logic to save the changes
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reset the state to original values
    setGroupName(originalGroupName);
    setGroupDescription(originalGroupDescription);
    setGroupProfileImage(originalGroupProfileImage);
  };

  return (
    <Card
      variant="plain"
      sx={{
        width: 358,
        height: 269,
        backgroundColor: 'transparent',
        borderLeft: `1px solid ${PICKLE_COLOR.middleGray}`,
        borderRadius: 0,
        alignItems: 'center',
        padding: 1,
      }}
    >
      <CardContent sx={{ textAlign: 'center', padding: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          {isEditing ? (
            <Box>
              <StyledIconButton onClick={handleCancelClick} sx={{ width: 80 }}>
                cancel
              </StyledIconButton>
              <StyledIconButton
                onClick={handleSaveClick}
                sx={{ width: 80, marginLeft: 1, backgroundColor: PICKLE_COLOR.pointOrange, color: 'white' }}
              >
                save
              </StyledIconButton>
            </Box>
          ) : (
            <StyledIconButton variant="outlined" aria-label="edit" onClick={handleEditClick}>
              <EditIcon sx={{ width: 18, height: 18 }} />
              <Typography sx={{ fontWeight: 500, fontSize: 15, marginLeft: 1 }}> edit</Typography>
            </StyledIconButton>
          )}
        </Box>
        <Box mt={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {isEditing ? (
            <>
              {/* Image Upload Logic Here */}
              <Avatar
                src={groupProfileImage}
                alt={groupName}
                sx={{
                  width: 72,
                  height: 72,
                  margin: '0 auto',
                  border: `1px solid ${PICKLE_COLOR.middleGray}`,
                  boxShadow: `0px 4px 10px 2px ${PICKLE_COLOR.lightGray}`,
                }}
              />
              <TextField
                variant="outlined"
                placeholder="Group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                sx={{
                  marginTop: 2,
                  width: 260,
                  height: 32,
                  color: PICKLE_COLOR.middleGray,
                  padding: 0,

                  '& .MuiOutlinedInput-root': {
                    borderRadius: '5px',
                    backgroundColor: PICKLE_COLOR.lightGray,
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: PICKLE_COLOR.lightGray,
                  },
                }}
                inputProps={{
                  style: {
                    padding: '10px 12px',
                  },
                }}
              />
              <TextField
                variant="outlined"
                placeholder="Group introduction"
                value={groupDescription}
                onChange={(e) => setGroupDescription(e.target.value)}
                sx={{
                  marginTop: 2,
                  width: 260,
                  height: 57,
                  fontWeight: 300,
                  fontSize: 15,
                  padding: 0,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '5px',
                    backgroundColor: PICKLE_COLOR.lightGray,
                    fontWeight: 300,
                    fontSize: 15,
                    height: 57,
                    overflow: 'hidden',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: PICKLE_COLOR.lightGray,
                  },
                }}
                multiline
                rows={2}
              />
            </>
          ) : (
            <>
              <Avatar
                src={groupProfileImage}
                sx={{
                  width: 72,
                  height: 72,
                  margin: '0 auto',
                  border: `1px solid ${PICKLE_COLOR.middleGray}`,
                  boxShadow: `0px 4px 10px 2px ${PICKLE_COLOR.lightGray}`,
                }}
              />
              <Typography sx={{ marginTop: 1, fontWeight: 600, fontSize: 28 }}>{groupName}</Typography>
              <Typography sx={{ marginTop: 1, fontWeight: 300, fontSize: 15, width: 230, textAlign: 'center' }}>
                {groupDescription}
              </Typography>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default GroupInfo;
