import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import "../pagesStyles/Youtube.css";
type Video = {
  link: string;
  isActive: boolean;
  tabName: String;
};

{/* <iframe width="560" height="315" src="" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}


const videos: Video[] = [
  {
    link: "https://www.youtube.com/embed/_Lpmt9QqTyo?si=jyIV9-95v5wih6v8",
    isActive: true,
    tabName: "Sequences and Series",
  },
  {
    link: "https://www.youtube.com/embed/iDJs5ahdvu8?si=gKVuUaQeqCoUuzDt",
    isActive: false,
    tabName: "Integration",
  },
  {
    link: "https://youtube.com/embed/Ka4b-h_phJA?si=J9LLJmtcgKAhcA3c",
    isActive: false,
    tabName: "Trigonometry",
  },
  {
    link: "https://youtube.com/embed/e_GyDF1AXA4?si=dbH2cODYZfvP61WJ",
    isActive: false,
    tabName: "Probability",
  },
  {
    link: "https://youtube.com/embed/sN99B4lGMAs?si=BXaxQVbF2OZDwu9i",
    isActive: false,
    tabName: "Inverse Trigonometric Equations",
  },
  {
    link: "https://youtube.com/embed/lOvHoVfFsAA?si=y_qzOKE6dDBnnOSa",
    isActive: false,
    tabName: "Matrices",
  },
];

const Youtube: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string>(videos[0].link);

    const changeVideoHandler = (e: React.MouseEvent<HTMLParagraphElement>) => {
        const tabName = e.currentTarget.innerText;
        const video = videos.map((video) => {
            video.isActive = false;
            if(video.tabName === tabName){
                video.isActive = true
                setActiveVideo(video.link);
                return video;
            }
        });
        
    };

  return (
    <div className="youtubePage">
      <SectionHeader heading={"Tutorals"} intro={""} />

      <div className="youtubeOuterWrapper ">
        

      <div className="youtubeWrapper">
        <div className="youtubeLinksContainer">
          {videos.map((video, index) => (
            <p key={index} className={ video.isActive ? "para activeTab" : "para"} onClick={changeVideoHandler} >{video.tabName}</p>
          ))}
        </div>

        <div className="youtubeEmbedContainer">
          <iframe
            width="820"
            frameBorder={0}
            height="472.5"
            src={activeVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Youtube;
