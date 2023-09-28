/* COMPONENTS */
import { useState } from "react";
import Degree from "./Degree";

const DegreeInformation = () => {
  /* HOOKS SECTION */
  const [degrees, setDegrees] = useState<
    { id: number; degree: string; grade: string }[]
  >([{ id: 0, degree: "", grade: "" }]);

  /* LOGIC */
  const addDegree = () => {
    setDegrees([...degrees, { id: degrees.length + 1, degree: "", grade: "" }]);
  };

  const removeDegree = (index: number) => {
    const newDegrees = degrees.filter((degree) => degree.id !== index);
    setDegrees(newDegrees);
  };

  return (
    <div className="degree-info mt-5">
      <div className="row">
        <h4 className="col-md-3">Sector</h4>
        <h4 className="col-md-4 offset-1">Degree</h4>
        <div className="action-section btn-group col-md-2 offset-1 d-flex justify-content-between align-content-center">
          <button className="btn btn-secondary" disabled>
            Other
          </button>
          <button className="btn btn-success rounded" onClick={addDegree}>
            +
          </button>
        </div>
      </div>
      {degrees.map((degree) => (
        <Degree
          degree={degree.degree}
          grade={degree.grade}
          onDelete={() => removeDegree(degree.id)}
        />
      ))}
    </div>
  );
};

export default DegreeInformation;
