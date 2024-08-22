// import React from 'react';

// const GroupPayment = (props) => {
//   return (
//     <div className="group--payment">
//       <div className="group--payment--cardBrand">{props.cardBrand}</div>
//       <div className="group--payment--cardNumber">{props.cardNumber}</div>
//     </div>
//   );
// };

// export default GroupPayment;
import React from 'react';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';

const DashedButtonBox = styled(Box)({
  border: '3px dashed #FFA726',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 323,
  height: 167,
  margin: '0 auto',
});

const CustomIconButton = styled(IconButton)({
  backgroundColor: '#FFE0B2', // Light orange background for the button
  color: '#FFA726', // Orange color for the icon
  '&:hover': {
    backgroundColor: '#FFB74D', // Darker orange on hover
  },
});

const GroupPayment = () => {
  return (
    <Box
      sx={{
        border: '1px solid #BFBFBF',
        boxSizing: 'border-box',
        borderRadius: '10px',
        width: 795,
        height: 269,
        alignItems: 'center',
      }}
    >
      <DashedButtonBox>
        <CustomIconButton>
          <AddIcon />
        </CustomIconButton>
      </DashedButtonBox>
    </Box>
  );
};

export default GroupPayment;
