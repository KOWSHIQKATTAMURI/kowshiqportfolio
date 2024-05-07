import SectionHeader from '../components/SectionHeader'
import SkillsShowCase from '../components/SkillsShowCase';
import '../pagesStyles/Skills.css'
import { DiHtml5,DiCss3,DiJsBadge,DiReact,DiMysql,DiMongodb } from "react-icons/di";
import { FaGithub, FaNodeJs,FaAws } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

export interface SkillTypes{
    icon: React.ElementType,
    sName: String,
    sLevel?: String
}

const frontendSkills: SkillTypes[] = [
    {
        icon: DiHtml5,
        sName: "HTML",
        sLevel: "Intermediate"
    },
      {
        icon: DiCss3,
        sName: "CSS",
        sLevel: "Intermediate"
    },
      {
        icon: DiJsBadge,
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
        icon: DiHtml5,
        sName: "HTML",
        sLevel: "Intermediate"
    },
      {
        icon: DiHtml5,
        sName: "HTML",
        sLevel: "Intermediate"
    },
      {
        icon: DiHtml5,
        sName: "HTML",
        sLevel: "Intermediate"
    },
      {
        icon: DiHtml5,
        sName: "HTML",
        sLevel: "Intermediate"
    },
]

const Skills:React.FC = () => {
    return(
        <div className='commonPadding'>
            <div className="skillsPage">
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