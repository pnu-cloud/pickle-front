import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Button, Drawer, IconButton, Typography, Toolbar, Box } from '@mui/material';
import { PICKLE_COLOR, PICKLE_WIDTH } from 'constants/pickleTheme';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import groupInfo from 'api/groupInfo';
import Friends from 'assets/friends.svg';
import GroupNav from 'components/Navigation/GroupNav';

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        '& .MuiDrawer-paper': {
          width: PICKLE_WIDTH.sidebar,
          boxShadow: '3px 0px 15px 0px #0000001A',
          border: 'none',
          alignItems: 'center',
          display: 'flex',
          position: 'sticky',
          zIndex: (theme) => theme.zIndex.drawer + 2,
        },
      }}
      className="w-sidebar"
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '15%',
            justifyContent: 'center',
          }}
        >
          <Link to="/">
            <Logo />
          </Link>
        </Box>

        <Box className="flex" sx={{ height: '15%', alignItems: 'center', justifyContent: 'center' }}>
          <Button
            component={Link}
            to="group"
            href="{설정필요}"
            className="flex w-[80%] hover:w-[80%] transition-all duration-300"
            sx={{ display: 'flex', justifyContent: 'space-between', height: '30%' }}
          >
            <Typography className="text-middle" sx={{ ml: 1.5, color: 'black', textTransform: 'none' }}>
              Groups
            </Typography>
            <AddOutlinedIcon sx={{ color: PICKLE_COLOR.pointOrange }} />
          </Button>
        </Box>
        <Box className="flex flex-col" sx={{ height: '40%' }}>
          {groupInfo.map((group) => {
            return <GroupNav key={group.id} group={group}></GroupNav>;
          })}
        </Box>
        <Box className="flex items-end justify-center" sx={{ height: '30%', paddingY: '15%' }}>
          <img src={Friends} alt="Hello~!" className="ml-3"></img>
        </Box>
      </Box>
    </Drawer>
  );
};
export default Sidebar;
