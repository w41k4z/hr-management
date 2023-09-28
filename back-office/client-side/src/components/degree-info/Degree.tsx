import { useState } from "react";

interface DegreeProps {
  degree: string;
  grade: string;
  onDelete: () => void;
}

const Degree = ({ degree, grade, onDelete }: DegreeProps) => {
  const [degreeValue, setDegreeValue] = useState<string>(degree);
  const [gradeValue, setGradeValue] = useState<string>(grade);

  return (
    <div className="row mt-3">
      <input
        type="text"
        className="col-md-3 form-control-sm"
        defaultValue={degreeValue}
      />
      <input
        type="text"
        className="col-md-4 offset-1 form-control-sm"
        defaultValue={gradeValue}
      />
      <div className="btn-group col-md-2 offset-1">
        <button className="btn btn-danger" onClick={onDelete}>
          X
        </button>
        <button className="btn btn-primary">Import</button>
      </div>
    </div>
  );
};

export default Degree;
