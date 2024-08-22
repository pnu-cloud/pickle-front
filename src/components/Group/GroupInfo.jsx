// import React from 'react';

// const GroupInfo = (props) => {
//   return (
//     <div className="group--info">
//       <img src={props.groupProfileImage} alt="Group Profile" className="group--info--image" />
//       <h1 className="group--info--name">{props.groupName}</h1>
//       <p className="group--info--description">{props.groupDescription}</p>
//     </div>
//   );
// };

// export default GroupInfo;

import * as React from 'react';
import { Card, CardContent, Typography, Button, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import StyledIconButton from './StyledIconButton';
const GroupInfo = (props) => {
  return (
    <Card
      variant="plain"
      sx={{ width: 358, height: 269, backgroundColor: 'transparent', borderLeft: '1px solid #BFBFBF', borderRadius: 0 }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <StyledIconButton variant="outlined" aria-label="edit">
          <EditIcon />
          edit
        </StyledIconButton>
        <Avatar
          src={props.groupProfileImage}
          sx={{
            width: 72,
            height: 72,
            margin: '0 auto',
            border: '1px solid #BFBFBF',
          }}
        />
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          {props.groupName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.groupDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default GroupInfo;
