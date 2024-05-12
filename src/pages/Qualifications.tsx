import SectionHeader from "../components/SectionHeader";
import "../pagesStyles/Qualifications.css";

import { SiDarkreader } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { BsCalendarDate } from "react-icons/bs";
import { useState } from "react";

const Qualification: React.FC = () => {
  const [showEdu, setShowEdu] = useState<Boolean>(true);

  return (
    <div className="commonPadding">
      <div className="sectionPadding">
        <SectionHeader
          heading={"Qualification"}
          intro={"My Personal Journey"}
        />

        <div className="qheaderLinks paraHeading">
          <p
          className={showEdu ? "qhlPara paraHeading" : "qhlPara activeQuali paraHeading"}
            onClick={() => setShowEdu(false)}
          >
            <SiDarkreader className="svgIcon" /> Education
          </p>
          <p
          className={showEdu ? "qhlPara activeQuali paraHeading" : "qhlPara paraHeading"}
            onClick={() => setShowEdu(true)}
          >
            <GrTechnology className="svgIcon" /> Experience
          </p>
        </div>

        <div className="timeLineContainer">
          {showEdu ? (
            <div className="timeLineInnerDiv">
              <div className="timeLineGrid">
                <div className="timeLineComponent one"></div>
                <div className="lineOuterDiv">
                  <div className="line">
                    <div className="circle"></div>
                  </div>
                </div>
                <div className="timeLineComponent two">
                  <p className="para mainHeadingtlc">QA & LR Tutor</p>
                  <p className="para">Kozhikode, Kerala</p>
                  <p className="dataTime tinyText">
                    <BsCalendarDate /> 12/2023-04/2024
                  </p>
                </div>
              </div>

              <div className="timeLineGrid">
                <div className="timeLineComponent one">
                  <p className="para mainHeadingtlc">
                    Backend Developer Intern
                  </p>
                  <p className="para">Rearway Technologies</p>
                  <p className="dataTime tinyText">
                    <BsCalendarDate />
                    05/2024 - Present
                  </p>
                </div>
                <div className="lineOuterDiv">
                  <div className="line">
                    <div className="circle"></div>
                  </div>
                </div>
                <div className="timeLineComponent two"></div>
              </div>
            </div>
          ) : (
            <div className="timeLineInnerDiv">
              <div className="timeLineGrid">
                <div className="timeLineComponent one">
                  <p className="para mainHeadingtlc">CBSE(perc.: 93.5%)</p>
                  <p className="para">Sri Chaitanya, Vishakapatanam</p>
                  <p className="dataTime tinyText">
                    {" "}
                    <BsCalendarDate /> 07/2016-04/2017
                  </p>
                </div>
                <div className="lineOuterDiv">
                  <div className="line">
                    <div className="circle"></div>
                  </div>
                </div>
                <div className="timeLineComponent two"></div>
              </div>

              <div className="timeLineGrid">
                <div className="timeLineComponent one"></div>
                <div className="lineOuterDiv">
                  <div className="line">
                    <div className="circle"></div>
                  </div>
                </div>
                <div className="timeLineComponent two">
                  <p className="para mainHeadingtlc">BIEAP (Perc.: 81.8%)</p>
                  <p className="para">
                    Sri Venkateshwara Junior College Vishakapatanam{" "}
                  </p>
                  <p className="dataTime tinyText">
                    {" "}
                    <BsCalendarDate /> 07/2017-03/2019
                  </p>
                </div>
              </div>

              <div className="timeLineGrid">
                <div className="timeLineComponent one">
                  <p className="para mainHeadingtlc">BTech</p>
                  <p className="para">NIT Calicut</p>
                  <p className="dataTime tinyText">
                    {" "}
                    <BsCalendarDate />
                    2020 - Present
                  </p>
                </div>
                <div className="lineOuterDiv">
                  <div className="line">
                    <div className="circle"></div>
                  </div>
                </div>
                <div className="timeLineComponent two"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Qualification;
