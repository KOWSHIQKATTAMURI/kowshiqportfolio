import profile from "../assets/profile.jpg";
import { LiaTelegram } from "react-icons/lia";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import "../pagesStyles/Hero.css";
const Hero: React.FC = () => {
  return (
    <div className="commonPadding blodDivPostion" id="home">
      <div className="blobDiv"></div>

      <div className="heroPage sectionPadding">
        <div className="heroDetails">
          <h1 className="largeHeading">Kowshiq Kattamuri</h1>
          <div className="aboutInShort">
            <div className="horizontalLine"></div>
            <p className="paraHeading">
              Autor, Coder, Mathematician, Biologist
            </p>
          </div>
          <p className="para heroDescription">
            Aspiring tech enthusiast trapper in a biotechnologist body. Author
            of "100 Wizard Problems of Mathematics" and a self-proclaimed math
            magician. My love for math and computer science is irrational,
            though my degree suggests otherwise. I engoy the logic in life's
            algorithms and beauty in elegant code. A paradoxical mind with a
            penchant for the peculiar.
          </p>
          <div className="socialMediaHandlers mobileSMHandlers">
            <a href="https://www.linkedin.com/in/kattamurikowshiq" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="svgIcon" />
            </a>
            <a href="https://youtube.com/@KattamuriKowshiq" target="_blank" rel="noreferrer">
              <FaYoutube className="svgIcon" />
            </a>
            <a href="https://whatsapp.com/channel/0029VaITGBX3AzNRgmw8YF3T" target="_blank" rel="noreferrer">
              <AiOutlineUsergroupAdd className="svgIcon" />
            </a>
          </div>
          <a
            href="https://t.me/Kkbhai1589"
            target="_blank"
            rel="noreferrer"
            className="buttonWithSvg buttonEle priFont darkBgButton sayHelloBtn"
          >
            Say Hello <LiaTelegram className="svgIcon" />
          </a>
        </div>
        <div className="heroProfile">
          <div className="imageOuterDiv">
            <img src={profile} alt="profilepic" />
          </div>
        </div>

        <div className="socialMediaHandlers largeScreenSMHandlers">
          <a href="https://www.linkedin.com/in/kattamurikowshiq" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="svgIcon" />
          </a>
          <a href="https://youtube.com/@KattamuriKowshiq" target="_blank" rel="noreferrer">
            <FaYoutube className="svgIcon" />
          </a>
          <a href="https://whatsapp.com/channel/0029VaITGBX3AzNRgmw8YF3T" target="_blank" rel="noreferrer">
            <AiOutlineUsergroupAdd className="svgIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
