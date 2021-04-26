import { Button } from "@material-ui/core";
import "../css/Home.css";


const Home = () => {
  return (
    <div className="Home">
      <div className="Home__title">
        <h1 className="Home__name">
          Lixuan <br /> Luo
        </h1>
        <Button className="resume_button" >
          Resume
        </Button>
      </div>
    </div>
  );
};

export default Home;
