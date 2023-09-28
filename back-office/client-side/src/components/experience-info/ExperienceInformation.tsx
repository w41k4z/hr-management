/* COMPONENTS */
import React, { useState } from "react";
import Experience from "./Experience";

const ExperienceInformation = () => {
  /* HOOKS SECTION */
  const [experiences, setExperiences] = useState<
    { id: number; experience: string }[]
  >([{ id: 0, experience: "" }]);

  /* LOGIC SECTION */
  const addExperience = () => {
    setExperiences([
      ...experiences,
      { id: experiences.length + 1, experience: "" },
    ]);
  };

  const removeExperience = (index: number) => {
    const newExperiences = experiences.filter((exp) => exp.id !== index);
    setExperiences(newExperiences);
  };

  return (
    <div className="experience-info mt-5">
      <div className="row">
        <h4 className="col-md-9">Experience</h4>
        <div className="action-section btn-group col-md-2 offset-1 d-flex justify-content-between align-content-center">
          <button className="btn btn-secondary" disabled>
            Other
          </button>
          <button className="btn btn-success rounded" onClick={addExperience}>
            +
          </button>
        </div>
      </div>
      {experiences.map((experience) => (
        <Experience
          experience={experience.experience}
          onDelete={() => {
            removeExperience(experience.id);
          }}
        />
      ))}
    </div>
  );
};

export default ExperienceInformation;
