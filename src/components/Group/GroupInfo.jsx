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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const GroupInfo = (props) => {
  return (
    <Card sx={{ width: 358, height: 269, alignItems: 'center' }}>
      <CardActions>
        <Button size="small" color="primary">
          edit
        </Button>
      </CardActions>
      <CardMedia component="img" height="140" image={props.groupProfileImage} alt="Group Profile" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
