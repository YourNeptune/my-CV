import me from "../images/me.jpeg";
import "../css/About.css";

import { Button } from "@material-ui/core";

const About = () => {
  return (
    <div className="About center">
      <div className="About__container">
        <img src={me} alt="picture_of_myself" />
        <div className="About__text">
          <h3>Hello! I'm Lixuan Luo, I love coding and baking.</h3>
          <div>
            <p>
              I am passionate about self-development and self-improvement in my
              personal life. I'm always looking to challenge myself and learn
              new things. After graduating with a bachelor's in computer system
              engineering, I moved to Toronto to start a new career.
            </p>
            <p>
              I took 6-month certificate course in Le Cordon Blue in Ottawa to
              learn French pastry. Making desserts and cakes is really a
              enjoyable activity for me!
            </p>
            <p>
              I am also a self-taught web developer. I have developed a strong
              understanding of JavaScript, HTML, CSS, React.js. A fun fact is
              that I built this website on my own in React.js.
            </p>
          </div>
          <div>
            <Button variant="contained" className="resume_button">
              Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
