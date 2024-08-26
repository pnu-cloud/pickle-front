import * as React from 'react';
import { Button } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(Button)(() => ({
  color: PICKLE_COLOR.pointOrange,
  border: `1px solid ${PICKLE_COLOR.pointOrange}`,
  width: 105,
  height: 28,
  borderRadius: 999,
  textTransform: 'none',
  '&:hover': {
    border: `1px solid ${PICKLE_COLOR.subOrange}`,
  },
}));

export default StyledIconButton;
