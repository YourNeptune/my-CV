import { useEffect, useState } from "react";
import "../css/Navbar.css";

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
        <a href='home'>Home</a>
        <a href='about'>About</a>
        <a href='projects'>Projects</a>
        <a href='contact'>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
