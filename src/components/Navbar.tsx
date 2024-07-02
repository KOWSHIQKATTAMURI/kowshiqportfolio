import { useState, useRef, ReactHTMLElement, useEffect, MouseEvent } from "react";
import "../componentsStyles/Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

const Navbar: React.FC = () => {
  const [openHam, setOpenHam] = useState<Boolean>(false);
  const navref = useRef<HTMLDivElement>(null);

  useEffect(() => {
   const closerHandler = (e:any) => {
      if(openHam || navref.current?.contains(e.target)){
        setOpenHam(false)
      }
      else{
        console.log('Clicked inside')
      }
   }

   document.addEventListener('mousedown', closerHandler);

   return () => {
    document.removeEventListener('mousedown', closerHandler);
   }

  }, [openHam])

  return (
    <div className="header">
      <div className="navbar">
        <h1 className="logo mediumHeading secFont ">kowshiq</h1>
        <div
        /// <reference path="" />
        ref={navref}
          className={
            openHam ? "hamburgerMenu activeHamburgerLines" : "hamburgerMenu"
          }
          onClick={(e:React.MouseEvent) => {
            console.log('Hello clicked')
            setOpenHam((prev) =>prev = !prev)}
          }
        >
          <div className="hamLine firstHamLine"></div>
          <div className="hamLine secondHamLine"></div>
          <div className="hamLine thirdHamLine"></div>
        </div>
        <ul
        /// <reference path="" />
          
          className={
            openHam
              ? "navLinks priFont mobileMode openNavLinks"
              : "navLinks priFont mobileMode closeNavLinks"
          }
        >
          <li>
            <Link to="#home" smooth>
              Home
            </Link>
          </li>
          <li>
            <Link to="#experience" smooth>
              Experience
            </Link>
          </li>
          <li>
            <Link to="#tutorials" smooth>
              Tutorials
            </Link>
          </li>
          <li>
            <Link to="#testimonals" smooth>
              Testimonals
            </Link>
          </li>
          <li>
            <Link to="#contact" smooth>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="https://www.amazon.in/Wizard-Problems-Mathematics-Kowshiq-Kattamuri/dp/9390447712"
              target="_blank"
            >
              My Book
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
