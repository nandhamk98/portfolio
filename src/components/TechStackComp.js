import html from "../resources/svg/html-5.svg";
import css from "../resources/svg/css3.svg";
import js from "../resources/svg/javascript.svg";
import nodejs from "../resources/svg/nodejs.svg";
import mongo from "../resources/svg/mongodb.svg";
import git from "../resources/svg/git.svg";
import bootstrap from "../resources/svg/bootstrap.svg";
import react from "../resources/svg/react.svg";

export function TechStackComp() {
  return (
    <div className="techStackComp-container" id="techStackComp">
      <p className="techStackComp-header">Tech-stack familiar with</p>
      <div className="techStackComp-icons">
        <img src={html} alt="html5" />
        <img src={css} alt="css" />
        <img src={js} alt="js" />
        <img src={bootstrap} alt="bootstrap" />
        <img src={react} alt="react" />
        <img src={nodejs} alt="nodejs" />
        <img src={mongo} alt="mongo" />
        <img src={git} alt="git" />
      </div>
    </div>
  );
}
