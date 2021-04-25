import "./css/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Home /> */}
      <Element name="home">
        <Home />
      </Element>

      {/* <About /> */}
      <Element name="about">
        <About />
      </Element>

      {/* <Projects /> */}
      <Element name="projects">
        <Projects />
      </Element>

      {/* <Contact /> */}
      <Element name="contact">
        <Contact />
      </Element>

      <Footer/>
    </div>
  );
}

export default App;
