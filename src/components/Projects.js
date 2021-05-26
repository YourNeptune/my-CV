import Showcase from './Showcase'
import '../css/Projects.css'
import WebsiteCard from './WebsiteCard';
import backgroundImg from "../images/coffee.jpeg";
import backgroundImg1 from "../images/todo_website.png";
import backgroundImage2 from '../images/Messenger_website.png'
import backgroundImage3 from '../images/react_weather_app.png'
import backgroundImage4 from "../images/react_recipe_search.png";
import backgroundImage5 from "../images/instagram_clone.png";

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
            backgroundImg={backgroundImg1}
            title="Todo App"
            websiteUrl="https://react-todo-app-35d00.web.app/"
            githubUrl="https://github.com/YourNeptune/react-todo-app"
          />
          <WebsiteCard
            backgroundImg={backgroundImage2}
            title="Facebook Message Clone"
            websiteUrl="https://facebook-messenger-clone-48827.web.app/"
            githubUrl="https://github.com/YourNeptune/facebook-messenger-clone"
          />
          <WebsiteCard
            backgroundImg={backgroundImage3}
            title="Weather App"
            websiteUrl="https://react-weather-app-92cb6b.netlify.app/"
            githubUrl="https://github.com/YourNeptune/react-weather-app"
          />
          <WebsiteCard
            backgroundImg={backgroundImage4}
            title="Recipe Search Website"
            websiteUrl="https://react-recipe-search-16a4d0.netlify.app/"
            githubUrl="https://github.com/YourNeptune/react-recipe-search"
          />
          <WebsiteCard
            backgroundImg={backgroundImage5}
            title="Instagram Clone"
            websiteUrl="https://react-instagram-clone-bfa83.web.app/"
            githubUrl="https://github.com/YourNeptune/instagram-clone"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
