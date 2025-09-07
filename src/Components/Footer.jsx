import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <footer className="footer-section">
            <hr />
            <div className="footer-content">
                <Link to="/about"><h4>About</h4></Link>
                <Link to="/projects"><h4>Projects</h4></Link>
                <Link to="/contact"><h4>Contacts</h4></Link>
            </div>
            <div className="social-handles">
                <h4><a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B6twfJ%2BhKRU6RS%2FFjuy76Qw%3D%3D" target="_blank"><i className="bi bi-linkedin"></i></a></h4>
                <h4><a href=""><i class="bi bi-instagram"></i></a></h4>
                <h4><a href="https://github.com/prashant0044?tab=repositories"  target="_blank"><i class="bi bi-github"></i></a></h4>
            </div>
            <div className="rights">
                <h4><i class="bi bi-c-circle"></i> 2025 Prashant Rana. All rights Reserved</h4>
            </div>
        </footer>
    )
}
export default Footer;
