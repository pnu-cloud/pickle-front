import React from 'react';
import { Stack, Button, Box } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import ParticipantNav from './ParticipantNav';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const ParticipantSelect = () => {
  return (
    <Stack gap={1} direction="column" height="100%">
      <Button
        variant="outlined"
        className="h-[45px] text-transform-none"
        sx={{
          border: `1px solid ${PICKLE_COLOR.middleGray}`,
          borderRadius: '10px',
          justifyContent: 'space-between',
          color: PICKLE_COLOR.middleGray,
          '& .MuiSvgIcon-root': {
            color: PICKLE_COLOR.pointOrange,
            fontSize: '25px',
          },
          fontWeight: '400',
        }}
        endIcon={<AddOutlinedIcon />}
      >
        Add participant(s)
      </Button>
      <Box className="h-full" sx={{ border: `1px solid ${PICKLE_COLOR.middleGray}`, borderRadius: '10px' }}></Box>
    </Stack>
  );
};

export default ParticipantSelect;
