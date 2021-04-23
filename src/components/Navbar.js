import { useEffect, useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 600) {
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
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
};

export default Navbar;
