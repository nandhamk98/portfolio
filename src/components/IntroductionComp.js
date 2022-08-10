import profilePhoto from "../resources/images/nandhakumar_trek.jpg";
import { ParticleBackground } from "./ParticleBackground";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

export function IntroductionComp() {
  return (
    <div className="introduction-container" id="introductionComp">
      <ParticleBackground />
      <div className="introduction-content">
        <p className="introduction-name">
          {"Hi "}
          <span className="handshake">👋</span>
          <br />
          I'm NandhaKumar
        </p>
        <p className="introduction-about">A MERN Full Stack Developer</p>
        <a
          href="https://github.com/nandhamk98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="intro-icon" />{" "}
        </a>
        <a
          href="https://www.hackerrank.com/nandha_98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faHackerrank} className="intro-icon" />{" "}
        </a>
        <a
          href="https://github.com/nandhamk98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="intro-icon" />{" "}
        </a>
        <a
          href="https://drive.google.com/drive/folders/16hHzVl6D_XoKWPMLfx3geYVGRD0Ng-lx?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="intro-resume"
        >
          Resume
        </a>
      </div>
      <div className="introduction-image">
        <img
          src={profilePhoto}
          alt="profilePhoto"
          className="introduction-photo"
          height="340px"
          width="190px"
        />
      </div>
    </div>
  );
}
