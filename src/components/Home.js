// import { Button } from "@material-ui/core";
import "../css/Home.css";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Home = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [`coder`, `front-end developer`, `back-end developer`],
      startDelay: 500,
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      backDelay: 2000,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="Home">
      <div className="Home__title">
        <h2>I' am</h2>
        <h1 className="Home__name">
          Lixuan <br /> Luo
        </h1>
        <span className='typedStrings' ref={typeTarget} />
        {/* <Button className="resume_button">Resume</Button> */}
      </div>
    </div>
  );
};

export default Home;
