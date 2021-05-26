import "./css/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Educations from "./components/Educations";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import "./css/responsive.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Home /> */}
      <Element name="home">
        <Home />
      </Element>

      <div className="container">
        {/* <About /> */}
        <Element name="about">
          <About />
        </Element>

        {/* <Educations /> */}
        <Element name="educations">
          <Educations />
        </Element>

        {/* <Projects /> */}
        <Element name="projects">
          <Projects />
        </Element>

        {/* <Skills /> */}
        <Element name="skills">
          <Skills />
        </Element>

        {/* <Contact /> */}
        <Element name="contact">
          <Contact />
        </Element>
      </div>

      <Footer />
    </div>
  );
}

export default App;
