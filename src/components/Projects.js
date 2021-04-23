import Showcase from './Showcase'
import '../css/Projects.css'

const Projects = () => {
  return (
    <div className="Projects center">
      <div className='Projects__title'>
        <h1>Projects</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="showcase">
        <Showcase />
      </div>
    </div>
  );
};

export default Projects;
