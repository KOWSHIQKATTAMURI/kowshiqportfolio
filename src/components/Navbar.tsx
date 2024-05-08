import '../componentsStyles/Navbar.css'

const Navbar:React.FC = ()=> {
    return(
        <div className="header">
            <div className="navbar">
            <h1 className="logo mediumHeading secFont ">kowshiq</h1>
            <ul className="navLinks priFont">
                <li className='activeLink'><a href="#about">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#about">Skills</a></li>
                <li><a href="#about">Portfolio</a></li>
                <li><a href="#about">Contact</a></li>
                <li><a href="https://www.amazon.in/Wizard-Problems-Mathematics-Kowshiq-Kattamuri/dp/9390447712" target='_blank'>My Book</a></li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar 