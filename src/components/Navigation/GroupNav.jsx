import React, { useState, useEffect } from 'react';
import group from 'api/groupInfo';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import GroupAPI from 'APIs/GroupAPI';

import Group from 'pages/Group/Group';
import { useNavigate } from 'react-router-dom';
const GroupNav = ({ groupId }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [groupData, setGroupData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGroupClick = (groupId) => {
    navigate(`/group/${groupId}`); // groupId를 URL에 포함
  };
  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const data = await GroupAPI(groupId); // API 호출
        console.log('API Response:', data.message); // 메시지 출력
        setGroupData(data.data); // groupData 상태 업데이트
        setLoading(false); // 로딩 종료
      } catch (error) {
        console.error('Error fetching group data:', error);
        setLoading(false); // 에러 발생 시 로딩 종료
      }
    };

    if (groupId) {
      fetchGroupData();
    }
  }, [groupId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!groupData) {
    return <div></div>;
  }
  if (!loading && groupData) {
    return (
      <ListItem className="flex flex-col gap-2 mb-1" disablePadding>
        <ListItemButton selected={open} className="w-[80%] hover:w-[80%] h-8" onClick={() => setOpen((prev) => !prev)}>
          <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
          <ListItemText primary={groupData.groupName} primaryTypographyProps={{ className: 'text-middleBlack' }} />
        </ListItemButton>
        <Collapse className="w-[80%]" in={open} timeout="auto">
          {/* 그룹페이지로 이동합니다. */}
          <ListItemButton sx={{ pl: 4 }} className="h-8">
            <ListItemText primary={groupData.groupName} onClick={() => handleGroupClick(groupData.groupId)} />
          </ListItemButton>

          {/* origin code */}
          {/* {group.project.map((project) => (
          <ListItemButton key={project.id} sx={{ pl: 4 }} className="h-8">
            <ListItemText primary={project.name} />
          </ListItemButton>
        ))} */}
        </Collapse>
      </ListItem>
    );
  }
};

export default GroupNav;
