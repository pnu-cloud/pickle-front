import React, { useEffect, useState } from 'react';
import { Box, Grid, Stack, Avatar, Typography } from '@mui/material';
import GroupAPI from 'APIs/GroupAPI';
import GalleryBox from 'components/Gallery/GalleryBox';
import { PICKLE_COLOR } from 'constants/pickleTheme';
const MyProject2 = ({ groupId }) => {
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
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          flexWrap: 'nowrap',
          height: 450,
          '&::-webkit-scrollbar': {
            height: 8,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: PICKLE_COLOR.pointOrange,
            borderRadius: 999,
            width: 200,
          },
          '&::-webkit-scrollbar-track': {
            borderRadius: 999,
            backgroundColor: PICKLE_COLOR.lightGray,
          },
        }}
      >
        <Stack direction="row" spacing={4}>
          {groupData.groupProjects.map((project) => (
            <GalleryBox key={project.projectId} {...project} />
          ))}
        </Stack>
      </Box>
    );
  }
};

export default MyProject2;
