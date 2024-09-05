import React, { useState } from 'react';
import CodeUploader from './CodeUploader';

import { styled } from '@mui/material/styles';
import { Box, Stack, TextField, Button, Typography, Checkbox } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

const CodeManager = () => {
  const [existingFiles, setExistingFiles] = useState([]);
  const [filesToAdd, setFilesToAdd] = useState([]);
  const [fileIdsToDelete, setFileIdsToDelete] = useState([]);

  const [keyValuePairs, setKeyValuePairs] = useState([{ key: '', value: '' }]);

  const handleAddValueClick = () => {
    setKeyValuePairs((prevPairs) => [...prevPairs, { key: '', value: '' }]);
  };

  const handleKeyChange = (index, newKey) => {
    const newKeyValuePairs = [...keyValuePairs];
    newKeyValuePairs[index].key = newKey;
    setKeyValuePairs(newKeyValuePairs);
  };

  const handleValueChange = (index, newValue) => {
    const newKeyValuePairs = [...keyValuePairs];
    newKeyValuePairs[index].value = newValue;
    setKeyValuePairs(newKeyValuePairs);
  };

  const StyledTextField = styled(TextField)(() => ({
    '& .MuiInputBase-root': {
      height: '35px',
      fontSize: '15px',
      borderRadius: '9999px',
    },
  }));
  return (
    <Box
      className="flex flex-col items-center w-full h-[600px] gap-3 py-3 mt-10"
      sx={{ border: `1px solid ${PICKLE_COLOR.middleGray}`, borderRadius: '10px' }}
    >
      <div
        className="w-[40%] h-[35px] text-center content-center"
        style={{ border: `1px solid ${PICKLE_COLOR.middleGray}`, borderRadius: '9999px' }}
      >
        <Typography>Front end_react.js1</Typography>
      </div>
      <Box className="flex flex-col content-start w-[90%] h-full gap-5">
        <CodeUploader
          existingFiles={existingFiles}
          setExistingFiles={setExistingFiles}
          files={filesToAdd}
          setFiles={setFilesToAdd}
          setFileIdsToDelete={setFileIdsToDelete}
        />
        <Stack direction="row" className="items-center gap-3">
          <StyledTextField placeholder="Domain"></StyledTextField>
          <Typography>example.pnu.app</Typography>
          <Box sx={{ marginLeft: 'auto' }}>
            <label>
              <Checkbox />
              ENV
            </label>
          </Box>
        </Stack>
        <Box className="flex flex-col gap-3">
          {keyValuePairs.map((pair, index) => (
            <Stack key={index} direction="row" className="items-center justify-between">
              <StyledTextField
                placeholder="key name"
                className="w-[45%]"
                value={pair.key}
                onChange={(e) => handleKeyChange(index, e.target.value)}
              />
              <b>:</b>
              <StyledTextField
                placeholder="value"
                className="w-[45%]"
                value={pair.value}
                onChange={(e) => handleValueChange(index, e.target.value)}
              />
              <RemoveCircleOutlineOutlinedIcon sx={{ color: PICKLE_COLOR.pointOrange }} />
            </Stack>
          ))}
          <Button
            variant="contained"
            className="w-[150px] h-[40px]"
            sx={{ color: 'white', borderRadius: '9999px' }}
            startIcon={<AddOutlinedIcon />}
            onClick={handleAddValueClick}
          >
            Add Value
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CodeManager;
