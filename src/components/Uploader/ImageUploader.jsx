import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import debounce from 'lodash/debounce';
import { Box, Typography, Button, Stack } from '@mui/material';
import FileUploadList from './FileUploadList';

import { PICKLE_COLOR } from 'constants/pickleTheme';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const MAX_FILE_COUNT = 3;

const ImageUploader = ({
  existingFiles = [],
  setExistingFiles,
  files: filesToAdd,
  setFiles: setFilesToAdd,
  setFileIdsToDelete,
}) => {
  // const onDrop = (acceptedFiles) => {
  //   if (filesToAdd.length + acceptedFiles.length > MAX_FILE_COUNT) {
  //     alert(`You can only upload up to ${MAX_FILE_COUNT} files.`);
  //     return;
  //   }

  //   if (setFilesToAdd) {
  //     setFilesToAdd((prevFiles) => [...prevFiles, ...acceptedFiles]);
  //   }
  // };

  const debouncedOnDrop = useCallback(
    debounce((acceptedFiles) => {
      if (filesToAdd.length + acceptedFiles.length > MAX_FILE_COUNT) {
        alert(`You can only upload up to ${MAX_FILE_COUNT} files.`);
        return;
      }
      if (setFilesToAdd) {
        setFilesToAdd((prevFiles) => [...prevFiles, ...acceptedFiles]);
      }
    }, 300),
    [filesToAdd, setFilesToAdd],
  );

  const onDropRejected = (rejectedFiles) => {
    if (rejectedFiles.length > MAX_FILE_COUNT) {
      alert("You can't upload more than 3 files.");
    } else {
      alert('You uploaded file(s) with wrong extension.');
    }
    // rejectedFiles.forEach((file) => {
    //   console.log('Rejected File: ', file);
    // });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.svg', '.webp'],
    },
    onDrop: debouncedOnDrop,
    onDropRejected,
    maxFiles: MAX_FILE_COUNT,
    noClick: true,
    noKeyboard: true,
  });

  const fileInputRef = useRef();

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleDeleteUploadFileClick = (fileName, fileId) => {
    if (fileId && setFileIdsToDelete && setExistingFiles) {
      setFileIdsToDelete((prevFileIds) => [...prevFileIds, fileId]);
      setExistingFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    }
  };

  const hasFiles = existingFiles.length + filesToAdd.length > 0;

  useEffect(() => {
    return () => {
      debouncedOnDrop.cancel();
    };
  }, [debouncedOnDrop]);

  return (
    <Stack direction="row" sx={{ gap: 1, flex: 1, overflow: 'hidden', height: '100%' }}>
      <Box
        {...getRootProps()}
        className="flex items-center justify-center h-full text-center"
        sx={{
          border: `1px dashed ${PICKLE_COLOR.middleGray}`,
          borderRadius: '10px',
          flex: hasFiles ? 0.5 : 1,
        }}
      >
        <Stack className="w-[90%] flex flex-col justify-around gap-2">
          <div className="h-[50%] content-center">
            <CloudUploadOutlinedIcon />
            <Typography sx={{ fontSize: '15px' }}>
              {isDragActive ? 'Drop the file(s) here' : 'Drag and Drop here'}
            </Typography>
          </div>
          <Typography sx={{ height: '20%', fontSize: '15px' }}>or</Typography>
          <div className="h-[30%] content-center">
            <Button
              onClick={handleUploadClick}
              variant="contained"
              className="min-w-[70%] h-[30px] text-transform-none bg-pointOrange"
              style={{
                fontSize: '15px',
                color: 'white',
                boxShadow: 'none',
              }}
            >
              Select file
            </Button>
            <input ref={fileInputRef} {...getInputProps()} style={{ display: 'none' }} />
          </div>
        </Stack>
      </Box>
      {hasFiles && (
        <Box sx={{ flex: 0.5, height: '100%' }}>
          <FileUploadList files={[...existingFiles, ...filesToAdd]} onDeleteButtonClick={handleDeleteUploadFileClick} />
        </Box>
      )}
    </Stack>
  );
};

ImageUploader.propTypes = {
  existingFiles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      fileId: PropTypes.number,
    }),
  ),
  setExistingFiles: PropTypes.func,
  files: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired,
  setFiles: PropTypes.func.isRequired,
  setFileIdsToDelete: PropTypes.func,
};

export default ImageUploader;
