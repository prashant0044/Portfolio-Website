import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar"
import Project from "./Components/Projects";
import Skills from "./Components/Skills";
// pages
import About from "./Components/About-page";
import Project_page from "./Components/Project-page";
import Skill_page from "./Components/Skills-page";
import Contact_page from "./Components/Contact-page";

function App() {
  return (
    <Router>
      <div className="main-div">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Project />
            <Skills />
          </>}>

          </Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Project_page />}></Route>
          <Route path="/skills" element={<Skill_page />}></Route>
          <Route path="/contact" element={<Contact_page />}></Route>
        </Routes>


        <Footer />

      </div>
    </Router>

  )
}

export default App;
