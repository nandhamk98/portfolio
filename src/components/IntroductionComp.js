import profilePhoto from "../resources/images/nandhakumar_trek.jpg";
import { ParticleBackground } from "./ParticleBackground";

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
          <i className="fab fa-github intro-icon"></i>{" "}
        </a>
        <a
          href="https://www.hackerrank.com/nandha_98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-hackerrank intro-icon"></i>{" "}
        </a>
        <a
          href="https://github.com/nandhamk98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin intro-icon"></i>{" "}
        </a>
        <a
          href="https://drive.google.com/file/d/1rdKzmbvfBlQVe-VGcySMZrnpCynnBE5V/view?usp=sharing"
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
