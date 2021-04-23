import "./css/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="center">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
