import '../componentsStyles/Navbar.css'

const Navbar:React.FC = ()=> {
    return(
        <div className="header">
            <div className="navbar">
            <h1 className="logo mediumHeading secFont ">kowshiq</h1>
            <ul className="navLinks priFont">
                <li className='activeLink'>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li><a href="https://www.amazon.in/Wizard-Problems-Mathematics-Kowshiq-Kattamuri/dp/9390447712" target='_blank'>My Book</a></li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar 