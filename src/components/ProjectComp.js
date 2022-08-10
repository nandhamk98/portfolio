import ecom from "../resources/images/ecom.jpeg";
import zoom from "../resources/images/zoom.jpg";
import manga from "../resources/images/manga.png";

export function ProjectComp() {
  return (
    <div className="projectComp-container" id="projectComp">
      <div className="project-header">Projects</div>
      <div className="projects-container">
        <Project
          image={ecom}
          name="Rental-App"
          description="A MERN stack application which focuses on renting goods."
          github="https://github.com/nandhamk98/RentalApp_frontEnd"
          live="https://dashing-ganache-f30835.netlify.app/"
          framework={["ReactJS", "NodeJs", "ExpressJS", "MongoDB"]}
        />
        <Project
          image={zoom}
          name="Zoom-Clone"
          description="A Zoom clone app created with MERN stack and webRTC technology which can be used to send messages minimum 4 people can connect to the application"
          github="https://github.com/nandhamk98/zoomApp_frontend"
          live="https://zoom-app-namk.netlify.app/"
          framework={[
            "ReactJS",
            "NodeJs",
            "ExpressJS",
            "MongoDB",
            "WebRTC",
            "SocketIO",
          ]}
        />
        <Project
          image={manga}
          name="Manga collector"
          description="An app to store manga detail which is build with react"
          github="https://github.com/nandhamk98/manga-app"
          live="https://astonishing-gecko-4abe5f.netlify.app/"
          framework={["ReactJS", "MUI"]}
        />
      </div>
    </div>
  );
}

function Project({ image, name, description, github, live, framework }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt="ecom" className="project-image" />
      </div>
      <div className="project-content-container">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="project-btn-container">
          <a
            href={live}
            className="project-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live
          </a>
          <a
            href={github}
            className="project-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-framework">
          {framework.map((el) => (
            <p key={`${el}-name`}>{el}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
