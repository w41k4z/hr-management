/* COMPONENTS */
import { useState } from "react";
import Degree from "./Degree";

const DegreeInformation = () => {
  /* HOOKS SECTION */
  const [degrees, setDegrees] = useState<
    { id: number; degree: string; grade: string }[]
  >([{ id: 0, degree: "", grade: "" }]);
  const [currentID, setCurrentID] = useState(0);

  /* LOGIC */
  const addDegree = () => {
    setDegrees([...degrees, { id: currentID + 1, degree: "", grade: "" }]);
    setCurrentID(currentID + 1);
  };

  const removeDegree = (index: number) => {
    const newDegrees = degrees.filter((degree) => degree.id !== index);
    setDegrees(newDegrees);
  };

  return (
    <div className="degree-info mt-5">
      <div className="row">
        <h4 className="col-md-3 title">Sector</h4>
        <h4 className="col-md-4 offset-1 title">Degree</h4>
        <div className="action-section btn-group col-md-2 offset-2 d-flex justify-content-between align-content-center">
          <button className="btn btn-secondary" disabled>
            Other
          </button>
          <button className="btn btn-success" onClick={addDegree}>
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
