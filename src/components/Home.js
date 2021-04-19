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
        <button className='Home__button'>Resume</button>
      </div>
    </div>
  );
};

export default Home;
