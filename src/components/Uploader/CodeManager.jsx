import React from 'react';
import { styled } from '@mui/material/styles';

import { Box, Stack, TextField, Button, Typography, Checkbox } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const CodeUploader = () => {
  const StyledTextField = styled(TextField)(() => ({
    border: `1px solid ${PICKLE_COLOR.middleGray}`,
    '& .MuiInputBase-root': {
      height: '35px',
      fontSize: '15px',
      borderRadius: '9999px',
    },
  }));
  return (
    <Box
      className="flex flex-col items-center w-full h-[500px]"
      sx={{ border: '1px solid black', borderRadius: '10px' }}
    >
      <div
        className="w-[40%] h-[35px] text-center content-center"
        style={{ border: `1px solid ${PICKLE_COLOR.middleGray}`, borderRadius: '9999px' }}
      >
        <Typography>Front end_react.js1</Typography>
      </div>
      <Box className="flex flex-col justify-center w-[90%] h-full" sx={{ border: '1px solid black' }}>
        <Box className="w-full h-[250px]" sx={{ border: '1px solid black' }}></Box>
        <Stack direction="row" className="items-center">
          <StyledTextField placeholder="Domain"></StyledTextField>
          <Typography>example.pnu.app</Typography>
          <label>
            <Checkbox />
            ENV
          </label>
        </Stack>
        <Box className="flex flex-col">
          <Stack direction="row" className="items-center justify-between">
            <StyledTextField placeholder="key name" className="w-[47%]" />
            <b>:</b>
            <StyledTextField placeholder="value" className="w-[47%]" />
          </Stack>
          <Button
            variant="contained"
            className="w-[150px] h-[40px]"
            sx={{ color: 'white', borderRadius: '9999px' }}
            startIcon={<AddOutlinedIcon />}
          >
            Add Value
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CodeUploader;
