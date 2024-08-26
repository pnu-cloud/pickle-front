import * as React from 'react';
import { Box, Card, CardContent, Typography, Button, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import StyledIconButton from './StyledIconButton';
import { PICKLE_COLOR } from 'constants/pickleTheme';
const GroupInfo = (props) => {
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
          <StyledIconButton variant="outlined" aria-label="edit">
            <EditIcon sx={{ width: 18, height: 18 }} />
            <Typography sx={{ fontWeight: 500, fontSize: 15, marginLeft: 1 }}> edit</Typography>
          </StyledIconButton>
        </Box>
        <Box mt={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar
            src={props.groupProfileImage}
            sx={{
              width: 72,
              height: 72,
              margin: '0 auto',
              border: `1px solid ${PICKLE_COLOR.middleGray}`,
              boxShadow: `0px 4px 10px 2px ${PICKLE_COLOR.lightGray}`,
            }}
          />
          <Typography sx={{ marginTop: 1, fontWeight: 600, fontSize: 28 }}>{props.groupName}</Typography>
          <Typography sx={{ marginTop: 1, fontWeight: 300, fontSize: 15, width: 230, textAlign: 'center' }}>
            {props.groupDescription}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default GroupInfo;
