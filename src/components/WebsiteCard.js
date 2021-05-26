import "../css/websiteCard.css";

const WebsiteCard = ({ backgroundImg, websiteUrl, githubUrl, title }) => {
  return (
    <div
      className="websiteCard"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="cardContent">
        <p>{title}</p>
        <div className="cardLinks">
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
