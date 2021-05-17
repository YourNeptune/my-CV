import '../css/websiteCard.css'

const WebsiteCard = ({ backgroundImg, websiteUrl,githubUrl, title }) => {
  return (
    <div className="websiteCard" style={{ backgroundImage: `url(${backgroundImg})`  }}>
      <p>{title}</p>
      <a href={websiteUrl}>Demo</a>
      <a href={githubUrl}>View Code on Github</a>
    </div>
  );
};

export default WebsiteCard;
