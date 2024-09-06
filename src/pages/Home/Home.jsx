import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import galleryCover from 'assets/galleryCover.svg';
import SortButton from 'components/Buttons/SortButton';
import SearchBox from 'components/Input/SearchBox';
import GalleryBox2 from 'components/Gallery/GalleryBox2';
import GalleryOrderLikeAPI from 'APIs/GalleryOrderLikeAPI';
import GalleryOrderViewAPI from 'APIs/GalleryOrderViewAPI';

const Home = () => {
  const [searchWord, setSearchWord] = useState('');
  const [sort, setSort] = useState('like');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let data;
        if (sort === 'like') {
          data = await GalleryOrderLikeAPI();
          data.data.sort((a, b) => b.likes - a.likes);
        } else if (sort === 'view') {
          data = await GalleryOrderViewAPI();
          data.data.sort((a, b) => b.views - a.views);
        }
        setProjects(data.data);
        console.log(projects);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };
    fetchProjects();
  }, [sort]); // sort가 변경될 때마다 호출

  const handleSearchChange = (value) => {
    setSearchWord(value);
  };

  const handleSortChange = (selectedSort) => {
    setSort(selectedSort); // 정렬 값 업데이트
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.groupName.includes(searchWord) ||
      project.projectName.includes(searchWord) ||
      project.projectDescription.includes(searchWord),
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <img src={galleryCover} style={{ width: '100%' }} />
      <Stack direction="row" spacing={3}>
        <SortButton onSortChange={handleSortChange} /> {/* SortButton에서 선택한 값을 Home에서 처리 */}
        <SearchBox onChange={handleSearchChange} />
      </Stack>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        justifyContent="space-between"
        useFlexGap
        sx={{ flexWrap: 'wrap', width: '100%' }}
      >
        {filteredProjects.map((project) => (
          <GalleryBox2 key={project.projectId} {...project} />
        ))}
      </Stack>
    </Box>
  );
};

export default Home;
