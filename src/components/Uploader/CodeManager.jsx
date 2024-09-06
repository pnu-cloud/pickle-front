import React, { useState, useEffect } from 'react';
import CodeUploader from './CodeUploader';
import { styled } from '@mui/material/styles';
import { Box, Stack, TextField, Button, Typography, Checkbox } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

// StyledTextField for consistent styling
const StyledTextField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    height: '35px',
    fontSize: '15px',
    borderRadius: '9999px',
  },
}));

const CodeManager = ({
  templateTitle,
  existingFiles,
  setExistingFiles,
  explain,
  filesToAdd,
  setFilesToAdd,
  keyValuePairs,
  setKeyValuePairs,
  defaultDomain,
  selectedTemplate,
}) => {
  const [fileIdsToDelete, setFileIdsToDelete] = useState([]);
  const [subdomain, setSubdomain] = useState('');
  const [envVarsEnabled, setEnvVarsEnabled] = useState(false);

  // useEffect(() => {
  //   if (defaultDomain) {
  //     setSubdomain(defaultDomain);
  //   }
  // }, [defaultDomain]);

  const handleSubdomainChange = (e) => {
    setSubdomain(e.target.value);
  };

  const handleAddValueClick = () => {
    setKeyValuePairs((prevPairs) => [...prevPairs, { key: '', value: '' }]);
  };

  const handleKeyValueChange = (index, field, value) => {
    const newKeyValuePairs = [...keyValuePairs];
    newKeyValuePairs[index][field] = value;
    setKeyValuePairs(newKeyValuePairs);
  };

  return (
    <Box
      className="flex flex-col items-center w-full gap-3 py-4 mt-10"
      sx={{ border: `1px solid ${PICKLE_COLOR.middleGray}`, borderRadius: '10px' }}
    >
      <div
        className="w-[40%] h-[35px] text-center content-center"
        style={{ border: `1px solid ${PICKLE_COLOR.middleGray}`, borderRadius: '9999px' }}
      >
        <Typography>{templateTitle || 'Select a template'}</Typography>
      </div>
      <Typography>{explain}</Typography>
      <Box className="flex flex-col content-start w-[90%] h-full gap-5">
        <CodeUploader
          existingFiles={existingFiles}
          setExistingFiles={setExistingFiles}
          files={filesToAdd}
          setFiles={setFilesToAdd}
          setFileIdsToDelete={setFileIdsToDelete}
        />
        <Stack direction="row" className="items-center gap-3">
          <StyledTextField
            placeholder="Subdomain"
            value={subdomain}
            onChange={handleSubdomainChange}
            onFocus={(e) => e.target.select()}
          />
          <Typography fontWeight={600}>{defaultDomain ? `.${defaultDomain}` : 'No Domain Available'}</Typography>
          <Box sx={{ marginLeft: 'auto' }}>
            <label>
              <Checkbox checked={envVarsEnabled} onChange={() => setEnvVarsEnabled(!envVarsEnabled)} />
              ENV
            </label>
          </Box>
        </Stack>

        {envVarsEnabled && (
          <Box className="flex flex-col gap-3">
            {keyValuePairs.map((pair, index) => (
              <Stack key={index} direction="row" className="items-center justify-between">
                <StyledTextField
                  placeholder="key name"
                  className="w-[45%]"
                  value={pair.key}
                  onChange={(e) => handleKeyValueChange(index, 'key', e.target.value)}
                  onFocus={(e) => e.target.select()} // Fix for input focus issue
                />
                <b>:</b>
                <StyledTextField
                  placeholder="value"
                  className="w-[45%]"
                  value={pair.value}
                  onChange={(e) => handleKeyValueChange(index, 'value', e.target.value)}
                  onFocus={(e) => e.target.select()} // Fix for input focus issue
                />
                <RemoveCircleOutlineOutlinedIcon
                  sx={{ color: PICKLE_COLOR.pointOrange }}
                  onClick={() => {
                    const newPairs = [...keyValuePairs];
                    newPairs.splice(index, 1);
                    setKeyValuePairs(newPairs);
                  }}
                />
              </Stack>
            ))}
            <Button
              variant="contained"
              className="w-[150px] h-[40px] mt-5"
              sx={{ color: 'white', borderRadius: '9999px' }}
              startIcon={<AddOutlinedIcon />}
              onClick={handleAddValueClick}
            >
              Add Value
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CodeManager;
