import React, { useState, useCallback } from 'react';
import { useDomainCheck, useGroupQuery } from 'APIs/deployApi.js';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, Box, Typography, Stack, Button, Alert } from '@mui/material';
import ImageUploader from 'components/Uploader/ImageUploader';
import ParticipantSelect from 'components/Navigation/ParticipantSelect';

import { styled } from '@mui/material/styles';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledStack = styled(Stack)(({ theme, gridColumn, gridRow }) => ({
  gridColumn: gridColumn || 'span 1',
  gridRow: gridRow || 'auto',
  textAlign: 'left',
  gap: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: '15px',
  fontWeight: '600',
}));

export const StyledTextField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    height: '45px',
    borderRadius: '10px',
  },
}));

const Deploy = () => {
  const [projectName, setProjectName] = useState('');
  const [projectIntro, setProjectIntro] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [domainName, setDomainName] = useState('');
  const [domainCheckResult, setDomainCheckResult] = useState(null);
  const {
    mutate: checkDomain,
    isLoading: domainLoading,
    isError: domainError,
    isSuccess: domainSuccess,
    data: domainData,
  } = useDomainCheck();

  const [existingFiles, setExistingFiles] = useState([]);
  const [filesToAdd, setFilesToAdd] = useState([]);
  const [fileIdsToDelete, setFileIdsToDelete] = useState([]);
  const [hovered, setHovered] = useState(false);

  const isFormValid = () => {
    return (
      projectName.trim() !== '' &&
      projectIntro.trim() !== '' &&
      projectDescription.trim() !== '' &&
      domainName.trim() !== '' &&
      existingFiles.length > 0
    );
  };

  const { groupId } = useParams();
  const {
    data: groupData,
    isLoading: groupLoading,
    isError: groupError,
    error: groupErrorMessage,
  } = useGroupQuery(groupId);

  if (groupLoading) return <p>Loading...</p>;
  if (groupError) return <p>Error: {groupErrorMessage.message}</p>;

  const participantsData = groupData.groupParticipants;

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

  const handleSubmit = async () => {
    if (!isFormValid()) {
      alert('Please fill out all fields and upload at least one image.');
      return;
    }
    const formData = new FormData();
    formData.append('projectName', projectName);
    formData.append('projectIntro', projectIntro);
    formData.append('projectDescription', projectDescription);
    existingFiles.forEach((file, index) => {
      formData.append('projectImages', file);
    });

    try {
      const response = await axios.post('/api/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <Box
      sx={{
        borderRadius: '20px',
        height: '92vh',
        border: `1px solid ${PICKLE_COLOR.middleGray}`,
        padding: '2% 5%',
      }}
    >
      <Box className="w-full h-full">
        <div className="h-[20%] flex flex-col gap-2">
          <Typography sx={{ fontSize: '30px' }}>Make Project</Typography>
          <Stack direction="row" gap={4}>
            <Stack gap={1} sx={{ width: '50%' }}>
              <Typography sx={{ fontSize: '15px', fontWeight: '600', color: PICKLE_COLOR.pointOrange }}>
                Step 1.
              </Typography>
              <Stack direction="row" gap={2}>
                <div
                  className="bg-pointOrange w-[80px] h-[3px]"
                  style={{
                    borderRadius: '9999px',
                  }}
                />
                <div
                  className="bg-lightGray w-[80px] h-[3px]"
                  style={{
                    borderRadius: '9999px',
                  }}
                />
              </Stack>
            </Stack>
            <Stack direction="column" className="flex gap-2 text-left w-[50%]">
              <StyledTypography>Domain</StyledTypography>
              <Stack direction="row" className="flex items-center justify-between w-full">
                <Stack direction="row" gap={1} className="flex items-center w-[70%]">
                  <StyledTextField
                    value={domainName}
                    onChange={handleOnChange}
                    sx={{
                      width: '60%',
                      transition: 'width 0.2s',
                      '& .MuiInputBase-input': {
                        padding: '15px',
                      },
                      '& .MuiInputBase-root': {
                        height: '30px',
                        borderRadius: '10px',
                        fontSize: '12px',
                      },
                    }}
                    placeholder="Domain"
                  ></StyledTextField>
                  <StyledTypography sx={{ fontSize: '13px' }}>.pnu.app</StyledTypography>
                </Stack>
                <Button
                  variant="contained"
                  className="bg-pointOrange"
                  sx={{
                    borderRadius: '5px',
                    color: 'white',
                    boxShadow: 'none',
                    height: '30px',
                    fontWeight: '400',
                    fontSize: '12px',
                    width: '30%',
                  }}
                  onClick={handleCheckDomain}
                >
                  {domainLoading ? <CircularProgress size={24} color="inherit" /> : 'Duplicate Check'}
                </Button>
              </Stack>
            </Stack>
            {domainSuccess && domainCheckResult && (
              <Stack direction="row" className="w-[70%] flex items-center justify-between">
                <Typography sx={{ fontSize: '16px', color: domainCheckResult.isAvailable ? 'green' : 'red' }}>
                  {domainCheckResult.isAvailable ? 'Domain is available' : 'Domain is already taken'}
                </Typography>
              </Stack>
            )}
            {domainError && (
              <Stack direction="row" className="w-[70%] flex items-center justify-between">
                <Typography sx={{ fontSize: '16px', color: 'red' }}>
                  Error checking domain. Please try again.
                </Typography>
              </Stack>
            )}
          </Stack>
        </div>
        <Box
          className="h-[70%] grid"
          sx={{
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: '20% 20% 60%',
            columnGap: 5,
          }}
        >
          <StyledStack>
            <StyledTypography>Project Name</StyledTypography>
            <StyledTextField
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            ></StyledTextField>
          </StyledStack>
          <StyledStack gridRow="span 2">
            <StyledTypography>Preview Image</StyledTypography>
            <ImageUploader
              existingFiles={existingFiles}
              setExistingFiles={setExistingFiles}
              files={filesToAdd}
              setFiles={setFilesToAdd}
              setFileIdsToDelete={setFileIdsToDelete}
            />
          </StyledStack>
          <StyledStack className="self-end">
            <StyledTypography>Project Intro</StyledTypography>
            <StyledTextField
              placeholder="Project Intro"
              value={projectIntro}
              onChange={(e) => setProjectIntro(e.target.value)}
            ></StyledTextField>
          </StyledStack>
          <StyledStack paddingTop={4}>
            <StyledTypography>Project Description</StyledTypography>
            <TextField
              placeholder="Project Description"
              multiline
              inputProps={{ maxLength: 65 }}
              sx={{
                flex: 1,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                },
                '& .MuiInputBase-input': {
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                },
              }}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            ></TextField>
          </StyledStack>
          <Stack gap={1} paddingTop={4}>
            <StyledTypography>Participants</StyledTypography>
            <ParticipantSelect participants={participantsData} />
          </Stack>
        </Box>

        <div className="h-[10%] content-end text-right">
          <Button
            component={Link}
            to="../deploy-step2"
            variant="contained"
            className="text-transform-none w-[180px] h-[40px] gap-2"
            style={{ borderRadius: '9999px', color: 'white' }}
            startIcon={<ArrowForwardIcon />}
            onClick={handleSubmit}
            disabled={!isFormValid()}
          >
            Next Page
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Deploy;
