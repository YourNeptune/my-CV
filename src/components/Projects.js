import Showcase from './Showcase'
import '../css/Projects.css'

const Projects = () => {
  return (
    <div className="Projects center">
      <div className='Projects__title'>
        <h1>Projects</h1>
        <p>Here are some baking products that I have made</p>
      </div>
      <div className="showcase">
        <Showcase />
      </div>
    </div>
  );
};

export default Projects;
