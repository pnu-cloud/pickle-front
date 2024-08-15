import React from "react";
//import "./Group.css";
import GroupInfo from "./GroupInfo";
import GroupParticipants from "./GroupParticipants";
import GalleryBox from "../Gallery/GalleryBox.jsx";

const JsonExample = {
  groupName: "구름",
  gourpProfileImage: "/images/goorm.png",
  groupDescription:
    "구름은 2024 PNU SW 창업캠프 참가팀입니다. 제 9회 부산 ICT 융합 해커톤 대회 참가,  2024년 제 1회 전국대학 소프트웨어 성과 공유 포럼 우수상, 제 11회 sw 융합 해커톤 대회 참여 ",
  groupProjects: [
    {
      groupName: "구름",
      groupImage: "/images/group-image.jpg",
      projectName: "모두의 자율",
      projectImage: "path/to/project-image.jpg",
      projectDescription:
        "모두의 자율학습, 모자는 생성형 AI를 통해 맞춤형 문제를 생성합니다.",
      views: 55,
      likes: 77,
      comments: 11,
    },
    {
      groupName: "구름",
      groupImage: "/images/group-image.jpg",
      projectName: "피클",
      projectImage: "path/to/project-image.jpg",
      projectDescription: "피클은 배포 서비스입니다.",
      views: 55,
      likes: 77,
      comments: 11,
    },
    {
      groupName: "구름",
      groupImage: "/images/group-image.jpg",
      projectName: "로컬 라이프",
      projectImage: "path/to/project-image.jpg",
      projectDescription: "로컬라이프는 지방에서 한달살기 프로젝트.",
      views: 55,
      likes: 77,
      comments: 11,
    },
  ],
};
const Group = () => {
  return (
    <div>
      <GroupInfo {...JsonExample} />
      <GroupParticipants {...JsonExample} />
      <div>
        {JsonExample.groupProjects.map((item) => (
          <GalleryBox {...item} />
        ))}
      </div>
    </div>
  );
};

export default Group;
