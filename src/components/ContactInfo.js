import '../css/ContactInfo.css'

const ContactInfo = ({logo, info}) => {
    return (
      <div>
        {/* Logo */}
        <div>
          <h4>{info.caption}</h4>
          <p>{info.text}</p>
        </div>
      </div>
    );
}

export default ContactInfo
