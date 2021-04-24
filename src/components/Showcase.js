import {  useState } from "react";
import Carousel from "react-material-ui-carousel";
import "../css/Showcase.css";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";
import img5 from "../images/img5.jpeg";
import img6 from "../images/img6.jpeg";
import img7 from "../images/img7.jpeg";
import img8 from "../images/img8.jpeg";
import img9 from "../images/img9.jpeg";
import img10 from "../images/img10.jpeg";
import img11 from "../images/img11.jpeg";
import img12 from "../images/img12.jpeg";

const Showcase = () => {
  const [imgs] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12
  ]);

  return (
    <Carousel className="Showcase" navButtonsAlwaysVisible={true}>
      {imgs.map((img, id) => (
        <div className="Showcase__div">
          <img src={img} alt="item" />
        </div>
      ))}
    </Carousel>
  );
};

export default Showcase;
