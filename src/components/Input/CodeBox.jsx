import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';

// FE Logo
import HtmlLogo from 'pages/Deploy/assets/Framework/FE/HTML5.png';
import ReactLogo from 'pages/Deploy/assets/Framework/FE/React.svg';
import VueLogo from 'pages/Deploy/assets/Framework/FE/Vue.png';
import AngularLogo from 'pages/Deploy/assets/Framework/FE/Angular.svg';
import NextjsLogo from 'pages/Deploy/assets/Framework/FE/Nextjs.svg';

// BE Logo
import NodejsLogo from 'pages/Deploy/assets/Framework/BE/Nodejs.svg';
import SpringBootLogo from 'pages/Deploy/assets/Framework/BE/SpringBoot.svg';
import PhpLogo from 'pages/Deploy/assets/Framework/BE/PHP.png';
import FlaskLogo from 'pages/Deploy/assets/Framework/BE/Flask.png';
import FastApiLogo from 'pages/Deploy/assets/Framework/BE/fastAPI.png';

// DB Logo
import MysqlLogo from 'pages/Deploy/assets/Framework/DB/MySQL.png';
import PostgresqlLogo from 'pages/Deploy/assets/Framework/DB/PostgreSQL.svg';
import MongodbLogo from 'pages/Deploy/assets/Framework/DB/MongoDB.svg';
import SqliteLogo from 'pages/Deploy/assets/Framework/DB/SQLite.png';

// Etc.
import TerminalIcon from '@mui/icons-material/Terminal';

const CodeBox = ({ onSelectionChange }) => {
  const [selectedButton, setSelectedButton] = useState({
    FE: null,
    BE: null,
    DB: null,
    ETC: null,
  });

  const handleClick = (type, name) => {
    setSelectedButton((prevState) => {
      const newState = {
        ...prevState,
        [type]: prevState[type] === name ? null : name,
      };
      onSelectionChange(newState);
      return newState;
    });
  };

  const BasicStyledBox = styled(Box)(() => ({
    width: '100%',
    height: '100%',
    fontSize: '15px',
    fontWeight: '700',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '48px',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      height: '5px',
    },
    '&::-webkit-scrollbar-track': {
      background: PICKLE_COLOR.mainWhite,
    },
    '&::-webkit-scrollbar-thumb': {
      background: PICKLE_COLOR.pointOrange,
      borderRadius: '10px',
    },
  }));

  const BottomStyledBox = styled(Box)(() => ({
    width: '100%',
    height: '100%',
    fontSize: '15px',
    fontWeight: '700',
    borderBottom: `1px solid ${PICKLE_COLOR.middleGray}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '48px',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      height: '5px',
    },
    '&::-webkit-scrollbar-track': {
      background: PICKLE_COLOR.mainWhite,
    },
    '&::-webkit-scrollbar-thumb': {
      background: PICKLE_COLOR.pointOrange,
      borderRadius: '10px',
    },
  }));

  const StyledStack = styled(Stack)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
  });

  const StyledIconButton = styled(IconButton)(({ selected }) => ({
    border: `${selected ? `2px solid ${PICKLE_COLOR.pointOrange}` : `1px solid ${PICKLE_COLOR.middleGray}`}`,
    width: '75px',
    height: '75px',
    '&:hover': {
      borderColor: PICKLE_COLOR.pointOrange,
    },
  }));

  const StyledTypography = styled(Typography)({
    color: PICKLE_COLOR.darkGray,
    fontSize: '13px',
  });

  return (
    <Box
      className="grid w-full h-[500px] items-center text-center"
      sx={{
        gridTemplateColumns: '15% 85%',
        gridTemplateRows: 'repeat(4, 1fr)',
        border: `1px solid ${PICKLE_COLOR.middleGray}`,
        borderRadius: '10px',
        borderCollapse: 'collapse',
        gap: 0,
      }}
    >
      <BottomStyledBox className="justify-center" sx={{ borderRight: `1px solid ${PICKLE_COLOR.middleGray}` }}>
        Front End
      </BottomStyledBox>
      <BottomStyledBox className="px-12">
        <StyledStack>
          <StyledIconButton selected={selectedButton.FE === 'html'} onClick={() => handleClick('FE', 'html')}>
            <img src={HtmlLogo} alt="Html" />
          </StyledIconButton>
          <StyledTypography>HTML5</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton selected={selectedButton.FE === 'react'} onClick={() => handleClick('FE', 'react')}>
            <img src={ReactLogo} alt="React" />
          </StyledIconButton>
          <StyledTypography>React</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton selected={selectedButton.FE === 'vue'} onClick={() => handleClick('FE', 'vue')}>
            <img src={VueLogo} alt="Vue.js" />
          </StyledIconButton>
          <StyledTypography>Vue.js</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton selected={selectedButton.FE === 'angular'} onClick={() => handleClick('FE', 'angular')}>
            <img src={AngularLogo} alt="Angular" />
          </StyledIconButton>
          <StyledTypography>Angular</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton selected={selectedButton.FE === 'nextjs'} onClick={() => handleClick('FE', 'nextjs')}>
            <img src={NextjsLogo} alt="Next.js" />
          </StyledIconButton>
          <StyledTypography>Next.js</StyledTypography>
        </StyledStack>
      </BottomStyledBox>
      <BottomStyledBox className="justify-center" sx={{ borderRight: `1px solid ${PICKLE_COLOR.middleGray}` }}>
        Back End
      </BottomStyledBox>
      <BottomStyledBox className="px-12">
        <StyledStack>
          <StyledIconButton selected={selectedButton.BE === 'nodejs'} onClick={() => handleClick('BE', 'nodejs')}>
            <img src={NodejsLogo} alt="Node.js" />
          </StyledIconButton>
          <StyledTypography>Node.js</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton
            selected={selectedButton.BE === 'springboot'}
            onClick={() => handleClick('BE', 'springboot')}
          >
            <img src={SpringBootLogo} alt="Spring Boot" />
          </StyledIconButton>
          <StyledTypography>Spring Boot</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton selected={selectedButton.BE === 'php'} onClick={() => handleClick('BE', 'php')}>
            <img src={PhpLogo} alt="PHP" />
          </StyledIconButton>
          <StyledTypography>PHP</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton selected={selectedButton.BE === 'flask'} onClick={() => handleClick('BE', 'flask')}>
            <img src={FlaskLogo} alt="Flask" />
          </StyledIconButton>
          <StyledTypography>Flask</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton selected={selectedButton.BE === 'fastapi'} onClick={() => handleClick('BE', 'fastapi')}>
            <img src={FastApiLogo} alt="FastAPI" />
          </StyledIconButton>
          <StyledTypography>FastAPI</StyledTypography>
        </StyledStack>
      </BottomStyledBox>
      <BottomStyledBox className="justify-center" sx={{ borderRight: `1px solid ${PICKLE_COLOR.middleGray}` }}>
        DB
      </BottomStyledBox>
      <BottomStyledBox className="px-12">
        <StyledStack>
          <StyledIconButton selected={selectedButton.DB === 'mysql'} onClick={() => handleClick('DB', 'mysql')}>
            <img src={MysqlLogo} alt="MySQL" />
          </StyledIconButton>
          <StyledTypography>MySQL</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton
            selected={selectedButton.DB === 'postgresql'}
            onClick={() => handleClick('DB', 'postgresql')}
          >
            <img src={PostgresqlLogo} alt="PostgreSQL" />
          </StyledIconButton>
          <StyledTypography>PostgreSQL</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton selected={selectedButton.DB === 'mongodb'} onClick={() => handleClick('DB', 'mongodb')}>
            <img src={MongodbLogo} alt="MongoDB" />
          </StyledIconButton>
          <StyledTypography>MongoDB</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton selected={selectedButton.DB === 'sqlite'} onClick={() => handleClick('DB', 'sqlite')}>
            <img src={SqliteLogo} alt="SQLite" />
          </StyledIconButton>
          <StyledTypography>SQLite</StyledTypography>
        </StyledStack>
      </BottomStyledBox>
      <BasicStyledBox className="justify-center" sx={{ borderRight: `1px solid ${PICKLE_COLOR.middleGray}` }}>
        Etc.
      </BasicStyledBox>
      <BasicStyledBox className="px-12">
        <StyledStack>
          <StyledIconButton selected={selectedButton.ETC === 'console'} onClick={() => handleClick('ETC', 'console')}>
            <TerminalIcon sx={{ fontSize: '35px' }} />
          </StyledIconButton>
          <StyledTypography>Console</StyledTypography>
        </StyledStack>
      </BasicStyledBox>
    </Box>
  );
};

export default CodeBox;
