import profile from "../assets/profile1.png";
// import Card from "../components/Card";
import "../pagesStyles/About.css";
// import { IoIosPaper } from "react-icons/io";
// import { SlBadge } from "react-icons/sl";
// import { SiMaterialformkdocs } from "react-icons/si";
import SectionHeader from "../components/SectionHeader";
import ExpoCard, { ExpoCardProps } from "../components/ExpoCard";

interface AboutCard {
  heading: String;
  answer: String;
  icon: React.ElementType;
}



const expoCards: ExpoCardProps[] = [
  {
    companyName: "Kunduz",
    logo: "/gallery/experience/kunduz.jpeg",
    tenure: "June 2021- Aug 2021",
    role:"Mathematics Subject Expert"
  },
   {
    companyName: "Paathshala Ascension",
    logo: "/gallery/experience/pathashala.png",
    tenure: "Sep 2021- Oct 2021",
    role:"JEE Mathematics Teacher"
  },
   {
    companyName: "CUET BABA",
    logo: "/gallery/experience/cuetbaba.png",
    tenure: "December 2023- April 2024",
    role:"Aptitude & Reasoning Teacher"
  },
   {
    companyName: "CCD NITC",
    logo: "/gallery/experience/ccd.png",
    tenure: "Aug 2023 - May 2024",
    role:"Placement Coordinator"
  }

];

// const q1: AboutCard = {
//   heading: "Experience",
//   answer: "Yet to begin",
//   icon: SlBadge,
// };
// const q2: AboutCard = {
//   heading: "Projects",
//   answer: "2+ projects",
//   icon: SiMaterialformkdocs,
// };

const About: React.FC = () => {
  return (
    <div className="commonPadding fullPage" id="experience">
      <div className="aboutPage  sectionPadding">
        <SectionHeader heading={"Experience"} intro={""} />
        <div className="aboutContent">
          <div className="aboutProfile">
            <img src={profile} alt="profile image" />
          </div>

          <div className="aboutDetails">
            <div className="aboutCards">
              {
                expoCards.map((card, index) => (
                  <ExpoCard key={index} {...card} />
                ))
              }
              
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


