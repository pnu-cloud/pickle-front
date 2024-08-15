import React from "react";
import "./GroupInfo.css";

const GroupInfo = (props) => {
  return (
    <div className="group--info">
      <img
        src={props.gourpProfileImage}
        alt="Group Profile"
        className="group--info--image"
      />
      <h1 className="group--info--name">{props.groupName}</h1>
      <p className="group--info--description">{props.groupDescription}</p>
    </div>
  );
};

export default GroupInfo;
