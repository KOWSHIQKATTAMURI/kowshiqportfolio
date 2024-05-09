import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"
import { MdOutlineAttachEmail,MdOutlineWhatsapp } from "react-icons/md";
import '../pagesStyles/GetInTouch.css'
import { GrSend } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";

const GetInTouch:React.FC = () => {
    return(
       <div className="commonPadding ">
         <div className="gitContainer sectionPadding">
            <SectionHeader heading={"Get In Touch"} intro={"Contact Me"} />

            <div className="gitInsider">
                <div className="ttmContainer">
                    <p className="paraHeading">Talk To Me</p>
                    <a href="#" className="ttmBox">
                        <Card heading={"Email"} answer={"Kattamurikowshiq@gmail.com"} icon={MdOutlineAttachEmail} exist={true} />
                    </a>
                    <a href="#" className="ttmBox">
                        <Card heading={"WhatsApp"} answer={"+91 70361-6XXXX"} icon={MdOutlineWhatsapp} exist={true} />
                    </a>
                    <a href="#" className="ttmBox">
                        <Card heading={"Telegram"} answer={"https://t.me/Kkbhai1589"} icon={GrSend} exist={true} />
                    </a>
                </div>

                <div className="writeMessageContainer">
                    <p className="paraHeading">Write me your project/queries</p>

                    <form action="" className="form">
                        <div className="inputBox">
                            <label htmlFor="name" className="tinyText">Name</label>
                            <input id="name" type="text" placeholder="Enter your Name" className="para" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Email" className="tinyText">E-Mail</label>
                            <input id="Email" type="text" placeholder="Enter your Email" className="para" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Query" className="tinyText">Query</label>
                            <textarea id="Query" 
                            rows={6} placeholder="Enter your Query" className="para" />
                        </div>

                        <div className="buttonBoxForm">
                            <button className="buttonWithSvg buttonEle priFont darkBgButton sayHelloBtn">Send Message <BiMessageSquareDetail className="svgIcon"/> </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
       </div>
    )
}



export default GetInTouch