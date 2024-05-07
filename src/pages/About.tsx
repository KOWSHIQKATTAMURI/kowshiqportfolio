import profile from "../assets/profile.jpg";
import Card from "../components/Card";
import "../pagesStyles/About.css";
import { IoIosPaper } from "react-icons/io";
import { SlBadge } from "react-icons/sl";
import { SiMaterialformkdocs } from "react-icons/si";
import SectionHeader from "../components/SectionHeader";
interface AboutCard {
  heading: String;
  answer: String;
  icon: React.ElementType;
}

const q1: AboutCard = {
  heading: "Experience",
  answer: "Yet to begin",
  icon: SlBadge,
};
const q2: AboutCard = {
  heading: "Projects",
  answer: "2+ projects",
  icon: SiMaterialformkdocs,
};

const About: React.FC = () => {
  return (
    <div className="commonPadding">
      <div className="aboutPage sectionPadding">
        <SectionHeader heading={"About Me"} intro={"My Introduction"} />
        <div className="aboutContent">
          <div className="aboutProfile">
            <img src={profile} alt="profile image" />
          </div>

          <div className="aboutDetails">
            <div className="aboutCards">
              <Card heading={q1.heading} answer={q1.answer} icon={q1.icon} />
              <Card heading={q2.heading} answer={q2.answer} icon={q2.icon} />
            </div>

            <p className="para aboutDescription">
              I visited all of the coding websites and improved my DSA skills. I
              am starting a new chapter in which I will use my logic and
              problem-solving skills, as well as my creativity, to develop
              websites with the boss in town, MERN Stack.
            </p>

            <a
              href="#"
              download={true}
              className="buttonWithSvg buttonEle priFont darkBgButton downloadBtn"
            >
              Download Resume <IoIosPaper className="svgIcon" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
