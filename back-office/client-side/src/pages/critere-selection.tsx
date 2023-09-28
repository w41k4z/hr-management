import React, { useState } from "react"
import "../assets/css/critere.css"


const situationMatrimoniale = ["Celibataire", "Marie(e)", "Veuf(ve)"]
const genre = ["Homme", "Femme"]
const diplome = ["BACC", "DTS", "License", "Master", "Doctorat"]
const filiere = ["", "Informatique", "Marketing"]


function MyFormComponent({ index, onDelete }: { index: number; onDelete: () => void }) {

    const diplomeId = `diplome-${index}`;
    const filiereId = `filiere-${index}`;
    const coeffId = `coeff-${index}`;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor={diplomeId}>Diplome</label>
                        <select className="form-control" id={diplomeId}>
                            {diplome.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor={filiereId}>Filiere</label>
                        <select className="form-control" id={filiereId}>
                            {filiere.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor={coeffId}>Coeff</label>
                        <input
                            type="number"
                            className="form-control"
                            id={coeffId}
                        />
                    </div>
                </div>
                <div className="col-md-1">
                    <div className="form-group">
                        <label></label>
                        <button  className="form-control" id="del" onClick={onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
function AddButton({ onClick }: { onClick: () => void }) {
    return (
        <div>
            <button className="btn btn-primary" id="add-button" onClick={onClick}>
                Ajouter
            </button>
        </div>
    );
}


function MyVerticalComponent() {
    return (
        <div className="container">
            <div className="row" id="rowvertical">
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="experience">Experiences</label>
                        <textarea
                            className="form-control"
                            id="experience"
                        />
                    </div>
                </div>
            </div>
            <div className="row" id="rowvertical">
                <label id="lab">Situation Matrimoniale</label>
                {situationMatrimoniale.map((item, index) => (
                    <div key={index} className="col-md-12">
                        <div className="form-group">
                            <div id="ac" >
                                <input type="checkbox" id={`sm-${index}`} className="mr-2" />
                                <h6>{item}</h6>
                                <input type="number" style={{ maxWidth: '300px' }} id={`smn-${index}`} className="form-control" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row" id="rowvertical">
                <label id="lab">Genre</label>
                {genre.map((item, index) => (
                    <div key={index} className="col-md-12">
                        <div className="form-group">
                            <div id="ac" >
                                <input type="checkbox" id={`ge-${index}`} className="mr-2" />
                                <h6>{item}</h6>
                                <input type="number" style={{ maxWidth: '300px' }} id={`gen-${index}`} className="form-control" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function GenerateButton() {
    return (
        <div>
            <button className="btn btn-primary" id="generate-button">
                Generer et enregistrer
            </button>
        </div>
    );
}

function CritereSelection() {
    const [formCount, setFormCount] = useState(1);

    const addForm = () => {
        setFormCount(formCount + 1);
    };

    const handleDeleteForm = (indexToDelete: number) => {
        // Update the state by decrementing formCount by 1
        setFormCount(formCount - 1);
      };
    return (
        <>
            <div className="container">
                <div className="row" id="row-with-margin-top">
                    <h2>Criteres de selection</h2>
                </div>
                {[...Array(formCount)].map((_, index) => (
                    <div className="row" id="row-with-margin-top2" key={index}>
                        <MyFormComponent index={index} onDelete={() => handleDeleteForm(index)} />
                    </div>
                ))}
                <div className="row" id="row-with-margin-top4">
                    <AddButton onClick={addForm} />
                </div>
                <div className="row" id="row-with-margin-top4">
                    <MyVerticalComponent />
                </div>
                <div className="row" id="row-with-margin-top4">
                    <GenerateButton />
                </div>
            </div>
        </>
    );
}



export default CritereSelection