import resume from "../assets/Prashant_Rana_Resume.pdf";
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <div className="navbar">

                <Link to="/"><h2 className="main-name">Prashant Rana</h2></Link>
                <div className="links">
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/contact">Contact</Link>
                    <a href={resume} target="_blank" rel="noopener noreferrer"><button className="resume-button">Resume</button></a>

                </div>

            </div>
            <hr />
        </div>

    )
}
export default Navbar;