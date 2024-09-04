import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Button, Drawer, IconButton, Typography, Toolbar, Box } from '@mui/material';
import { PICKLE_COLOR, PICKLE_WIDTH } from 'constants/pickleTheme';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import groupInfo from 'api/groupInfo';
import Friends from 'assets/friends.svg';
import GroupNav from 'components/Navigation/GroupNav';
import GroupCreateModal from 'components/Group/GroupCreateModal';
import UserAPI from 'APIs/UserAPI';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태를 관리하는 state

  const [memberGroups, setMemberGroups] = useState([
    {
      id: 0,
      user: 'string',
      group: {
        id: 0,
        name: 'string',
        description: 'string',
        image: 'string',
        groupMembers: ['string'],
        createdTime: '2024-09-04T13:36:57.858Z',
        updatedTime: '2024-09-04T13:36:57.858Z',
      },
      authority: 'OWNER',
      createdTime: '2024-09-04T13:36:57.858Z',
      updatedTime: '2024-09-04T13:36:57.858Z',
    },
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true); // 모달 열기
  };
  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  // 페이지 로드 시 UserAPI 호출
  useEffect(() => {
    let email_Token = localStorage.getItem('email');
    UserAPI(email_Token)
      .then((data) => {
        setMemberGroups(data.memberGroups);
        console.log(memberGroups);
      })
      .catch((error) => {
        alert(error.message);
        console.error('Error during load UserData:', error);
      });
  }, []);

  return (
    <>
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
              onClick={handleOpenModal}
              className="flex w-[80%] hover:w-[80%] transition-all duration-300"
              sx={{ display: 'flex', justifyContent: 'space-between', height: '30%' }}
            >
              <Typography className="text-middle" sx={{ ml: 1.5, color: 'black', textTransform: 'none' }}>
                Groups
              </Typography>
              <AddOutlinedIcon sx={{ color: PICKLE_COLOR.pointOrange }} />
            </Button>
          </Box>
          {/* test */}
          <Box className="flex flex-col" sx={{ height: '40%' }}>
            {memberGroups.map((group) => {
              return <GroupNav key={group.id} groupId={group.id}></GroupNav>;
            })}
          </Box>
          {/* original code */}
          {/* <Box className="flex flex-col" sx={{ height: '40%' }}>
            {groupInfo.map((group) => {
              return <GroupNav key={group.id} group={group}></GroupNav>;
            })}
          </Box> */}
          <Box className="flex items-end justify-center" sx={{ height: '30%', paddingY: '15%' }}>
            <img src={Friends} alt="Hello~!" className="ml-3"></img>
          </Box>
        </Box>
      </Drawer>
      <GroupCreateModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
export default Sidebar;
