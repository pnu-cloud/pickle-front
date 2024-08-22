import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';

import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import './GalleryBox.css';

const GalleryBox = (props) => {
  return (
    <Card sx={{ width: 442, minWidth: 349, height: 413 }}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar sx={{}} aria-label="recipe">
              P
            </Avatar>
          }
          title={props.groupName}
        />

        <CardMedia
          component="img"
          sx={{ width: 349, height: 140, backgroundColor: '#e0e0e0' }}
          image="https://image.ajunews.com/content/image/2024/01/21/20240121132054894779.jpg"
          alt="Project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight={500}>
            {props.projectName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.projectDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <IconButton aria-label="views">
          <VisibilityIcon />
          <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
            {props.views}
          </Typography>
        </IconButton>
        <IconButton aria-label="likes">
          <FavoriteIcon />
          <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
            {props.views}
          </Typography>
        </IconButton>
        <IconButton aria-label="comments">
          <ChatBubbleIcon />
          <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
            {props.comments}
          </Typography>
        </IconButton>
      </CardActionArea>
    </Card>
  );
};
/*
const GalleryBox = (props) => {
  return (
    <div className="galleryBox" key={props.projectId}>
      <div className="galleryBox--groupInfo">
        <img src={props.groupImage} alt="Group" className="galleryBox--groupInfo--image" />
        <h2 className="galleryBox--groupInfo--name">{props.groupName}</h2>
      </div>
      <div className="galleryBox--projectInfo">
        <img src={props.projectImage} alt="Project" className="galleryBox--projectInfo--image" />
        <h1 className="galleryBox--projectInfo--title">{props.projectName}</h1>
        <p className="galleryBox--projectInfo--description">{props.projectDescription}</p>
      </div>
      <div className="galleryBox--stats">
        <div className="galleryBox--stats--views">
          <span className="icon">👁️</span> {props.views}K
        </div>
        <div className="galleryBox--stats--likes">
          <span className="icon">❤️</span> {props.views}
        </div>
        <div className="galleryBox--stats--comments">
          <span className="icon">💬</span> {props.comments}
        </div>
      </div>
    </div>
  );
};
*/
export default GalleryBox;
