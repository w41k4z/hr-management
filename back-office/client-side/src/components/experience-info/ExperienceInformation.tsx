/* COMPONENTS */
import React, { useState } from "react";
import Experience from "./Experience";

const ExperienceInformation = () => {
  /* HOOKS SECTION */
  const [experiences, setExperiences] = useState<
    { id: number; experience: string }[]
  >([{ id: 0, experience: "" }]);
  const [currentID, setCurrentID] = useState(0);

  /* LOGIC SECTION */
  const addExperience = () => {
    setExperiences([...experiences, { id: currentID + 1, experience: "" }]);
    setCurrentID(currentID + 1);
  };

  const removeExperience = (index: number) => {
    const newExperiences = experiences.filter((exp) => exp.id !== index);
    setExperiences(newExperiences);
  };

  const handleExpFieldChange = (id: number, value: string) => {
    const newExperiences = experiences.map((exp) => {
      if (exp.id === id) {
        return { ...exp, experience: value };
      }
      return exp;
    });
    setExperiences(newExperiences);
  };

  return (
    <div className="experience-info mt-5">
      <section className="row">
        <div className="col-md-7">
          <div className="row">
            <h4 className="col-6 title">Experience</h4>
            <div className="action-section btn-group col-5 offset-1 d-flex justify-content-between align-content-center">
              <button className="btn btn-secondary" disabled>
                Other
              </button>
              <button className="btn btn-success" onClick={addExperience}>
                +
              </button>
            </div>
          </div>
          {experiences.map((experience) => (
            <Experience
              key={experience.id}
              id={experience.id}
              experience={experience.experience}
              onDelete={() => {
                removeExperience(experience.id);
              }}
              onUpdate={handleExpFieldChange}
            />
          ))}
        </div>
        <div className="col-md-5 d-flex flex-column justify-content-end align-items-end">
          <button className="btn btn-lg btn-secondary">Send information</button>
        </div>
      </section>
    </div>
  );
};

export default ExperienceInformation;
