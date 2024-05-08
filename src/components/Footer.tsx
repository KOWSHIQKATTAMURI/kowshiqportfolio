import '../componentsStyles/Footer.css'
import { FaGithub } from "react-icons/fa";

const Footer:React.FC = () => {
    return(
        <div className="footerpage">
            <div className="footerContent">
                <p className='largeHeading'>Kattamuri Kowshiq</p>
                <div className="footerSocialMedia">
                        <a href="" className='darkBgButton'>
                            <FaGithub className="svgIcon" />
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Footer