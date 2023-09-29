/* COMPONENTS */
import React, { useState } from "react";

interface ExperienceProps {
  id: number;
  experience: string;
  onDelete: () => void;
  onUpdate: (id: number, newValue: string) => void;
}

const Experience = ({
  id,
  experience,
  onDelete,
  onUpdate,
}: ExperienceProps) => {
  const [currentExperience, setCurrentExperience] = useState(experience);

  return (
    <div className="row mt-3">
      <textarea
        // rows={2}
        className="col-6"
        defaultValue={currentExperience}
        onChange={(event) => {
          setCurrentExperience(event.target.value);
          onUpdate(id, event.target.value);
        }}
      />
      <div className="action-section btn-group col-5 offset-1">
        <button className="btn btn-danger" onClick={onDelete}>
          X
        </button>
        <button className="btn btn-outline-secondary">Import</button>
      </div>
    </div>
  );
};

export default Experience;
