import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo_white.svg';
import { Box, alpha, IconButton, Stack } from '@mui/material';
import { PICKLE_COLOR, PICKLE_HEIGHT } from 'constants/pickleTheme';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: alpha(PICKLE_COLOR.pointOrange, 0.7),
        height: PICKLE_HEIGHT.footer,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '80%', height: PICKLE_HEIGHT.footer }}>
        <div style={{ height: '50%' }}>
          <Link to="/">
            <Logo style={{ marginTop: '4rem' }} />
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <span style={{ color: PICKLE_COLOR.subOrange, fontSize: '18px', width: '70%' }}>
            © 2024 PNU CLOUD. All Rights Reserved.
          </span>
          <Stack direction="row" sx={{ width: '30%', display: 'flex', justifyContent: 'end', gap: 1 }}>
            <IconButton component={Link} to="https://github.com/pnu-cloud/" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{ fontSize: '45px', color: PICKLE_COLOR.pointOrange }} />
            </IconButton>
            <IconButton
              component={Link}
              to="https://cse.pusan.ac.kr/cse/index.do"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon
                sx={{
                  fontSize: '45px',
                  color: PICKLE_COLOR.pointOrange,
                }}
              />
            </IconButton>
          </Stack>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
