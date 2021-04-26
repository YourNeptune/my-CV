import { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-scroll";

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
      <div className="Nav__items">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>

        <Link to="about" spy={true} smooth={true} duration={500}>
          About
        </Link>

        <Link to="educations" spy={true} smooth={true} duration={500}>
          Educations
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
