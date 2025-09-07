import proj1 from "../assets/revz.png";
import proj2 from "../assets/Fitwell.png"
import proj3 from "../assets/realestate.png";
import proj4 from "../assets/gemini.png"
// import proj5 from "../assets/";


const Project = () => {
    return (
        <div className="project-section">
            <div className="project-card">
                <div className="project-photo">
                    <img src={proj1} alt="" />
                </div>
                <div className="project-content">

                    <h3>REVZ</h3>
                    <br />
                    <p>Revz is an all-inclusive bike helpline service, available 24/7 to ensure peace of mind for bikers
                        facing unexpected issues on the road. </p>
                </div>
            </div>
            <div className="project-card">
                <div className="project-photo">
                    <img src={proj2} alt="" />
                </div>
                <div className="project-content">
                    <h3>Fitwell</h3>
                    <br />
                    <p>Your fitness journey doesn't have to be alone. Our app brings you smart workouts, progress insights, and a supportive community to keep you motivated as you work toward your fitness goals. </p>
                </div>
            </div>
            <div className="project-card">
                <div className="project-photo">
                    <img src={proj3} alt="" />
                </div>
                <div className="project-content">
                    <h3>Real Estate Application</h3>
                    <br />
                    <p>This real estate web application helps users explore, list, and manage properties with ease. Built with modern technologies, it provides secure authentication, smooth navigation, and powerful features for property search and enquiries. </p>
                </div>
            </div>
            <div className="project-card">
                <div className="project-photo">
                    <img src={proj4} alt="" />
                </div>
                <div className="project-content">
                    <h3>Gemini Chat App</h3>
                    <br />
                    <p>The Gemini Chat App is an AI-powered conversational platform that allows users to interact seamlessly with Google's Gemini model. It delivers intelligent, real-time responses with a clean and user-friendly interface.</p>
                </div>
            </div>

        </div>
    )
}

export default Project;