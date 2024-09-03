import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, Box, Typography, Stack, Button } from '@mui/material';
import ImageUploader from 'components/Uploader/ImageUploader';
import ParticipantSelect from 'components/Navigation/ParticipantSelect';

import { styled } from '@mui/material/styles';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import backgroundFrame from './assets/backgroundFrame.svg';

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
  const [projectExplain, setProjectExplain] = useState('');

  const [existingFiles, setExistingFiles] = useState([]);
  const [filesToAdd, setFilesToAdd] = useState([]);
  const [fileIdsToDelete, setFileIdsToDelete] = useState([]);

  const isFormValid = () => {
    return projectName.trim() !== '' && projectIntro.trim() !== '' && projectExplain.trim() !== '';
  };

  const handleSubmit = async () => {
    const projectData = {
      projectName,
      projectIntro,
      projectExplain,
    };
    try {
      const response = await axios.post('/api/submit', projectData, {
        headers: {
          'Content-Type': 'application/json',
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
        <div className="h-[18%] flex flex-col gap-2">
          <Typography sx={{ fontSize: '30px' }}>Make Project</Typography>
          <Stack gap={1}>
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
            <StyledTypography>Project Explain</StyledTypography>
            <TextField
              placeholder="Project Explain"
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
              value={projectExplain}
              onChange={(e) => setProjectExplain(e.target.value)}
            ></TextField>
          </StyledStack>
          <Stack gap={1} paddingTop={4}>
            <StyledTypography>Participants</StyledTypography>
            <ParticipantSelect />
          </Stack>
        </Box>

        <div className="h-[12%] content-end text-right">
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
