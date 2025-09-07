const Skill_page = () => {
    return (
        <div className="skill-page">
            <div className="skill-page-header">
                <h1>Technical Skills</h1>
            </div>
            <div className="skill-page-section">
                <div className="skill-page-card">
                    <h1><i class="bi bi-code-slash"></i></h1>
                    <h2>Frontend Development</h2>
                    <p>HTML, CSS, JS and React JS</p>
                </div>
                <div className="skill-page-card">
                    <h1><i class="bi bi-journal-code"></i></h1>
                    <h2>Backend Development</h2>
                    <p>Node JS, Python, PHP</p>
                </div>
                <div className="skill-page-card">
                    <h1><i class="bi bi-database-fill-check"></i></h1>
                    <h2>Database</h2>
                    <p>Sql, MongoDb</p>
                </div>
                <div className="skill-page-card">
                    <h1><i class="bi bi-github"></i></h1>
                    <h2>Version Control</h2>
                    <p>Github</p>
                </div>
                <div className="skill-page-card">
                    <h1><i class="bi bi-puzzle"></i></h1>
                    <h2>Problem Solving</h2>
                    <p>Data Structures and Algorithms</p>
                </div>
                 <div className="skill-page-card">
                    <h1><i class="bi bi-flask"></i></h1>
                    <h2>Frameworks</h2>
                    <p>React JS, Express JS, Node JS</p>
                </div>
            </div>
        </div>
    )
}

export default Skill_page;