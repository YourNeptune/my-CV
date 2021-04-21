
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/Education.css'

const Education = ({icon, text}) => {
  return (
    <div className="Education">
      <FontAwesomeIcon className="Education__icon" icon={icon} size="3x" />
      <div className="Education__text">
        <p className="years">{text.year}</p>
        <p className="school">{text.school}</p>
        <p className="degree">{text.degree}</p>
      </div>
    </div>
  );
};

export default Education;
