import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Stack, Paper, Button, Box } from '@mui/material';

import GroupInfoM from '../../components/GroupMember/GroupInfoM';
import GroupParticipantsM from '../../components/GroupMember/GroupParticipantsM';
import GroupPayment from 'components/Group/GroupPayment';
import GroupProjects from 'components/Group/GroupProjects';
import StyledIconButton from '../../components/Group/StyledIconButton';
import AddIcon from '@mui/icons-material/Add';
import GroupAPI from 'APIs/GroupAPI';

import { useParams } from 'react-router-dom';

import { PICKLE_COLOR, PICKLE_WIDTH } from 'constants/pickleTheme';

const ContentsTitle = ({ title1, title2 }) => {
  return (
    <Typography
      sx={{
        fontSize: 22,
        fontWeight: 600,
        color: PICKLE_COLOR.pointOrange,
      }}
    >
      {title1} {title2}
    </Typography>
  );
};
const GroupMember = () => {
  const { groupId } = useParams();
  const [groupData, setGroupData] = useState(null);
  const [loading, setLoading] = useState(true);
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
      fetchGroupData(); // groupId가 있을 때만 API 호출
    }
  }, [groupId]); // groupId가 변경될 때마다 API 호출

  // groupData가 업데이트된 후 로그 출력
  useEffect(() => {
    if (groupData) {
      console.log('Updated groupData:', groupData); // groupData 로그 출력
      console.log('Updated groupDataId:', groupData.groupId); // groupId 로그 출력
    }
  }, [groupData]); // groupData가 변경될 때 실행

  if (loading) {
    return <p>Loading...</p>; // 로딩 중 표시
  }

  if (!groupData) {
    return <p>No group data available</p>; // groupData가 없을 때 표시
  }
  if (!loading && groupData) {
    const participantsCnt = groupData.groupParticipants.length;
    return (
      <div className="mt-4">
        <Stack spacing={3}>
          <Stack spacing={1}>
            <ContentsTitle title1={participantsCnt} title2="participant"></ContentsTitle>
            <Box
              sx={{
                border: `1px solid ${PICKLE_COLOR.middleGray}`,
                boxSizing: 'border-box',
                borderRadius: '10px',
              }}
            >
              <Stack direction="row" spacing={0}>
                <GroupParticipantsM {...groupData} />
                <GroupInfoM {...groupData} />
              </Stack>
            </Box>
          </Stack>

          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <ContentsTitle title1="projects"></ContentsTitle>
            </Stack>
            {/* <GroupProjects {...groupData} /> */}
          </Stack>
        </Stack>
      </div>
    );
  }
};

export default GroupMember;
