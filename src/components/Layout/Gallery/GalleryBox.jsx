import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './GalleryBox.css';
const GalleryBox = (props) => {
  return (
    <Card sx={{ width: 442, height: 413 }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.groupName}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          weight="349"
          image="https://image.ajunews.com/content/image/2024/01/21/20240121132054894779.jpg"
          alt="Project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.projectName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.projectDescription}
          </Typography>
        </CardContent>
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
          <span className="icon">❤️</span> {props.likes}
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
