import profile from "../assets/profilephoto.jpg";

const About = () => {
    return (
        <div className="about-page-section">
            <div className="header-section">
                <img src={profile} alt="Profile Picture" />
                <h1>Prashant Rana</h1>
                <h4>Full Stack Web Developer</h4>
                <h4>Based in New Delhi, INDIA</h4>
                <p>I'm a passionate full-stack web developer with a strong foundation in creating dynamic and responsive web applications. My expertise spans both front-end and back-end development, allowing me to bring a holistic approach to every project. I thrive on challenges and am always eager to learn new technologies and techniques to enhance my skills and deliver exceptional results.</p>
            </div>

            <div className="about-page-skill-section">
                <h1>Skills</h1>
                <div className="about-page-skill-card">
                    <h2>JavaScript</h2>
                </div>
                <div className="about-page-skill-card">
                    <h2>HTML</h2>
                </div>
                <div className="about-page-skill-card">
                    <h2>CSS</h2>
                </div>
                <div className="about-page-skill-card">
                    <h2>React</h2>
                </div>
                <div className="about-page-skill-card">
                    <h2>Python</h2>
                </div>
                <div className="about-page-skill-card">
                    <h2>DBMS</h2>
                </div>
                <div className="about-page-skill-card">
                    <h2>C/C++</h2>
                </div>
            </div>
            <div className="about-page-experience-section">
                <h1>Experience</h1>
                <h3><i class="bi bi-briefcase"></i>  Web Development Intern at IBM</h3>
                <p>May 2024 - Aug 2024</p>

            </div>
            <div className="about-page-education-section">
                <h1>Education</h1>
                <h3><i class="bi bi-mortarboard-fill"></i> Bachelor of Computer Application, Vivekananda Institute of Professional Studies, GGSIPU, New Delhi</h3>
                <h4>2022 - 2025</h4>
            </div>
        </div>
    )
}


export default About;