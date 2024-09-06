import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { handleDeploy } from 'APIs/deployApi';
import { StyledTypography, StyledTextField } from './Deploy';
import CodeBox from 'components/Input/CodeBox';
import CodeManager from 'components/Uploader/CodeManager';
import { Box, Typography, Stack, Button } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Deploy2 = () => {
  const location = useLocation();
  const { projectId, domain } = location.state || {};
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

  useEffect(() => {
    const storedSelectedTemplate = localStorage.getItem('selectedTemplate');
    const storedExistingFiles = localStorage.getItem('existingFiles');
    const storedFilesToAdd = localStorage.getItem('filesToAdd');

    if (storedSelectedTemplate) {
      setSelectedTemplate(JSON.parse(storedSelectedTemplate));
    }
    if (storedExistingFiles) {
      setExistingFiles(JSON.parse(storedExistingFiles));
    }
    if (storedFilesToAdd) {
      setFilesToAdd(JSON.parse(storedFilesToAdd));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedTemplate', JSON.stringify(selectedTemplate));
    localStorage.setItem('existingFiles', JSON.stringify(existingFiles));
    localStorage.setItem('filesToAdd', JSON.stringify(filesToAdd));
  }, [selectedTemplate, existingFiles, filesToAdd]);

  const handleSelectionChange = (newSelection) => {
    setSelectedTemplate(newSelection);
  };

  const getTemplateTitle = (type) => {
    if (type === 'FE' && selectedTemplate.FE) return `Frontend - ${selectedTemplate.FE}`;
    if (type === 'BE' && selectedTemplate.BE) return `Backend - ${selectedTemplate.BE}`;
    if (type === 'DB' && selectedTemplate.DB) return `Database - ${selectedTemplate.DB}`;
    if (type === 'ETC' && selectedTemplate.ETC) return `Etc - ${selectedTemplate.ETC}`;
    return 'Code Template';
  };

  const deployProject = () => {
    const keyValuePairs = {
      FE: feKeyValuePairs,
      BE: beKeyValuePairs,
      DB: dbKeyValuePairs,
      ETC: etcKeyValuePairs,
    };
    handleDeploy(selectedTemplate, filesToAdd, keyValuePairs);
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
          existingFiles={existingFiles}
          setExistingFiles={setExistingFiles}
          files={filesToAdd}
          setFiles={setFilesToAdd}
          keyValuePairs={feKeyValuePairs}
          setKeyValuePairs={setFeKeyValuePairs}
          defaultDomain={domain}
        />
      )}
      {selectedTemplate.BE && (
        <CodeManager
          templateTitle={getTemplateTitle('BE')}
          existingFiles={existingFiles}
          setExistingFiles={setExistingFiles}
          files={filesToAdd}
          setFiles={setFilesToAdd}
          keyValuePairs={beKeyValuePairs}
          setKeyValuePairs={setBeKeyValuePairs}
          defaultDomain={domain}
        />
      )}
      {selectedTemplate.DB && (
        <CodeManager
          templateTitle={getTemplateTitle('DB')}
          existingFiles={existingFiles}
          setExistingFiles={setExistingFiles}
          files={filesToAdd}
          setFiles={setFilesToAdd}
          keyValuePairs={dbKeyValuePairs}
          setKeyValuePairs={setDbKeyValuePairs}
          defaultDomain={domain}
        />
      )}
      {selectedTemplate.ETC && (
        <CodeManager
          templateTitle={getTemplateTitle('ETC')}
          existingFiles={existingFiles}
          setExistingFiles={setExistingFiles}
          files={filesToAdd}
          setFiles={setFilesToAdd}
          keyValuePairs={etcKeyValuePairs}
          setKeyValuePairs={setEtcKeyValuePairs}
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
