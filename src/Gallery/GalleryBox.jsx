/*
import GalleryBox from "./Gallery/GalleryBox";

function App() {
  return (
    <div>
      <GalleryBox
        groupName="Group name"
        groupImage="path/to/group-image.jpg"
        projectName="Project Name"
        projectImage="path/to/project-image.jpg"
        projectOutline="Milky Way Over The Sea Theme features a 1080 x 1920 sized fhd background wallpaper & is optimized to display."
        views={55}
        likes={77}
        comments={128}
      />
    </div>
  );
}
*/

// todo : 누르면 visit 페이지로
import React from 'react'
import './GalleryBox.css'

const GalleryBox = ({
  groupName,
  groupImage,
  projectName,
  projectImage,
  projectOutline,
  views,
  likes,
  comments
}) => {
  return (
    <div className="galleryBox">
      <div className="galleryBox--contents">
        <div className="galleryBox--groupInfo">
          <img src={groupImage} alt="Group" className="galleryBox--groupInfo--image" />
          <h2 className="galleryBox--groupInfo--name">{groupName}</h2>
        </div>
        <div className="galleryBox--projectInfo">
          <img
            src={projectImage}
            alt="Project"
            className="galleryBox--projectInfo--image"
          />
          <h1 className="galleryBox--projectInfo--title">{projectName}</h1>
          <p className="galleryBox--projectInfo--outline">{projectOutline}</p>
        </div>
        <div className="galleryBox--stats">
          <div className="galleryBox--stats--views">
            <span className="icon">👁️</span> {views}K
          </div>
          <div className="galleryBox--stats--likes">
            <span className="icon">❤️</span> {likes}
          </div>
          <div className="galleryBox--stats--comments">
            <span className="icon">💬</span> {comments}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryBox
