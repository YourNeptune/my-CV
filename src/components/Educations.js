import Education from "./Education";
import {
  faGraduationCap,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import '../css/Educations.css'

const Educations = () => {
  return (
    <div className="Educations center">
      <h1 className="title">Educations</h1>
      <p className="subtitle">Degrees & certificates</p>
      <div className="educations">
        <Education
          icon={faGraduationCap}
          text={{
            year: "2015 - 2020",
            school: "Carleton Univerity, Ottawa, ON",
            degree: "Bachelor Degree of Computer System Engineering",
          }}
        />
        <Education
          icon={faUniversity}
          text={{
            year: "06/30/2017 - 09/15/2017",
            school: "Le Cordon Bleu Ottawa Culinary Arts Institute",
            degree:
              "Pâtisserie Intermédiaire (Intermediate Pastry Certificate)",
          }}
        />
        <Education
          icon={faUniversity}
          text={{
            year: "07/04/2016 - 09/16/2016",
            school: "Le Cordon Bleu Ottawa Culinary Arts Institute",
            degree: "Pâtisserie de Base (Basic Pastry Certificate)",
          }}
        />
      </div>
    </div>
  );
};

export default Educations;
