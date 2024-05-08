import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";

const Qualification: React.FC = () => {
  return (
    <div className="commonPadding">
      <div className="sectionPadding">
        <SectionHeader
          heading={"Qualification"}
          intro={"My Personal Journey"}
        />

        <div className="qheaderLinks">
          <Link to="/education">Education</Link>
          <Link to="/experience">Experience</Link>
        </div>

        <div className="timeLineContainer">
          <div className="timeLine"></div>
          <div className="timeLineGrid">
            <div className="timeLineComponent">
              <p className="paraHeading">Hello</p>
              <p className="para">Jangiti Naveen</p>
              <p className="dataTime tinyText">08/05/2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
