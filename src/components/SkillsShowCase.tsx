import { SkillTypes } from "../pages/Skills";
import '../componentsStyles/SkillsShowCase.css'


interface DataProps {
  data: SkillTypes[];
  skillHeading: String;
}

const SkillsShowCase: React.FC<DataProps> = ({ data, skillHeading }) => {
  return (
    <div className="sscOuterContainer">
      <p className="paraHeading">{skillHeading}</p>
      <div className="skillSetContainer">
      {data.map((item: SkillTypes, idx) => {
        return (
          <div className="sscBox" key={idx} >
            <div className="icon">
              <item.icon className='svgIcon'/>
            </div>
            <div className="sscDetails">
              <p className="para">{item.sName}</p>
              <p className="tinyText">{item.sLevel}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default SkillsShowCase;
