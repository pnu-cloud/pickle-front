import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { PICKLE_COLOR } from 'constants/pickleTheme';

const ProjectDomainAddress = (props) => {
  const url = props.projectDefaultDomain;
  const handleIconClick = () => {
    window.location.href = url;
  };
  const handleTextClick = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copied to clipboard!');
    });
  };
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconButton onClick={handleIconClick} sx={{ width: 27, height: 27 }}>
        <LinkIcon sx={{ color: PICKLE_COLOR.pointOrange, fontSize: 35 }} />
      </IconButton>
      <Box
        sx={{
          alignItems: 'center',
          textAlign: 'center',

          width: 415,
          height: 42,
          padding: '5px',

          border: '1px solid #BFBFBF',
          borderRadius: '999px',
        }}
      >
        <Typography
          sx={{
            marginLeft: '8px',
            cursor: 'pointer',
            flexGrow: 1,

            fontWeight: 500,
            fontSize: 20,

            alignItems: ' center',
            textAlign: 'center',
          }}
          onClick={handleTextClick}
        >
          {url}
        </Typography>
      </Box>
    </Stack>
  );
};

export default ProjectDomainAddress;
