import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = () => {
  return (
    <div className="Education">
      {/* Font awesome icon */}
      <FontAwesomeIcon icon={faCoffee} />
      <div className="Education__text">
        <p className="Education__years">2015 - 2020</p>
        <p className="Education__school">Carleton University</p>
        <p className="Education__degree">Bachelor degree</p>
      </div>
    </div>
  );
};

export default Education;
