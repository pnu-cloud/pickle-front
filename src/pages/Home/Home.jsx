import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import galleryCover from 'assets/galleryCover.svg';
import SortButton from 'components/Buttons/SortButton';
import SearchBox from 'components/Input/SearchBox';
import GalleryBox2 from 'components/Gallery/GalleryBox2';
import galleryInfo from 'api/galleryInfo';

const Home = () => {
  const [searchWord, setSearchWord] = useState('');
  const handleSearchChange = (value) => {
    setSearchWord(value);
  };
  const filteredProjects = galleryInfo.groupProjects.filter(
    (project) =>
      project.groupName.includes(searchWord) ||
      project.projectName.includes(searchWord) ||
      project.projectDescription.includes(searchWord),
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <img src={galleryCover} style={{ width: '100%' }} />
      <Stack direction="row" spacing={3}>
        <SortButton></SortButton>
        <SearchBox onChange={handleSearchChange}></SearchBox>
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
