import React from 'react';
const GroupParticipants = (props) => {
  return (
    <div className="group--participants">
      <img src={props.gourpProfileImage} alt="participants info" className="group--participants--image" />
      <h1 className="group--participants--name">{props.participantName}</h1>
      <p className="group--participants--email">{props.participantEmail}</p>
      <p className="group--participants--authority">{props.participantAuthority}</p>
    </div>
  );
};

export default GroupParticipants;
