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
import UserAPI from 'APIs/UserApi';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태를 관리하는 state

  const [memberGroups, setMemberGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true); // 모달 열기
  };
  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  // 페이지 로드 시 UserAPI 호출
  const [prevLen, setPrevLen] = useState(memberGroups.length);
  useEffect(() => {
    let email_Token = localStorage.getItem('email');
    UserAPI(email_Token)
      .then((data) => {
        console.log(data);
        setMemberGroups(data.data.userGroupInfoList);
        // console.log('memberGroup ' + memberGroups[0].id);
      })
      .catch((error) => {
        alert(error.message);
        console.error('Error during load UserData:', error);
      });
  }, [prevLen]);

  useEffect(() => {
    if (memberGroups.length > 0) {
      console.log('memberGroup ' + memberGroups[0].id); // memberGroups가 업데이트되면 처리
    }
    if (memberGroups.length !== prevLen) {
      setPrevLen(memberGroups.length);
      window.location.reload();
    }
  }, [prevLen]); // memberGroups가 변경될 때마다 실행됨

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
              return (
                <GroupNav
                  key={group.id}
                  groupId={group.id}
                  auth={group.authority}
                  open={selectedGroupId === group.id}
                  setSelectedGroupId={setSelectedGroupId}
                ></GroupNav>
              );
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
