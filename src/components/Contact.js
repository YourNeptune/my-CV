import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../css/Contact.css";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="Contact">
      <h1 className="Contact__title">Contact Info</h1>
      <p className="Contact_subtitle">
        Feel free to contact me for career prospects, business services, and
        other professional inquiries!
      </p>
      <div>
        <ContactInfo
          logo={faMapMarkerAlt}
          info={{ caption: "Location", text: "Toronto, ON, Canada" }}
        />
        <ContactInfo
          logo={faEnvelope}
          info={{ caption: "Email", text: "lixuanluo@hotmail.com" }}
        />
      </div>
    </div>
  );
};

export default Contact;
