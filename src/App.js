import "./css/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <div className='cv'>
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
