import me from "../images/me.jpeg";
import "../css/About.css";
import Education from "./Education";
import {
  faGraduationCap,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
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
              I am also a self-taught web developer.  I have developed a strong understanding
              of JavaScript, HTML, CSS, React.js. A fun fact is that I built
              this website on my own in React.js.
            </p>
          </div>
          <div>
            <Button variant="contained" className="resume_button">
              Resume
            </Button>
          </div>
        </div>
      </div>

      <div className="About__educationContainer">
        <h4>Educations</h4>
        <div className="educations">
          <Education
            icon={faGraduationCap}
            text={{
              year: "2015 - 2020",
              school: "Carleton Univerity, Ottawa, ON",
              degree: "Bachelor Degree of Computer System Engineering",
            }}
          />
          <Education
            icon={faUniversity}
            text={{
              year: "06/30/2017 - 09/15/2017",
              school: "Le Cordon Bleu Ottawa Culinary Arts Institute",
              degree:
                "Pâtisserie Intermédiaire (Intermediate Pastry Certificate)",
            }}
          />
          <Education
            icon={faUniversity}
            text={{
              year: "07/04/2016 - 09/16/2016",
              school: "Le Cordon Bleu Ottawa Culinary Arts Institute",
              degree: "Pâtisserie de Base (Basic Pastry Certificate)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
