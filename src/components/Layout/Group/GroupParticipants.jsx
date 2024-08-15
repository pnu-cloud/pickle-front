import React from "react";
//import "./GroupParticipants.css";

const GroupParticipants = (props) => {
  return (
    <div className="group--participants">
      <img
        src={props.gourpProfileImage}
        alt="Group Profile"
        className="group--participants--image"
      />
      <h1 className="group--participants--name">{props.groupName}</h1>
      <p className="group--participants--description">
        {props.groupDescription}
      </p>
    </div>
  );
};

export default GroupParticipants;
