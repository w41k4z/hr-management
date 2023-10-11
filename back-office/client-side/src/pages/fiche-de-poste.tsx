import React, { useState, useEffect } from "react"
import axiosInstance from "../http-client-side/Axios";
import { Cv } from "../model/CvInterface";
import { Personnel } from "../model/PersonnelInterface";
import Affiliation from "../model/AffiliationInterface";

export default function FicheDePoste() {

    const [affiliations, setAffiliations] = useState<string[]>(["Option 1"]);
    const [serialNumber, setSerialNumber] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);

    const [cvs, setCvs] = useState<Cv[]>([]);
    useEffect(() => {
        const endpointUrl = "/Cv/getAll";
        axiosInstance
            .get(endpointUrl)
            .then((response) => {
                setCvs(response.data);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []);
    const [personnels, setPersonnels] = useState<Personnel[]>([]);
    useEffect(() => {
        const endpointUrl = "/Personnel/getAll";
        axiosInstance
            .get(endpointUrl)
            .then((response) => {
                setPersonnels(response.data);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []);
    const [affs, setAffs] = useState<Affiliation[]>([]);
    useEffect(() => {
        const endpointUrl = "/Affiliation/getAll";
        axiosInstance
            .get(endpointUrl)
            .then((response) => {
                setAffs(response.data);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []);

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


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const fil = formData.get("preuve")
        let nam = "";
        if (fil instanceof File) {
            nam = fil.name
        }

        const fichedeposte = {
            idcv: formData.get("qui"),
            contrat: formData.get("contrat"),
            pathcontrat: nam,
            responsabilite: formData.get("responsabilite"),
            mission: formData.get("mission"),
            idsuperieur: formData.get("superieur"),
            matricule: formData.get("matricule")
        }

        try {
            const response = await axiosInstance.post('/Fichedeposte/save', fichedeposte, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            let id = response.data['id']
            for (let i = 0; i < affs.length; i++) {
                if (formData.get("affiliation" + i) !== null) {
                    let fichedeposteaffiliation = {
                        idfichedeposte : id,
                        idaffiliation : formData.get("affiliation" + i)
                    }
                    const response2 = await axiosInstance.post('/Fichedeposteaffiliation/save', fichedeposteaffiliation, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                }
            }
            alert("Success")
        } catch (error) {

        }
    };


    return (
        <div className="container mt-4">
            <h1>Fiche de poste</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group row align-items-center mb-4">
                    <label htmlFor="qui" className="col-sm-2">Qui ?</label>
                    <div className="col-sm-7">
                        <select className="form-control" id="qui" name="qui">
                            {cvs.map((cv) => (
                                <option key={cv.id} value={cv.id}>
                                    {cv.nom + " " + cv.prenom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-group row align-items-center mb-4">
                    <label htmlFor="contrat" className="col-sm-2">Contrat</label>
                    <div className="col-sm-7">
                        <select className="form-control" id="contrat" name="contrat">
                            <option value="CDI">CDI</option>
                            <option value="CDD">CDD</option>
                            <option value="Stage">Stage</option>
                            <option value="Apprentissage">Apprentissage</option>
                        </select>
                    </div>
                    <div className="col-sm-3">
                        <input className="form-control" name="preuve"
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
                        <input required type="text" className="form-control" id="responsabilite" name="responsabilite" />
                    </div>
                </div>
                <div className="form-group row align-items-center mb-4">
                    <label htmlFor="mission-et-tache" className="col-sm-2">Mission et tâche</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="mission-et-tache" rows={4} name="mission"></textarea>
                    </div>
                </div>
                <div className="form-group row align-items-center mb-4">
                    <label htmlFor="superieur" className="col-sm-2">Supérieur</label>
                    <div className="col-sm-7">
                        <select className="form-control" id="superieur" name="superieur">
                            {personnels.map((personnel) => (
                                <option key={personnel.id} value={personnel.id}>
                                    {personnel.nom + " " + personnel.prenom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-group row align-items-center mb-4">
                    <label htmlFor="n-matricule" className="col-sm-2">
                        N matricule
                    </label>
                    <div className="col-sm-7">
                        <input required
                            type="text"
                            className="form-control"
                            id="n-matricule"
                            value={serialNumber}
                            readOnly
                            name="matricule"
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
                                            name={"affiliation" + index}
                                            className="form-control"
                                            value={affiliation}
                                            onChange={(e) => handleAffiliationChange(index, e.target.value)}
                                        >
                                            {affs.map((aff) => (
                                                <option key={aff.id} value={aff.id}>
                                                    {aff.nom}
                                                </option>
                                            ))}
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
                            <button type="submit" className="btn btn-primary">Confirmer</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}