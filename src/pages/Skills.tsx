import SectionHeader from '../components/SectionHeader'
import SkillsShowCase from '../components/SkillsShowCase';
import '../pagesStyles/Skills.css'
import { DiJavascript1,DiReact,DiMysql,DiMongodb } from "react-icons/di";
import { FaGithub, FaNodeJs,FaAws } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineCode,AiOutlineHtml5 } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbBrandCss3 } from "react-icons/tb";

export interface SkillTypes{
    icon: React.ElementType,
    sName: String,
    sLevel?: String
}

const frontendSkills: SkillTypes[] = [
    {
        icon: AiOutlineHtml5,
        sName: "HTML",
        sLevel: "Intermediate"
    },
      {
        icon: TbBrandCss3,
        sName: "CSS",
        sLevel: "Intermediate"
    },
      {
        icon: DiJavascript1,
        sName: "JS",
        sLevel: "Intermediate"
    },
      {
        icon: DiReact,
        sName: "React",
        sLevel: "Intermediate"
    },
    {
        icon: FaGithub,
        sName: "GitHub",
        sLevel: "Intermediate"
    },
]

const backendSkills: SkillTypes[] = [
    {
        icon: FaNodeJs,
        sName: "Node JS",
        sLevel: "Intermediate"
    },
      {
        icon: SiExpress,
        sName: "Express JS",
        sLevel: "Intermediate"
    },
      {
        icon: DiMysql,
        sName: "MySql",
        sLevel: "Intermediate"
    },
      {
        icon: DiMongodb,
        sName: "MongoDB",
        sLevel: "Intermediate"
    },
    {
        icon: FaAws,
        sName: "AWS",
        sLevel: "Intermediate"
    },
]

const otherSkills: SkillTypes[] = [
    {
        icon: AiOutlineCode,
        sName: "DSA",
        sLevel: "Intermediate"
    },
      {
        icon: FaChalkboardTeacher,
        sName: "Teaching",
        sLevel: "Intermediate"
    },
      {
        icon: HiOutlineUserGroup,
        sName: "Community Management and Admin",
        sLevel: "Intermediate"
    }
]

const Skills:React.FC = () => {
    return(
        <div className='commonPadding fullPage'>
            <div className="skillsPage ">
                <SectionHeader heading={"Skills"} intro={"My Technical Skills"} />
                <div className="skillsContents">
                    <SkillsShowCase data={frontendSkills} skillHeading={"Fontend Skills"} />
                    <SkillsShowCase data={backendSkills} skillHeading={"Backend Skills"} />
                    <SkillsShowCase data={otherSkills} skillHeading={"Other Skills"} />
                </div>
            </div>
        </div>
    )
}


export default Skills