import React from 'react';
import './GalleryBox.css';

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

export default GalleryBox;
