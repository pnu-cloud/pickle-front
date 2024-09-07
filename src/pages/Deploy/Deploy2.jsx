import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { handleDeploy, useStep2Submit } from 'APIs/deployApi';
import { StyledTypography, StyledTextField } from './Deploy';
import CodeBox from 'components/Input/CodeBox';
import CodeManager from 'components/Uploader/CodeManager';
import { Box, Typography, Stack, Button } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Deploy2 = () => {
  const location = useLocation();
  const [projectId, setProjectId] = useState(null);
  const [domain, setDomain] = useState(null);
  const [projectName, setProjectName] = useState('');
  const [subdomains, setSubdomains] = useState({ FE: '', BE: '', DB: '', ETC: '' });

  useEffect(() => {
    // location.state에서 값이 없으면 localStorage에서 값을 읽음
    const stateProjectId = location.state?.projectId || localStorage.getItem('projectId');
    const stateDomain = location.state?.domain || localStorage.getItem('domain');
    const stateProjectName = location.state?.projectName || localStorage.getItem('projectName');

    if (stateProjectId) setProjectId(stateProjectId);
    if (stateDomain) setDomain(stateDomain);
    if (stateProjectName) setProjectName(stateProjectName);

    // projectId와 domain이 로컬스토리지에 없을 경우 저장
    if (location.state?.projectId && location.state?.domain) {
      localStorage.setItem('projectId', location.state.projectId);
      localStorage.setItem('domain', location.state.domain);
      localStorage.setItem('projectName', location.state.projectName);
    }
  }, [location.state]);



  const handleSubdomainChange = (type) => (value) => {
    setSubdomains((prev) => ({ ...prev, [type]: value }));
  };

  console.log('Project ID:', projectId);
  console.log('Domain:', domain);
  console.log('Project Name:', projectName);

  const [selectedTemplate, setSelectedTemplate] = useState({
    FE: null,
    BE: null,
    DB: null,
    ETC: null,
  });

  const [existingFiles, setExistingFiles] = useState([]);
  const [filesToAdd, setFilesToAdd] = useState([]);
  const [feKeyValuePairs, setFeKeyValuePairs] = useState([{ key: '', value: '' }]);
  const [beKeyValuePairs, setBeKeyValuePairs] = useState([{ key: '', value: '' }]);
  const [dbKeyValuePairs, setDbKeyValuePairs] = useState([{ key: '', value: '' }]);
  const [etcKeyValuePairs, setEtcKeyValuePairs] = useState([{ key: '', value: '' }]);

  const [feFiles, setFeFiles] = useState([]);
  const [beFiles, setBeFiles] = useState([]);
  const [dbFiles, setDbFiles] = useState([]);
  const [etcFiles, setEtcFiles] = useState([]);

  console.log('Files to Add in Deploy2:', filesToAdd);

  const handleSelectionChange = (newSelection) => {
    console.log('Template Selected:', newSelection);
    setSelectedTemplate(newSelection);
  };

  const getTemplateTitle = (type) => {
    if (type === 'FE' && selectedTemplate.FE) {
      return `Frontend - ${selectedTemplate.FE}`;
    }
    if (type === 'BE' && selectedTemplate.BE) {
      return `Backend - ${selectedTemplate.BE}`;
    }
    if (type === 'DB' && selectedTemplate.DB) {
      return `Database - ${selectedTemplate.DB}`;
    }
    if (type === 'ETC' && selectedTemplate.ETC) {
      return `Etc - ${selectedTemplate.ETC}`;
    }
    return 'Code Template';
  };

  const deployProject = async () => {
    if (Object.keys(selectedTemplate).length === 0) {
      alert('Please select a template before deploying.');
      return;
    }

    const templateTitles = {
      FE: getTemplateTitle('FE'),
      BE: getTemplateTitle('BE'),
      DB: getTemplateTitle('DB'),
      ETC: getTemplateTitle('ETC'),
    };

    const filesToAdd = {
      FE: feFiles,
      BE: beFiles,
      DB: dbFiles,
      ETC: etcFiles,
    };

    const keyValuePairs = {
      FE: feKeyValuePairs,
      BE: beKeyValuePairs,
      DB: dbKeyValuePairs,
      ETC: etcKeyValuePairs,
    };

    console.log('Selected Template:', selectedTemplate);
    console.log('Files to Add:', filesToAdd);
    console.log('Key Value Pairs:', keyValuePairs);

    setTimeout(async () => {
      try {
        await handleDeploy(
          projectId,
          projectName,
          domain,
          templateTitles,

          subdomains,
          filesToAdd,
          keyValuePairs,
        );
        alert('Project deployed successfully!');
      } catch (error) {
        console.error('Error during deployment:', error);
        alert('Failed to deploy the project. Please try again.');
      }
    }, 0);
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
      <Box className="flex flex-col h-[80%] gap-7 mt-10">
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
      {selectedTemplate.FE && (
        <CodeManager
          templateTitle={getTemplateTitle('FE')}
          files={feFiles}
          setFiles={setFeFiles}
          keyValuePairs={feKeyValuePairs}
          setKeyValuePairs={setFeKeyValuePairs}
          onSubdomainChange={handleSubdomainChange('FE')}
          defaultDomain={domain}
        />
      )}
      {selectedTemplate.BE && (
        <CodeManager
          templateTitle={getTemplateTitle('BE')}
          files={beFiles}
          setFiles={setBeFiles}
          keyValuePairs={beKeyValuePairs}
          setKeyValuePairs={setBeKeyValuePairs}
          onSubdomainChange={handleSubdomainChange('BE')}
          defaultDomain={domain}
        />
      )}
      {selectedTemplate.DB && (
        <CodeManager
          templateTitle={getTemplateTitle('DB')}
          files={dbFiles}
          setFiles={setDbFiles}
          keyValuePairs={dbKeyValuePairs}
          setKeyValuePairs={setDbKeyValuePairs}
          onSubdomainChange={handleSubdomainChange('DB')}
          defaultDomain={domain}
        />
      )}
      {selectedTemplate.ETC && (
        <CodeManager
          templateTitle={getTemplateTitle('ETC')}
          files={etcFiles}
          setFiles={setEtcFiles}
          keyValuePairs={etcKeyValuePairs}
          setKeyValuePairs={setEtcKeyValuePairs}
          onSubdomainChange={handleSubdomainChange('ETC')}
          defaultDomain={domain}
        />
      )}
      <div className="flex justify-end w-full text-right">
        <Button
          variant="contained"
          className="w-[160px] h-[40px] gap-2"
          sx={{
            color: 'white',
            borderRadius: '9999px',
            marginTop: 5,
          }}
          endIcon={<ArrowForwardIcon />}
          onClick={deployProject}
        >
          Deploy
        </Button>
      </div>
    </Box>
  );
};

export default Deploy2;
