import { useState, useRef, ReactHTMLElement, useEffect, MouseEvent } from "react";
import "../componentsStyles/Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

const Navbar: React.FC = () => {
  const [openHam, setOpenHam] = useState<Boolean>(false);
  const [activeLink, setActiveLink] = useState<Boolean>(false);

  useEffect(() => {
   const closerHandler = (e:any) => {
      setOpenHam(false)
   }

   document.addEventListener('mousedown', closerHandler);

   return () => {
    document.removeEventListener('mousedown', closerHandler);
   }

  })

  return (
    <div className="header">
      <div className="navbar">
        <h1 className="logo mediumHeading secFont ">kowshiq</h1>
        <div
          className={
            openHam ? "hamburgerMenu activeHamburgerLines" : "hamburgerMenu"
          }
          onClick={() => setOpenHam((prev) => !prev)}
        >
          <div className="hamLine firstHamLine"></div>
          <div className="hamLine secondHamLine"></div>
          <div className="hamLine thirdHamLine"></div>
        </div>
        <ul
          className={
            openHam
              ? "navLinks priFont mobileMode openNavLinks"
              : "navLinks priFont mobileMode"
          }
        >
          <li>
            <Link to="#home" smooth>
              Home
            </Link>
          </li>
          <li>
            <Link to="#about" smooth>
              About
            </Link>
          </li>
          <li>
            <Link to="#skills" smooth>
              Skills
            </Link>
          </li>
          <li>
            <Link to="#project" smooth>
              Projects
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
