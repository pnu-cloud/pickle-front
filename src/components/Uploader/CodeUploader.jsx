import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { Box, Typography, Button, Stack } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import FileUploadList from './FileUploadList';

const MAX_FILE_COUNT = 1;

const CodeUploader = ({ existingFiles = [], setExistingFiles, files = [], setFiles, setFileIdsToDelete }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const debouncedOnDrop = useCallback(
    debounce((acceptedFiles) => {
      if (files.length + acceptedFiles.length > MAX_FILE_COUNT) {
        alert(`You can only upload up to ${MAX_FILE_COUNT} file.`);
        return;
      }

      console.log('Accepted Files:', acceptedFiles); // 파일이 제대로 들어오는지 확인

      // 여기서 FE, BE, DB, ETC로 나누지 않고 하나의 배열에 추가
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
      console.log('Accepted Files:', acceptedFiles);
    }, 300),
    [files, setFiles],
  );

  const onDropRejected = (rejectedFiles) => {
    if (rejectedFiles.length > MAX_FILE_COUNT) {
      alert("You can't upload more than 1 file.");
    } else {
      alert('You uploaded file(s) with wrong extension.');
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/zip': ['.zip'],
      'application/x-rar-compressed': ['.rar'],
      'application/x-tar': ['.tar'],
      'application/gzip': ['.gz'],
    },
    onDrop: debouncedOnDrop,
    onDropRejected,
    maxFiles: MAX_FILE_COUNT,
    noClick: true,
    noKeyboard: true,
  });

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      debouncedOnDrop(files);
    }
  };

  const handleDeleteUploadFileClick = (fileName, fileId) => {
    if (fileId && setFileIdsToDelete && setExistingFiles) {
      setFileIdsToDelete((prevFileIds) => [...prevFileIds, fileId]);
      setExistingFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    }
  };

  const hasFiles = existingFiles.length + files.length > 0;

  useEffect(() => {
    return () => {
      debouncedOnDrop.cancel();
    };
  }, [debouncedOnDrop]);

  return (
    <>
      <Box
        {...getRootProps()}
        className="flex items-center justify-center text-center h-[200px]"
        sx={{
          border: `2px dashed ${PICKLE_COLOR.middleGray}`,
          borderRadius: '10px',
        }}
      >
        <Stack className="w-[90%] flex flex-col justify-around gap-2">
          <div className="h-[50%] content-center">
            <CloudUploadOutlinedIcon />
            <Typography sx={{ fontSize: '15px' }}>
              {isDragActive ? (
                <>
                  Drop the <b>"Code File"</b> here
                </>
              ) : (
                <>
                  Drag and Drop <b>"Code File"</b> here
                </>
              )}
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
            <input ref={fileInputRef} type="file" onChange={handleChange} style={{ display: 'none' }} />
          </div>
        </Stack>
      </Box>
      {hasFiles && (
        <Box>
          <FileUploadList files={[...existingFiles, ...files]} onDeleteButtonClick={handleDeleteUploadFileClick} />
        </Box>
      )}
    </>
  );
};

CodeUploader.propTypes = {
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

export default CodeUploader;
