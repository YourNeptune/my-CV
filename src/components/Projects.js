import Showcase from './Showcase'
import '../css/Projects.css'
import WebsiteCard from './WebsiteCard';
import backgroundImg from "../images/coffee.jpeg";

const Projects = () => {
  return (
    <div className="Projects center">
      <div className="Projects__title">
        <h1>Projects</h1>
      </div>
      <div className="Projects__cakes">
        <div className="Projects__title">
          <h3>Cakes</h3>
          <p>Here are some baking products that I have made</p>
        </div>
        <div className="showcase">
          <Showcase />
        </div>
      </div>
      <div className="Projects__websites">
        <div className="Projects__title">
          <h3>Websites</h3>
          <p>Here are some react projects that I have made</p>
        </div>
        <div className="websites">
          <WebsiteCard
            backgroundImg={backgroundImg}
            title="Test"
            websiteUrl="https://react-todo-app-35d00.web.app/"
            githubUrl="https://github.com/YourNeptune/react-todo-app"
          />
          <WebsiteCard
            backgroundImg={backgroundImg}
            title="Test"
            websiteUrl="https://react-todo-app-35d00.web.app/"
            githubUrl="https://github.com/YourNeptune/react-todo-app"
          />
          <WebsiteCard
            backgroundImg={backgroundImg}
            title="Test"
            websiteUrl="https://react-todo-app-35d00.web.app/"
            githubUrl="https://github.com/YourNeptune/react-todo-app"
          />
          <WebsiteCard
            backgroundImg={backgroundImg}
            title="Test"
            websiteUrl="https://react-todo-app-35d00.web.app/"
            githubUrl="https://github.com/YourNeptune/react-todo-app"
          />
          <WebsiteCard
            backgroundImg={backgroundImg}
            title="Test"
            websiteUrl="https://react-todo-app-35d00.web.app/"
            githubUrl="https://github.com/YourNeptune/react-todo-app"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
