import me from "../images/me.jpeg";
import "../css/About.css";
import Education from "./Education";

const About = () => {
  return (
    <div className="About">
      <h1 className="About__title">About Me</h1>
      <div className="About__container">
        <img src={me} alt="picture_of_myself" />
        <div className="About__text">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="About__button">
            <button>Resume</button>
          </div>
        </div>
      </div>

      <div className="About__education">
        <h4>Education</h4>
          <Education />
      </div>
    </div>
  );
};

export default About;
