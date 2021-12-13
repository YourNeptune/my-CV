import Showcase from "./Showcase";
import "../css/Projects.css";
import WebsiteCard from "./WebsiteCard";
import backgroundImage1 from "../images/sunnyside_landing_page.png";
import backgroundImage2 from "../images/todo_website.png";
import backgroundImage3 from "../images/react_weather_app.png";
import backgroundImage4 from "../images/react_recipe_search.png";
import backgroundImage5 from "../images/instagram_clone.png";
import backgroundImage6 from "../images/redux-todo-app.png";
import backgroundImage7 from "../images/Messenger_website.png";
import backgroundImage8 from "../images/Desktop_design.jpeg"


const Projects = () => {
  return (
    <div className="Projects center">
      <div className="Projects__title">
        <h1 className="title">Projects</h1>
      </div>
      <div className="Projects__cakes">
        <div className="Projects__title">
          <h3>Cakes</h3>
          <p className="subtitle">
            Here are some baking products that I have made
          </p>
        </div>
        <div className="showcase">
          <Showcase />
        </div>
      </div>
      <div className="Projects__websites">
        <div className="Projects__title2">
          <h3>Websites</h3>
          <p className="subtitle">
            Here are some react projects that I have made
          </p>
        </div>
        <div className="websites">
          <WebsiteCard
            backgroundImg={backgroundImage1}
            title="Sunnyside agency landing page"
            websiteUrl="https://yourneptune.github.io/Sunnyside-agency-landing-page/"
            githubUrl="https://github.com/YourNeptune/Sunnyside-agency-landing-page"
          />
          <WebsiteCard
            backgroundImg={backgroundImage2}
            title="React Todo App"
            websiteUrl="https://react-todo-app-35d00.web.app/"
            githubUrl="https://github.com/YourNeptune/react-todo-app"
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
          <WebsiteCard
            backgroundImg={backgroundImage6}
            title="Redux Todo App"
            websiteUrl="https://redux-todo-app-5e797.web.app/"
            githubUrl="https://github.com/YourNeptune/redux-todo-app"
          />
          <WebsiteCard
            backgroundImg={backgroundImage7}
            title="Facebook Message Clone"
            websiteUrl="https://facebook-messenger-clone-48827.web.app/"
            githubUrl="https://github.com/YourNeptune/facebook-messenger-clone"
          />
          <WebsiteCard
            backgroundImg={backgroundImage8}
            title="E-commerce product page"
            websiteUrl="https://ecommerce-site-941685.netlify.app/"
            githubUrl="https://github.com/YourNeptune/E-commerce-product-page"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
