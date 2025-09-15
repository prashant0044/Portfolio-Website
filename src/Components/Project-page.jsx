import proj1 from "../assets/revz.png"
import proj2 from "../assets/Fitwell.png"
import proj3 from "../assets/realestate.png";
import proj4 from "../assets/gemini.png"
import proj5 from "../assets/responsive.png";
import proj6 from "../assets/proj6.png";
import proj7 from "../assets/proj7.png";
import proj8 from "../assets/proj8.png";
import proj9 from "../assets/proj9.png";
import proj10 from "../assets/proj10.png";
import proj11 from "../assets/proj11.png";

const Project_page = () => {
    return (
        <div className="project-page">
            <div className="header">
                <h1>Projects</h1>
                <h3>A selection of my recent work, showcasing my skill and experience in web development.</h3>
            </div>
            <div className="project-page-content">
                <div className="project-page-card">
                    <img src={proj1} alt="project 1" />
                    <h3>REVZ</h3>
                    <p>Revz is an all-inclusive bike helpline service, available 24/7 to ensure peace of mind for bikers
                        facing unexpected issues on the road.</p>
                </div>
                <div className="project-page-card">
                    <img src={proj2} alt="project 2" />
                    <h3>Fitwell</h3>
                    <p>Your fitness journey doesn't have to be alone. Our app brings you smart workouts, progress insights, and a supportive community to keep you motivated as you work toward your fitness goals.</p>
                </div><div className="project-page-card">
                    <img src={proj3} alt="project 3" />
                    <h3>Real Estate Application</h3>
                    <p>This real estate web application helps users explore, list, and manage properties with ease. Built with modern technologies, it provides secure authentication, smooth navigation, and powerful features for property search and enquiries.</p>
                </div>
                <div className="project-page-card">
                    <img src={proj4} alt="project 4" />
                    <h3>Gemini Chat App</h3>
                    <p>The Gemini Chat App is an AI-powered conversational platform that allows users to interact seamlessly with Google's Gemini model. It delivers intelligent, real-time responses with a clean and user-friendly interface..</p>
                </div>
                <div className="project-page-card">
                    <img src={proj5} alt="project 5" />
                    <h3>Responsive Website using Bootstrap</h3>
                    <p>A modern, fully responsive landing page built with Bootstrap, featuring a clean design, smooth layout, and call-to-action sections for startups and businesses.</p>
                </div>
                <div className="project-page-card">
                    <img src={proj6} alt="project 6" />
                    <h3>Dark/ Light Mode Switcher</h3>
                    <p>A simple theme switcher project that allows users to toggle between light and dark modes seamlessly. Basically it is a project using DOM Manipulation</p>
                </div>
                <div className="project-page-card">
                    <img src={proj7} alt="project 7" />
                    <h3>Movie Finder</h3>
                    <p>A movie search application that fetches movie details using an API and displays posters with release year.</p>
                </div>
                <div className="project-page-card">
                    <img src={proj8} alt="project 8" />
                    <h3>Currency Converter</h3>
                    <p>A real-time currency conversion tool with exchange rate lookup and interactive UI.</p>
                </div>
                <div className="project-page-card">
                    <img src={proj9} alt="project 9" />
                    <h3>Country Explorer</h3>
                    <p>A search-based app that provides real-time details of countries including flag, population, capital, currency, and languages.</p>
                </div>
                <div className="project-page-card">
                    <img src={proj10} alt="project 10" />
                    <h3>Awesome Posts</h3>
                    <p>A blog-style app that displays engaging posts fetched from an API with a clean and responsive UI.</p>
                </div>
            </div>
        </div>
    )
}

export default Project_page;