import profilephoto from "../assets/profilephoto.jpg"

const Hero = () => {
    return (
        <div className="hero-section">

            <div className="profile-photo">
                <img src={profilephoto} />
                <div className="content">
                    <h1>Prashant Rana</h1>
                    <h4>Full Stack Web Developer</h4>
                </div>
            </div>

            <div className="about-section">
                <h2>About Me</h2>
                <div className="about-content">
                    <p>I'm a passionate full-stack web developer with a strong foundation in creating dynamic and responsive web applications. My expertise spans both front-end and back-end development, allowing me to bring a holistic approach to every project. I thrive on challenges and am always eager to learn new technologies and techniques to enhance my skills and deliver exceptional results.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;