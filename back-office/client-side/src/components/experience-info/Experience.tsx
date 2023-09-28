/* COMPONENTS */
import React from "react";

interface ExperienceProps {
  experience: string;
  onDelete: () => void;
}

const Experience = ({ experience, onDelete }: ExperienceProps) => {
  return (
    <div className="row mt-3">
      <textarea rows={2} className="col-md-9" defaultValue={experience} />
      <div className="action-section btn-group col-md-2 offset-1">
        <button className="btn btn-danger" onClick={onDelete}>
          X
        </button>
        <button className="btn btn-primary">Import</button>
      </div>
    </div>
  );
};

export default Experience;
