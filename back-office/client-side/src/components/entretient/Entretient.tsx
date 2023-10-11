import { useEffect, useState } from "react";
import { Cv } from "../../model/CvInterface";
import { V_besoinannonce } from "../../model/V_besoinannonce";
import { h6, questionnaireTitle } from "../../assets/css/rounded-circle-adding";

const Entretient = () => {
    const [isPageLoad, setIsPageLoad] = useState<boolean>(false);

    const [Cvs, setCvs] = useState<Cv[]>([]);
    const [v_besoinannonces, setV_besoinannonces] = useState<V_besoinannonce[]>([]);

    useEffect(() => {
        if(isPageLoad === false){
            setIsPageLoad(true);
            fetch("http://localhost:8080/Cv/getAll")
                .then((response) => response.json())
                .then((data) => setCvs(data))

            fetch("http://localhost:8080/V_besoinannonce/getAll")
            .then((response) => response.json())
            .then((data) => setV_besoinannonces(data))
        }
    }, [isPageLoad]);

    const handleSelectedCv = () => {}
    const handleSelectedAnnonce = () => {}

    return (
        
        <div className="container mt-4" style={{ maxWidth: "70%" }}>
            <h2 style={questionnaireTitle}>Passer l` entretien</h2>

            <div className="containre mt-5 form-input">
                <h6 style={h6}>Cv en question</h6>
                <br />
                <select
                defaultValue={0}
                onChange={handleSelectedCv}
                className="form-control form-select"
                >
                <option disabled value={0}>
                    Sélectionnez le cv en question
                </option>
                {v_besoinannonces.map((annonce, index) => (
                    <option value={annonce.idannonce} key={annonce.idannonce}>
                    {annonce.description}
                    </option>
                ))}
                </select>
            </div>

            <br />

            <div className="containre mt-5 form-input">
                <h6 style={h6}>Sélectionnez l` annonce origine</h6>
                <br />
                <select
                defaultValue={0}
                onChange={handleSelectedAnnonce}
                className="form-control form-select"
                >
                <option disabled value={0}>
                    Sélectionnez l` annonce origine
                </option>
                {v_besoinannonces.map((annonce, index) => (
                    <option value={annonce.idannonce} key={annonce.idannonce}>
                    {annonce.description}
                    </option>
                ))}
                </select>
            </div>

            <div className="col-md-5 mt-5 offset-md-5">
                <button className="btn btn-primary">
                Embauché(e)
                </button>
            </div>

        </div>
    );
};

export default Entretient;