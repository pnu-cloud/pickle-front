import React, { useState, useEffect } from 'react';
import useDomainCheck from 'APIs/deployAPI.js';
import { StyledTypography, StyledTextField } from './Deploy';

import CodeBox from 'components/Input/CodeBox';
import CodeUploader from 'components/Uploader/CodeManager';

import { Box, Typography, Stack, Button, IconButton, TableContainer, Table, TableCell, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import { PICKLE_COLOR } from 'constants/pickleTheme';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Deploy2 = () => {
  const [domainName, setDomainName] = useState('');
  const [domainCheckResult, setDomainCheckResult] = useState(null);
  const { mutate: checkDomain, isLoading, isError, isSuccess, data } = deployAPI.useDomainCheck();

  const handleOnChange = (e) => {
    setDomainName(e.target.value);
  };

  const handleCheckDomain = () => {
    checkDomain(domainName, {
      onSuccess: (result) => {
        setDomainCheckResult(result);
      },
      onError: (error) => {
        console.error('Domain check failed:', error);
        setDomainCheckResult(null);
      },
    });
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
        <Stack direction="column" className="flex gap-2 text-left">
          <StyledTypography>Domain</StyledTypography>
          <Stack direction="row" className="w-[70%] flex items-center justify-between">
            <Stack direction="row" gap={1} className="flex items-center w-[70%]">
              <StyledTextField
                value={domainName}
                onChange={handleOnChange}
                sx={{
                  // width: getTextFieldWidth(domainName),
                  width: '50%',
                  transition: 'width 0.2s',
                  '& .MuiInputBase-input': {
                    padding: '15px',
                  },
                }}
                placeholder="Domain"
              ></StyledTextField>
              <StyledTypography sx={{ fontSize: '18px' }}>.pnu.app</StyledTypography>
            </Stack>
            <Button
              variant="contained"
              className="bg-pointOrange"
              sx={{
                borderRadius: '5px',
                color: 'white',
                boxShadow: 'none',
                height: '35px',
                padding: '0px 25px',
                fontWeight: '400',
              }}
              onClick={handleCheckDomain}
            >
              {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Duplicate Check'}
            </Button>
          </Stack>
        </Stack>
        {isSuccess && domainCheckResult && (
          <Stack direction="row" className="w-[70%] flex items-center justify-between">
            <Typography sx={{ fontSize: '16px', color: domainCheckResult.isAvailable ? 'green' : 'red' }}>
              {domainCheckResult.isAvailable ? 'Domain is available' : 'Domain is already taken'}
            </Typography>
          </Stack>
        )}
        {isError && (
          <Stack direction="row" className="w-[70%] flex items-center justify-between">
            <Typography sx={{ fontSize: '16px', color: 'red' }}>Error checking domain. Please try again.</Typography>
          </Stack>
        )}
        <Box className="flex flex-col">
          <Stack direction="column" className="flex gap-2 text-left">
            <Stack direction="row" gap={4} className="items-end">
              <StyledTypography>Container</StyledTypography>
              <Typography fontWeight={400} fontSize={14} color={PICKLE_COLOR.middleGray}>
                Click one of them for deploy your project.
              </Typography>
            </Stack>
            <CodeBox />
          </Stack>
        </Box>
      </Box>
      <CodeUploader />
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
