import React from 'react';
import { Box } from '@mui/material';
import projectBackground from '../../assets/projectBackground.svg';
import ProjectPics from 'components/Project/ProjectPics';
import ProjectDomainAddress from 'components/Project/ProjectDomainAddress';

//json 만들기
const ProjectJson = {
  projectId: 1,
  projectName: '모두의 자율학습',
  //그룹
  groupId: 1,

  projectCreatedTime: 20240817,
  projectDomainAddress: 'cloud.pnu.app',

  projectPictures: [
    {
      id: 1,
      src: 'https://image.ajunews.com/content/image/2024/01/21/20240121132054894779.jpg',
      alt: 'image 1',
    },
    {
      id: 2,
      src: 'https://i.namu.wiki/i/jbjz_ayvc05UOFKasgYQ6Fr7uodGlWzz-YPxRH7B0Gx6JPymVs1jKtGuscliMuldxCPHHwOWWCJEmVxEftPDIg.webp',
      alt: 'image 2',
    },
    {
      id: 3,
      src: 'https://i.pinimg.com/originals/97/91/37/979137054da8a766f923707661dd687e.png',
      alt: 'image 3',
    },
    {
      id: 4,
      src: 'https://i.namu.wiki/i/vVk4FYMre53TYpZZrZsgZONQen3X1EGWdRpg5r0IRh_AaDEzjPSqBOw0isjzx6G5SC4zLb_mtLZkf950YmAXzg.webp',
      alt: 'image 4',
    },
    {
      id: 5,
      src: 'https://mblogthumb-phinf.pstatic.net/20160909_271/smiles115_1473404854327pFEAc_JPEG/Conan_387.jpg?type=w420',
      alt: 'image 5',
    },
  ],
};
const Project = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${projectBackground})`,
        backgroundSize: 'cover',
        width: '100%',
        minHeight: 1200,
        borderBottom: '1px solid #BFBFBF',
        borderRadius: 20,
        padding: '25px',
        overflow: 'hidden', // Ensures background image respects the borderRadius
      }}
    >
      <Box sx={{ backgroundColor: 'red' }}>{ProjectJson.projectName}</Box>
      <ProjectPics {...ProjectJson}></ProjectPics>
    </div>
  );
};
export default Project;
