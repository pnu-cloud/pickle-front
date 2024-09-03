import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';

// FE Logo
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

const CodeBox = () => {
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

  const StyledIconButton = styled(IconButton)({
    border: `1px solid ${PICKLE_COLOR.middleGray}`,
    width: '75px',
    height: '75px',
  });

  const StyledTypography = styled(Typography)({
    color: PICKLE_COLOR.darkGray,
    fontSize: '13px',
  });

  return (
    <Box
      className="grid w-full h-[380px] items-center text-center"
      sx={{
        gridTemplateColumns: '15% 85%',
        gridTemplateRows: 'repeat(3, 1fr)',
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
          <StyledIconButton>
            <img src={ReactLogo} />
          </StyledIconButton>
          <StyledTypography>React</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton>
            <img src={VueLogo} />
          </StyledIconButton>
          <StyledTypography>Vue.js</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton>
            <img src={AngularLogo} />
          </StyledIconButton>
          <StyledTypography>Angular</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton>
            <img src={NextjsLogo} />
          </StyledIconButton>
          <StyledTypography>Next.js</StyledTypography>
        </StyledStack>
      </BottomStyledBox>
      <BottomStyledBox className="justify-center" sx={{ borderRight: `1px solid ${PICKLE_COLOR.middleGray}` }}>
        Back End
      </BottomStyledBox>
      <BottomStyledBox className="px-12">
        <StyledStack>
          <StyledIconButton>
            <img src={NodejsLogo} />
          </StyledIconButton>
          <StyledTypography>Node.js</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton>
            <img src={SpringBootLogo} />
          </StyledIconButton>
          <StyledTypography>Spring Boot</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton>
            <img src={PhpLogo} />
          </StyledIconButton>
          <StyledTypography>PHP</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton>
            <img src={FlaskLogo} />
          </StyledIconButton>
          <StyledTypography>Flask</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton>
            <img src={FastApiLogo} />
          </StyledIconButton>
          <StyledTypography>FastAPI</StyledTypography>
        </StyledStack>
      </BottomStyledBox>
      <BasicStyledBox className="justify-center" sx={{ borderRight: `1px solid ${PICKLE_COLOR.middleGray}` }}>
        DB
      </BasicStyledBox>
      <BasicStyledBox className="px-12">
        <StyledStack>
          <StyledIconButton>
            <img src={MysqlLogo} />
          </StyledIconButton>
          <StyledTypography>MySQL</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton>
            <img src={PostgresqlLogo} />
          </StyledIconButton>
          <StyledTypography>PostgreSQL</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton>
            <img src={MongodbLogo} />
          </StyledIconButton>
          <StyledTypography>MongoDB</StyledTypography>
        </StyledStack>
        <StyledStack>
          <StyledIconButton>
            <img src={SqliteLogo} />
          </StyledIconButton>
          <StyledTypography>SQLite</StyledTypography>
        </StyledStack>
      </BasicStyledBox>
    </Box>
  );
};

export default CodeBox;
