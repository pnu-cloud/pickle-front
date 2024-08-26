import React from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { PICKLE_COLOR } from 'constants/pickleTheme';
const DashedButtonBox = styled(Box)({
  border: `3px dashed ${PICKLE_COLOR.pointOrange}`,
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 323,
  height: 167,
  margin: '0 auto',
});

const CustomIconButton = styled(IconButton)({
  backgroundColor: PICKLE_COLOR.subOrange,
  color: PICKLE_COLOR.pointOrange,
  width: 57,
  height: 57,
  '&:hover': {
    backgroundColor: PICKLE_COLOR.pointOrange,
    color: 'white',
  },
});

const GroupPayment = () => {
  return (
    <Stack direction="row">
      <Box
        sx={{
          width: 795,
          height: 269,
          borderRadius: '10px',
          border: `1px solid ${PICKLE_COLOR.middleGray}`,
          boxSizing: 'border-box',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <DashedButtonBox>
          <CustomIconButton>
            <AddIcon sx={{ fontSize: 35 }} />
          </CustomIconButton>
        </DashedButtonBox>
      </Box>
      <Box sx={{ width: 358 }}></Box>
    </Stack>
  );
};

export default GroupPayment;
