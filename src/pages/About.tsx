import profile from "../assets/profile.jpg";
import Card from "../components/Card";
import '../pagesStyles/About.css'
import { IoIosPaper } from "react-icons/io";

interface AboutCard{
    heading: String,
    answer: String
}

const cardsArr:AboutCard[] = [
    {
        heading: 'Experience',
        answer:'Yet to begin'
    },
     {
        heading: 'Projects',
        answer:'2+ projects'
    }
]



const About:React.FC = () => {
  return (
    <div className="commonPadding">
      <div className="aboutPage sectionPadding">
        <div className="aboutHeader">
          <h1 className="mediumHeading">About Me</h1>
          <p className="para">My Introduction</p>
        </div>
        <div className="aboutContent">
          <div className="aboutProfile">
            <img src={profile} alt="profile image" />
          </div>

          <div className="aboutDetails">
            <div className="aboutCards">
                {
                    cardsArr.map((item, idx) => {
                        console.log(item)
                        return(
                           <Card data={item}/>
                        )
                    })
                }
            </div>

            <p className="para aboutDescription">MERN stack developer with a passion for building websites and applications with UI/UX. You can see what I am up to on my GitHub.</p>

            <a href="#" download={true} className="buttonWithSvg buttonEle priFont darkBgButton downloadBtn">Download Resume <IoIosPaper className="svgIcon"/> </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
