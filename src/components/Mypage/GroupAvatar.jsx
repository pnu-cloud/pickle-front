import React, { useEffect, useState } from 'react';
import { Grid, Stack, Avatar, Typography } from '@mui/material';
import GroupAPI from 'APIs/GroupAPI';

const GroupAvatar = ({ groupId }) => {
  const [groupData, setGroupData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        if (groupId) {
          const data = await GroupAPI(groupId); // API 호출
          console.log('API Response:', data.message); // 메시지 출력
          setGroupData(data.data); // groupData 상태 업데이트
          setLoading(false); // 로딩 종료
        }
      } catch (error) {
        console.error('Error fetching group data:', error);
        setLoading(false); // 에러 발생 시 로딩 종료
      }
    };

    fetchGroupData(); // groupId가 있을 때만 API 호출
  }, [groupId]);

  // groupData가 업데이트된 후 로그 출력
  useEffect(() => {
    if (groupData) {
      console.log('Updated groupData:', groupData); // groupData 로그 출력
      console.log('Updated groupDataId:', groupData.groupId); // groupId 로그 출력
    }
  }, [groupData]);

  if (loading) {
    return <p>Loading...</p>; // 로딩 중 표시
  }

  if (!groupData) {
    return <p>No group data available</p>; // groupData가 없을 때 표시
  }
  if (!loading && groupData) {
    return (
      <Grid item key={groupData.groupId} sx={{ width: '10%' }}>
        <Stack alignItems="center">
          <Avatar
            alt={groupData.groupName}
            src={groupData.groupProfileImage}
            sx={{
              width: 54,
              height: 54,
              border: '3px solid white',
              boxShadow: '0px 4px 4.5px rgba(0, 0, 0, 0.25)',
            }}
          />
          <Typography
            sx={{
              marginTop: 1,
              fontWeight: 400,
              fontSize: 15,
              color: '#858585',
            }}
          >
            {groupData.groupName}
          </Typography>
        </Stack>
      </Grid>
    );
  }
};

export default GroupAvatar;
