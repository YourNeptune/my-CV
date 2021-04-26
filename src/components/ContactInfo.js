import "../css/ContactInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = ({ logo, info }) => {
  return (
    <div className="ContactInfo">
      <FontAwesomeIcon className="contact_icon" icon={logo} size="2x" />

      <div className="contact_info">
        <h4>{info.caption}</h4>
        <p>{info.text}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
