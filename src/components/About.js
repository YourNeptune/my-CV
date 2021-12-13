import me from "../images/me.jpeg";
import "../css/About.css";

import { Button } from "@material-ui/core";

const About = () => {
  return (
    <div className="About center">
      <div className="About__container">
        <div>
          <img src={me} alt="picture_of_myself" />
        </div>
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
              I took basic and intermediate certificate courses in Le Cordon
              Blue in Ottawa for 6 months to learn French pastry. Making
              desserts and cakes is really an enjoyable activity for me!
            </p>
            <p>
              I have developed a strong understanding of JavaScript, HTML, CSS,
              ReactJS and even more! I am a proactive recent college graduate
              from Carleton University. I had the privilege of working for
              Greencube Analytics Inc. in a frontend developer role, where I
              learned valuable professional skills such as web design,
              programming and application development. In both my academic and
              professional life, I have been consistently praised as
              hard-working by my professors and peers. Whether working on
              academic, extracurricular, or professional projects, I apply
              proven problem-solving, teamwork and creative thinking skills.
            </p>
          </div>
          <div className="About__info">
            <p>
              <span>Email: </span>
              lixuanluo@hotmail.com
            </p>
            <p>
              <span>Github: </span>
              <a
                href="https://github.com/YourNeptune"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/YourNeptune
              </a>
            </p>
          </div>
          {/* <div className='button'>
            <Button className="resume_button">Resume</Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
