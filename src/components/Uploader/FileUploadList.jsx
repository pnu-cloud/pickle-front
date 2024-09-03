import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
} from '@mui/material';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { PICKLE_COLOR } from 'constants/pickleTheme';

const FileUploadList = ({ files, onDeleteButtonClick }) => {
  return (
    <TableContainer
      sx={{
        width: '100%',
        height: '100%',
        border: `1px solid ${PICKLE_COLOR.lightGray}`,
        borderRadius: '10px',
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
          width: '7px',
        },
        '&::-webkit-scrollbar-track': {
          background: PICKLE_COLOR.mainWhite,
        },
        '&::-webkit-scrollbar-thumb': {
          background: PICKLE_COLOR.pointOrange,
          borderRadius: '10px',
        },
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              '& td': {
                padding: '0',
              },
              backgroundColor: PICKLE_COLOR.subOrange,
            }}
          >
            <TableCell>File Name</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file) => (
            <TableRow
              key={file.fildId}
              sx={{
                '& td': {
                  padding: '2px 5px',
                },
              }}
            >
              <TableCell>
                <Typography sx={{ fontSize: '12px', textAlign: 'left', marginLeft: '5px' }}>{file.name}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <IconButton onClick={() => onDeleteButtonClick(file.name, file.fileId)}>
                  <RemoveCircleOutlineOutlinedIcon sx={{ fontSize: '15px', color: PICKLE_COLOR.pointOrange }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

FileUploadList.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      fileId: PropTypes.number,
    }),
  ).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default FileUploadList;
