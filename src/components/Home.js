import { Button } from "@material-ui/core";
import "../css/Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__title">
        <h1 className="Home__name">
          Lixuan <br /> Luo
        </h1>
        <Button className="resume_button" variant="contained">
          Resume
        </Button>
      </div>
    </div>
  );
};

export default Home;
