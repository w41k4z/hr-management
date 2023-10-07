import React, { useState } from "react"

export default function FicheDePoste() {

    const [affiliations, setAffiliations] = useState<string[]>(["Option 1"]);
    const [serialNumber, setSerialNumber] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);

    const addAffiliation = () => {
        const newAffiliations = [...affiliations, ""];
        setAffiliations(newAffiliations);
    };

    const removeAffiliation = (index: number) => {
        const newAffiliations = [...affiliations];
        newAffiliations.splice(index, 1);
        setAffiliations(newAffiliations);
    };

    const handleAffiliationChange = (index: number, value: string) => {
        const newAffiliations = [...affiliations];
        newAffiliations[index] = value;
        setAffiliations(newAffiliations);
    };

    const generateSerialNumber = () => {
        // Generate a random 6-character serial number
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setSerialNumber(result);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            // Check if the selected file type is PDF or JPG
            if (selectedFile.type === "application/pdf" || selectedFile.type === "image/jpeg") {
                setFile(selectedFile);
            } else {
                alert("Please select a valid PDF or JPG file.");
            }
        }
    };

    return (
        <div className="container mt-4">
            <h1>Fiche de poste</h1>
            <form>
                <div className="form-group row align-items-center mb-4">
                    <label htmlFor="contrat" className="col-sm-2">Contrat</label>
                    <div className="col-sm-7">
                        <select className="form-control" id="contrat">
                            <option value="CDI">CDI</option>
                            <option value="CDD">CDD</option>
                            <option value="Stage">Stage</option>
                            <option value="Apprentissage">Apprentissage</option>
                        </select>
                    </div>
                    <div className="col-sm-3">
                        <input className="form-control"
                            type="file"
                            accept=".pdf, .jpg, .jpeg" // Specify accepted file types
                            required // Make the input required
                            onChange={handleFileChange} // Handle file selection
                        />
                    </div>
                </div>
                <div className="form-group row align-items-center mb-4">
                    <label htmlFor="responsabilite" className="col-sm-2">Responsabilité</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="responsabilite" />
                    </div>
                </div>
                <div className="form-group row align-items-center mb-4">
                    <label htmlFor="mission-et-tache" className="col-sm-2">Mission et tâche</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="mission-et-tache" rows={4}></textarea>
                    </div>
                </div>
                <div className="form-group row align-items-center mb-4">
                    <label htmlFor="superieur" className="col-sm-2">Supérieur</label>
                    <div className="col-sm-7">
                        <select className="form-control" id="superieur">
                            <option value="John Doe">John Doe</option>
                            <option value="Jane Smith">Jane Smith</option>
                            <option value="Mike Johnson">Mike Johnson</option>
                            <option value="Emily Davis">Emily Davis</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row align-items-center mb-4">
                    <label htmlFor="n-matricule" className="col-sm-2">
                        N matricule
                    </label>
                    <div className="col-sm-7">
                        <input
                            type="text"
                            className="form-control"
                            id="n-matricule"
                            value={serialNumber}
                            readOnly
                        />
                    </div>
                    <div className="col-sm-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={generateSerialNumber}
                        >
                            Générer
                        </button>
                    </div>
                </div>
                <div className="form-group row align-items-center mb-4">
                    <label htmlFor="affiliation" className="col-sm-2">
                        Affiliation
                    </label>
                    <div className="col-sm-1">
                        <button type="button" className="btn btn-success ml-2" onClick={addAffiliation}>
                            +
                        </button>
                    </div>
                    <div className="col-sm-9">
                        <div className="container">
                            {affiliations.map((affiliation, index) => (
                                <div className="row mb-1">
                                    <div className="col-sm-6" key={index}>
                                        <select
                                            className="form-control"
                                            value={affiliation}
                                            onChange={(e) => handleAffiliationChange(index, e.target.value)}
                                        >
                                            <option value="Option 1">Option 1</option>
                                            <option value="Option 2">Option 2</option>
                                            <option value="Option 3">Option 3</option>
                                        </select>
                                    </div>
                                    <div typeof="button" className="col-sm-1">
                                        <button
                                            type="button"
                                            className="btn btn-danger ml-2"
                                            onClick={() => removeAffiliation(index)}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary">Confirmer</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}