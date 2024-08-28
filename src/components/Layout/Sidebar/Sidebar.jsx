import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Button, Drawer, IconButton, Typography, Toolbar, Box } from '@mui/material';
import { PICKLE_COLOR, PICKLE_WIDTH, PICKLE_HEIGHT } from 'constants/pickleTheme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import axios from 'axios';
import groupInfo from 'api/groupInfo';
import Friends from 'assets/friends.svg';
import GroupNav from 'components/Navigation/GroupNav';
import { Group } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        '& .MuiDrawer-paper': {
          width: PICKLE_WIDTH.sidebar,
          height: '100vh',
          boxShadow: '3px 0px 15px 0px #0000001A',
          border: 'none',
          alignItems: 'center',
          display: 'flex',
          position: 'sticky',
        },
      }}
      className="h-sidebar w-sidebar"
      variant="permanent"
      anchor="left"
    >
      <Link to="/">
        <Logo className="my-7 h-14 sm:h-15" />
      </Link>

      <Box className="flex w-[80%] mt-3">
        <Button
          href="./GalleryBox"
          className="flex items-center w-full gap-2 transition-all duration-300 hover:w-full"
          sx={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <HomeOutlinedIcon sx={{ color: 'black' }} />
          <Typography className="text-middle" sx={{ ml: 1, color: 'black', textTransform: 'none' }}>
            Gallery
          </Typography>
        </Button>
      </Box>
      <Toolbar />
      <Box className="flex w-[80%] mb-4">
        <Button
          href="{설정필요}"
          className="flex items-center w-full transition-all duration-300 hover:w-full"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography className="text-middle" sx={{ ml: 1, color: 'black', textTransform: 'none' }}>
            Groups
          </Typography>
          <AddOutlinedIcon sx={{ color: PICKLE_COLOR.pointOrange }} />
        </Button>
      </Box>
      <Box className="flex flex-col w-[80%]">
        {groupInfo.map((group) => {
          return <GroupNav key={group.id} group={group}></GroupNav>;
        })}
      </Box>
      <Box className="flex items-end justify-center h-full my-10">
        <img src={Friends} alt="Hello~!" className="ml-3"></img>
      </Box>
    </Drawer>
  );
};
export default Sidebar;
