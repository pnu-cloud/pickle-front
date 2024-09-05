import React, { useState, useEffect } from 'react';
import { StyledTypography, StyledTextField } from './Deploy';

import CodeBox from 'components/Input/CodeBox';
import CodeUploader from 'components/Uploader/CodeManager';

import { Box, Typography, Stack, Button, IconButton, TableContainer, Table, TableCell, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import { PICKLE_COLOR } from 'constants/pickleTheme';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Deploy2 = () => {

  const [selectedTemplate, setSelectedTemplate] = useState({
    FE: null,
    BE: null,
    DB: null,
    ETC: null,
  });



  const handleSelectionChange = (newSelection) => {
    setSelectedTemplate(newSelection);
  };



  return (
    <Box
      sx={{
        borderRadius: '20px',
        border: `1px solid ${PICKLE_COLOR.middleGray}`,
        padding: '2% 5%',
      }}
    >
      <div className="h-[18%] flex flex-col gap-2">
        <Typography sx={{ fontSize: '30px' }}>Make Project</Typography>
        <Stack className="gap-1">
          <Typography sx={{ fontSize: '15px', fontWeight: '600', color: PICKLE_COLOR.pointOrange }}>Step 2.</Typography>
          <Stack direction="row" gap={2}>
            <div
              className="bg-lightGray w-[80px] h-[3px]"
              style={{
                borderRadius: '9999px',
              }}
            />
            <div
              className="bg-pointOrange w-[80px] h-[3px]"
              style={{
                borderRadius: '9999px',
              }}
            />
          </Stack>
        </Stack>
      </div>
      <Box className="flex flex-col h-[80%] full w- gap-7">

        <Box className="flex flex-col">
          <Stack direction="column" className="flex gap-2 text-left">
            <Stack direction="row" gap={4} className="items-end">
              <StyledTypography>Container</StyledTypography>
              <Typography fontWeight={400} fontSize={14} color={PICKLE_COLOR.middleGray}>
                Click one of them for deploy your project.
              </Typography>
            </Stack>
            <CodeBox onSelectionChange={handleSelectionChange} />
          </Stack>
        </Box>
      </Box>
      {selectedTemplates.FE && <CodeUploader type="FE" template={selectedTemplates.FE} />}
      {selectedTemplates.BE && <CodeUploader type="BE" template={selectedTemplates.BE} />}
      {selectedTemplates.DB && <CodeUploader type="DB" template={selectedTemplates.DB} />}
      {selectedTemplates.ETC && <CodeUploader type="ETC" template={selectedTemplates.ETC} />}
      <Button
        variant="contained"
        className="w-[160px] h-[40px] gap-2"
        sx={{
          color: 'white',
          borderRadius: '9999px',
        }}
        endIcon={<ArrowForwardIcon />}
      >
        Deploy
      </Button>
    </Box>
  );
};

export default Deploy2;
