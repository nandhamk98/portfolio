export function ProfessionalComp() {
  return (
    <div className="professionalComp-container" id="professionalComp">
      <div className="project-header">Experience:</div>
      <div className="professional-content-container">
        {/* <div className="timeline-container">
          <div className="timeline-forward">^</div>
          <div className="timeline-forward">^</div>
          <div className="timeline"></div>
        </div> */}
        <div className="experience">
          <div className="experience-container">
            <ExperienceComp
              role="Quality Assurance Engineer"
              workplace="Informatica"
              year="year joined: 2021 Feb"
              credit="experience:1.5 years"
            />
          </div>
          <div>
            <ExperienceComp
              role="Student - Computer Science Engineering"
              workplace="kumaraguru College of Technology"
              year="year: 2016 - 2020"
              credit="CGPA : 8.2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceComp({ role, workplace, year, credit }) {
  return (
    <div className="experience-comp">
      <h2 className="experience-heading">{role}</h2>
      <p>{workplace}</p>
      <p>{year}</p>
      <p>{credit}</p>
    </div>
  );
}
