import React, { useState, useEffect } from 'react';
import { useDomainCheck, useGroupQuery, useStep1Submit } from '../../APIs/deployApi.js';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { TextField, Box, Typography, Stack, Button, CircularProgress } from '@mui/material';
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
  const { mutate: checkDomain } = useDomainCheck();
  const [projectName, setProjectName] = useState('');
  const [projectIntro, setProjectIntro] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [domainName, setDomainName] = useState('');
  const [domainCheckResult, setDomainCheckResult] = useState(null);
  const [domainLoading, setDomainLoading] = useState(false);
  const [domainError, setDomainError] = useState(false);
  const [existingFiles, setExistingFiles] = useState([]);
  const [filesToAdd, setFilesToAdd] = useState([]);
  const [fileIdsToDelete, setFileIdsToDelete] = useState([]);
  const [blobUrls, setBlobUrls] = useState([]);
  const [defaultDomain, setDefaultDomain] = useState('');
  const [loading, setLoading] = useState('');

  const isFormValid = () => {
    return (
      projectName.trim() !== '' &&
      projectIntro.trim() !== '' &&
      projectDescription.trim() !== '' &&
      domainName.trim() !== '' &&
      (existingFiles.length > 0 || filesToAdd.length > 0) &&
      domainCheckResult?.isAvailable === true
    );
  };

  const { groupId } = useParams();
  const navigate = useNavigate();
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
    setInputValue(e.target.value);
  };

  const handleCheckDomain = () => {
    if (!inputValue.trim()) {
      alert('Please enter a domain name.');
      return;
    }

    setDomainName(inputValue);
    setDomainLoading(true);

    checkDomain(inputValue, {
      onSuccess: (result) => {
        const isDomainTaken = result.data;
        const message = result.message;

        if (!isDomainTaken) {
          setDomainCheckResult({ isAvailable: true, message });
        } else {
          setDomainCheckResult({ isAvailable: false, message });
        }

        setDomainLoading(false);
      },
      onError: (error) => {
        console.error('Error checking domain:', error);
        setDomainCheckResult({ isAvailable: false, message: 'Error occurred while checking domain.' });
        setDomainLoading(false);
        setDomainError(true);
      },
    });
  };

  const handleSubmit = async () => {
    if (!projectName.trim()) {
      alert('Please enter the Project Name.');
      return;
    }
    if (!projectIntro.trim()) {
      alert('Please enter the Project Intro.');
      return;
    }
    if (!projectDescription.trim()) {
      alert('Please enter the Project Description.');
      return;
    }
    if (!domainName.trim()) {
      alert('Please enter the Domain Name.');
      return;
    }
    if (domainCheckResult?.isAvailable === false) {
      alert('Domain Name is already taken. Please choose a different one.');
      return;
    }
    if (existingFiles.length === 0 && filesToAdd.length === 0) {
      alert('Please upload at least one image.');
      return;
    }

    setLoading(true);

    try {
      const response = await useStep1Submit(
        groupId,
        domainName,
        projectName,
        projectIntro,
        projectDescription,
        filesToAdd,
      );
      const { projectId, domain } = response.data.data;

      localStorage.setItem('projectId', projectId);
      localStorage.setItem('domain', domain);
      localStorage.setItem('projectName', projectName);

      setDefaultDomain(domain);

      navigate(`/group/${groupId}/deploy-step2`, { state: { projectId, domain, projectName } });
    } catch (error) {
      console.error('Error submitting project:', error);
    } finally {
      setLoading(false);
    }
  };
  /*
  const handleFileUpload = (newFiles) => {
    const newBlobUrls = newFiles.map((file) => URL.createObjectURL(file));
    setBlobUrls((prevBlobUrls) => [...prevBlobUrls, ...newBlobUrls]);
    setFilesToAdd((prevFiles) => [...prevFiles, ...newFiles]);
  };*/

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
              <StyledTypography>Domain Name</StyledTypography>
              <Stack direction="row" className="flex items-start justify-between w-full">
                <Stack direction="row" gap={1} className="flex items-start w-[70%]">
                  <StyledTextField
                    value={inputValue}
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
                      '& .MuiFormHelperText-root': {
                        margin: 0,
                        minHeight: '20px',
                        lineHeight: '20px',
                      },
                    }}
                    placeholder="Domain Name"
                    disabled={domainCheckResult?.isAvailable}
                    helperText={
                      domainCheckResult
                        ? domainCheckResult.isAvailable
                          ? domainCheckResult.message
                          : domainCheckResult.message
                        : ''
                    }
                  />
                  <StyledTypography
                    sx={{
                      fontSize: '13px',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    .pnu.app
                  </StyledTypography>
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
                  disabled={domainLoading || !inputValue.trim() || domainCheckResult?.isAvailable}
                >
                  {domainLoading ? <CircularProgress size={24} color="inherit" /> : 'Duplicate Check'}
                </Button>
              </Stack>
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
            />
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
            />
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
            />
          </StyledStack>
          <Stack gap={1} paddingTop={4}>
            <StyledTypography>Participants</StyledTypography>
            <ParticipantSelect participants={participantsData} />
          </Stack>
        </Box>

        <div className="h-[10%] content-end text-right">
          <Button
            component={Link}
            to={`/group/${groupId}/deploy-step2`}
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
