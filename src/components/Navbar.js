import { useEffect, useState } from "react";
import "../css/Navbar.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Home from "./Home";

const Navbar = ({}) => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Nav ${scroll ? "nav_scroll" : "nav_home"} `}>
      {/* Icon */}
      <div className="Nav__items">
        <Link to="home" spy={true} smooth={true} duration={500}>
          Home
        </Link>

        <Link to="about" spy={true} smooth={true} duration={500}>
          About
        </Link>

        <Link to="projects" spy={true} smooth={true} duration={500}>
          Projects
        </Link>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
