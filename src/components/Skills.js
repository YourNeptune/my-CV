import "../css/Skills.css";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="center">
        <h1 className="Skills__title title">Skills</h1>
        <p className="subtitle">
          Languages and Technologies that I have learned and applied to my
          projects
        </p>
      </div>

      <div className="skills_container">
        <Skill
          name="ReactJS"
          data={<i class="devicon-react-original colored logoSize"></i>}
        />
        <Skill
          name="JavaScript"
          data={<i class="devicon-javascript-plain colored logoSize"></i>}
        />
        <Skill
          name="Redux"
          data={<i class="devicon-redux-original colored logoSize"></i>}
        />
        <Skill
          name="HTML"
          data={<i class="devicon-html5-plain colored logoSize"></i>}
        />
        <Skill
          name="CSS"
          data={<i class="devicon-css3-plain colored logoSize"></i>}
        />
        <Skill
          name="SASS"
          data={<i class="devicon-sass-original colored logoSize"></i>}
        />
        <Skill
          name="MaterialUI"
          data={<i class="devicon-materialui-plain colored logoSize"></i>}
        />
        <Skill
          name="Bootstrap"
          data={<i class="devicon-bootstrap-plain colored logoSize"></i>}
        />
        <Skill
          name="MongoDB"
          data={<i class="devicon-mongodb-plain colored logoSize"></i>}
        />
        <Skill
          name="NodeJS"
          data={<i class="devicon-nodejs-plain colored logoSize"></i>}
        />
        <Skill
          name="Firebase"
          data={<i class="devicon-firebase-plain colored logoSize"></i>}
        />
        <Skill
          name="Git"
          data={<i class="devicon-git-plain colored logoSize"></i>}
        />
        <Skill
          name="Visual Studio Code"
          data={<i class="devicon-visualstudio-plain colored logoSize"></i>}
        />
        <Skill
          name="NPM"
          data={<i class="devicon-npm-original-wordmark colored logoSize"></i>}
        />
        <Skill
          name="AdobeXD"
          data={<i class="devicon-xd-plain colored logoSize"></i>}
        />
      </div>
    </div>
  );
};

export default Skills;
