import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './ImageSlider.css';
import { Box, IconButton, Container } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
// const fake = {
//   projectImages: [
//     {
//       id: 1,
//       image: 'https://image.ajunews.com/content/image/2024/01/21/20240121132054894779.jpg',
//       alt: 'image 1',
//     },
//     {
//       id: 2,
//       image:
//         'https://i.namu.wiki/i/jbjz_ayvc05UOFKasgYQ6Fr7uodGlWzz-YPxRH7B0Gx6JPymVs1jKtGuscliMuldxCPHHwOWWCJEmVxEftPDIg.webp',
//       alt: 'image 2',
//     },
//     {
//       id: 3,
//       image: 'https://i.pinimg.com/originals/97/91/37/979137054da8a766f923707661dd687e.png',
//       alt: 'image 3',
//     },
//     // {
//     //   id: 4,
//     //   image:
//     //     'https://i.namu.wiki/i/vVk4FYMre53TYpZZrZsgZONQen3X1EGWdRpg5r0IRh_AaDEzjPSqBOw0isjzx6G5SC4zLb_mtLZkf950YmAXzg.webp',
//     //   alt: 'image 4',
//     // },
//     // {
//     //   id: 5,
//     //   image:
//     //     'https://mblogthumb-phinf.pstatic.net/20160909_271/smiles115_1473404854327pFEAc_JPEG/Conan_387.jpg?type=w420',
//     //   alt: 'image 5',
//     // },
//   ],
// };
const ProjectPics = (props) => {
  const images = props.projectImages;
  console.log("images:" + images)
  const settings = {
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 1,
    focusOnSelect: true,
    dots: true,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ padding: '30px', height: '500px' }}>
      {images.length === 1 ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <img className="cl" src={images[0]} alt="single" style={{ height: '100%' }} />
        </div>
      ) : (
        // 이미지가 여러 개일 경우 Slider를 사용
        <Slider {...settings} className="center">
          {images.map((image, index) => (
            <img key={index} className="cl" src={image} alt={`slide-${index}`} />
          ))}
        </Slider>
      )}

      <div className="pagination"></div>
    </Container>
  );
};
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{ position: 'absolute', top: '40%', right: '-50px', zIndex: 1, color: PICKLE_COLOR.pointOrange }}
    >
      <ArrowForwardIosIcon sx={{ width: 30, height: 60 }} />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '40%',
        left: '-50px',
        zIndex: 1,

        color: PICKLE_COLOR.pointOrange,
      }}
    >
      <ArrowBackIosIcon sx={{ width: 30, height: 60 }} />
    </IconButton>
  );
};
export default ProjectPics;
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
//

// import './ImageSlider.css';
// import { Box } from '@mui/material';
// //https://codepen.io/mackDEV2/pen/jOrpPRY
// //https://codepen.io/badcomet/pen/QWWpVgX
// const ProjectPics = (props) => {
//   const images = props.projectPictures;

//   const settings = {
//     centerMode: true,
//     centerPadding: '200px',
//     slidesToShow: 1,
//     infinite: true,
//     dots: true, // 슬라이더 아래에 네비게이션 점 표시
//     //speed: 500,
//     // slidesToScroll: 1,
//     // 한 번에 스크롤할 슬라이드 수

//     focusOnSelect: true, // 클릭한 슬라이드로 포커스를 이동시킵니다.
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container">
//       <Slider {...settings} className="center slider">
//         <div className="slide">
//           {images.map((image) => (
//             <Card
//               key={image.id}
//               className="slider-item frame"
//               sx={{
//                 borderRadius: '10px',
//                 border: '1px solid #BFBFBF',
//                 filter: 'drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25))',
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="194"
//                 image={image.src}
//                 alt={image.alt}
//                 className="slider-item frame"
//                 sx={{
//                   borderRadius: '10px',
//                 }}
//               />
//             </Card>
//           ))}
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default ProjectPics;
