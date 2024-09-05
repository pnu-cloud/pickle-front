import React, { useState, useEffect } from 'react';
import { Stack, Box, Card, CardContent, Typography, Button, Avatar, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import StyledIconButton from 'components/Group/StyledIconButton';
import { PICKLE_COLOR } from 'constants/pickleTheme';

const GroupInfoM = (props) => {
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
          <StyledIconButton sx={{ borderColor: 'transparent', color: 'transparent' }} disabled></StyledIconButton>
        </Box>
        <Box mt={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar
            alt={groupName}
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default GroupInfoM;
