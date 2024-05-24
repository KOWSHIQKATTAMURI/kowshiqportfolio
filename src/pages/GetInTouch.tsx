import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"
import { MdOutlineAttachEmail,MdOutlineWhatsapp } from "react-icons/md";
import '../pagesStyles/GetInTouch.css'
import { GrSend } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const GetInTouch:React.FC = () => {
    const [formStatus, setFormStatus] = useState<Boolean>(false)
    const [formStatusMsg, setFormStatusMsg] = useState<String>('Send Message');
    const formRef = useRef<HTMLFormElement>(null)

    const sendEmailFunc = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const currentForm = formRef.current;
        // this prevents sending emails if there is no form.
        // in case currentForm cannot possibly ever be null,
        // you could alert the user or throw an Error, here
        if (currentForm == null) return;

        emailjs.sendForm('service_d4wi107', 'template_xge5djo', currentForm, {
        publicKey: 'IlKeLPTkvF_MI80sU',
      }).then(
        () => {
          setFormStatus(true);
          setFormStatusMsg('Sent Successfully');
          setTimeout(() => {
                setFormStatusMsg('Send Message');
          }, 3000)

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    }

    return(
       <div className="commonPadding" id="contact">
         <div className="gitContainer sectionPadding">
            <SectionHeader heading={"Get In Touch"} intro={"Contact Me"} />

            <div className="gitInsider">
                <div className="ttmContainer">
                    <p className="paraHeading">Talk To Me</p>
                    <a href="mailto:kattamurikowshiq@gmail.com" target="_blank" className="ttmBox">
                        <Card heading={"Email"} answer={"Kattamurikowshiq@gmail.com"} icon={MdOutlineAttachEmail} exist={true} />
                    </a>
                    <a href="https://wa.me/7036160563?text=hey%20Kattamuri" target="_blank" rel="noreferer" className="ttmBox">
                        <Card heading={"WhatsApp"} answer={"+91 70361-6XXXX"} icon={MdOutlineWhatsapp} exist={true} />
                    </a>
                    <a href="https://t.me/Kkbhai1589" className="ttmBox" target="_blank" rel="noreferer">
                        <Card heading={"Telegram"} answer={"https://t.me/Kkbhai1589"} icon={GrSend} exist={true} />
                    </a>
                </div>

                <div className="writeMessageContainer">
                    <p className="paraHeading">Write me your concerns/queries</p>

                    <form action="" className="form" ref={formRef}>
                        <div className="inputBox">
                            <label htmlFor="name" className="tinyText">Name</label>
                            <input id="name" type="text" placeholder="Enter your Name" className="para"name="from_name" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Email" className="tinyText">E-Mail</label>
                            <input id="Email" type="text" placeholder="Enter your Email" className="para" name="from_email" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Query" className="tinyText">Query</label>
                            <textarea id="Query"  name="message"
                            rows={6} placeholder="Enter your Query" className="para" />
                        </div>

                        <div className="buttonBoxForm">
                            <button className="buttonWithSvg buttonEle priFont darkBgButton sayHelloBtn" onClick={sendEmailFunc}>{formStatusMsg}<BiMessageSquareDetail className="svgIcon"/> </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
       </div>
    )
}



export default GetInTouch