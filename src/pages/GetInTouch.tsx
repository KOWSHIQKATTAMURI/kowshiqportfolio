import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"
import { MdOutlineAttachEmail,MdOutlineWhatsapp } from "react-icons/md";
import '../pagesStyles/GetInTouch.css'
import { GrSend } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import dotenv from 'dotenv'
import { error } from "console";


const GetInTouch:React.FC = () => {
    const [formStatus, setFormStatus] = useState<Boolean>(false)
    interface FormData {
        from_name: string;
        from_email: string;
        message: string;
    }
    
    const [formData, setFormData] = useState<FormData>({
        from_name: '',
        from_email: '',
        message: ''
    })
    const [errorMsg, setErrorMsg] = useState<String>('')
    const [formStatusMsg, setFormStatusMsg] = useState<String>('Send Message');
    const formRef = useRef<HTMLFormElement>(null)

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
            
        })
    }

    const sendEmailFunc = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault();


        
        const currentForm = formRef.current;
        // this prevents sending emails if there is no form.
        // in case currentForm cannot possibly ever be null,
        // you could alert the user or throw an Error, here
        console.log(formData)
        
        if(formData.from_name == '' || formData.from_email == '' || formData.message == '') {
            setErrorMsg('*Please fill in all the fields')
            return
        }
        if(!formData.from_email.includes('@')){
            setErrorMsg('*Please enter a valid email')
            return
        }

        if (currentForm == null || currentForm === undefined) {
            return
        };
        //service_tx0don8
        emailjs.sendForm("service_d4wi107", "template_xge5djo", currentForm, {
            publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }).then(
            () => {
            setErrorMsg('')
          setFormStatus(true);
          setFormStatusMsg('Sent Successfully');
          setTimeout(() => {
                setFormStatusMsg('Send Message');
                setFormStatus(false)
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
                            <input id="name" type="text" placeholder="Enter your Name" className="para"name="from_name" onChange={onChangeHandler} />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Email" className="tinyText">E-Mail</label>
                            <input id="Email" type="text" placeholder="Enter your Email" className="para" name="from_email" onChange={onChangeHandler} />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Query" className="tinyText">Query</label>
                            <textarea id="Query"  name="message"
                            rows={6} placeholder="Enter your Query" className="para" onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => {

                                setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value
                                
                                })
                            }} />
                        </div>
                        {
                            errorMsg ? <p className="errorMsg tinyText" style={{color:'red', opacity:1}} >{errorMsg}</p>
                            : <p style={{opacity: 0}}>{errorMsg}</p>
                            
                        }
                        <div className="buttonBoxForm">
                            <button className={`buttonWithSvg buttonEle priFont darkBgButton sayHelloBtn` } 

                            style={ formStatus ? {
                                backgroundColor: 'green',
                            } : {}}
                            
                            
                            onClick={sendEmailFunc}>{formStatusMsg} {formStatus ? 
                            (
                                <BiMessageSquareDetail style={{marginLeft:'10px'}} />
                            ) : (
                                <GrSend style={{marginLeft:'10px'}} />
                            )   
                        }</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
       </div>
    )
}



export default GetInTouch