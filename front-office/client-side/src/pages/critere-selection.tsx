import React, { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "../assets/css/critere.css";
import Filiere from '../model/FiliereInterface';
import Grade from '../model/GradeInterface';
import axiosInstance from '../http-client-side/Axios';

const situationMatrimoniale = ["Celibataire", "Marie(e)", "Veuf(ve)"]
const genre = ["Homme", "Femme"]


// Define the type for your form data
type FormData = {
    sgrade: string;
    sfiliere: string;
    scoeff: string;
};

type FormData2 = {
    experiences: string;
    sitmat: string[];
    gen: string[];
}

// Child Component
interface ChildProps {
    formData: FormData;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onDelete: () => void;
}

function ChildComponent({
    formData,
    onInputChange,
    onSelectChange,
    onDelete,
}: ChildProps) {
    const [filieres, setFilieres] = useState<Filiere[]>([]);
    useEffect(() => {
        const endpointUrl = '/Filiere/getAll';
        axiosInstance.get(endpointUrl)
            .then((response) => {
                setFilieres(response.data);
            })
            .catch((error) => {
                console.error('Error fetching services:', error);
            });
    }, []);
    const [grades, setGrades] = useState<Grade[]>([]);
    useEffect(() => {
        const endpointUrl = '/Grade/getAll';
        axiosInstance.get(endpointUrl)
            .then((response) => {
                setGrades(response.data);
            })
            .catch((error) => {
                console.error('Error fetching services:', error);
            });
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Diplome</label>
                        <select
                            name="sgrade"
                            value={formData.sgrade}
                            onChange={onSelectChange}
                            className="form-control"
                        >
                            {grades.map((grade) => (
                                <option key={grade.id} value={grade.id}>
                                    {grade.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Filiere</label>

                        <select
                            name="sfiliere"
                            value={formData.sfiliere}
                            onChange={onSelectChange}
                            className="form-control"
                        >
                            {filieres.map((filiere) => (
                                <option key={filiere.id} value={filiere.id}>
                                    {filiere.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <label >Coeff</label>
                        <input
                            type="text"
                            name="scoeff"
                            value={formData.scoeff}
                            onChange={onInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <label></label>

                        <button className="form-control" id="del" type="button" onClick={onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Parent Component
export default function CritereSelection() {

    const [formDataList, setFormDataList] = useState<FormData[]>([
        {
            sgrade: '1',
            sfiliere: '1',
            scoeff: '0',
        },
    ]);

    const [formData2, setFormData2] = useState<FormData2>({
        experiences: '',
        sitmat: [],
        gen: [],
    });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { name, value } = event.target;
        setFormDataList((prevDataList) => {
            const newDataList = [...prevDataList];
            newDataList[index] = {
                ...newDataList[index],
                [name]: value,
            };
            return newDataList;
        });
    };

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
        index: number
    ) => {
        const { name, value } = event.target;
        setFormDataList((prevDataList) => {
            const newDataList = [...prevDataList];
            newDataList[index] = {
                ...newDataList[index],
                [name]: value,
            };
            return newDataList;
        });
    };

    const handleexperiencesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setFormData2({
            ...formData2,
            experiences: event.target.value,
        });
    };

    const handlesitmatChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setFormData2({
                ...formData2,
                sitmat: [...formData2.sitmat, value],
            });
        } else {
            setFormData2({
                ...formData2,
                sitmat: formData2.sitmat.filter((item) => item !== value),
            });
        }
    };

    const handlegenChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setFormData2({
                ...formData2,
                gen: [...formData2.gen, value],
            });
        } else {
            setFormData2({
                ...formData2,
                gen: formData2.gen.filter((item) => item !== value),
            });
        }
    };

    const handleAddChild = () => {
        setFormDataList((prevDataList) => [
            ...prevDataList,
            {
                sgrade: '1',
                sfiliere: '1',
                scoeff: '',
            },
        ]);
    };

    const handleRemoveChild = (index: number) => {
        setFormDataList((prevDataList) => {
            const newDataList = [...prevDataList];
            newDataList.splice(index, 1);
            return newDataList;
        });
    };

    const navigate = useNavigate();

    const location = useLocation();
    const f1 = location.state?.formData || {};


    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/offre/annonce', { state: { formDataList, formData2, f1 } });
    };

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <div className="row" id="row-with-margin-top">
                    <h2>Criteres de selection</h2>
                </div>
                {formDataList.map((formData, index) => (
                    <div className="row" id="row-with-margin-top2" key={index}>
                        <ChildComponent
                            formData={formData}
                            onInputChange={(event) => handleInputChange(event, index)}
                            onSelectChange={(event) => handleSelectChange(event, index)}
                            onDelete={() => handleRemoveChild(index)}
                        />
                    </div>
                ))}
                <div className="row" id="row-with-margin-top4">
                    <div>
                        <button className="btn btn-primary" id="add-button" type="button" onClick={handleAddChild}>
                            Add
                        </button>
                    </div>
                </div>
                <div className="row" id="row-with-margin-top4">
                    {/* New Section */}
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="experience">Experiences</label>
                            <textarea
                                name="experience"
                                className="form-control"
                                id="experience"
                                value={formData2.experiences}
                                onChange={handleexperiencesChange}
                                rows={4}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label id="lab">Situation Matrimoniale</label>
                        {situationMatrimoniale.map((item, index) => (
                            <div key={index} className="col-md-12">
                                <div className="form-group">
                                    <div id="ac" >
                                        <input type="checkbox" id={`sm-${index}`} className="mr-2"
                                            checked={formData2.sitmat.includes(item)}
                                            onChange={handlesitmatChange}
                                            value={item}
                                        />
                                        <h6>{item}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-12">
                        <label id="lab">Genre</label>
                        {genre.map((item, index) => (
                            <div key={index} className="col-md-12">
                                <div className="form-group">
                                    <div id="ac" >
                                        <input type="checkbox" id={`ge-${index}`} className="mr-2"
                                            checked={formData2.gen.includes(item)}
                                            onChange={handlegenChange}
                                            value={item}
                                        />
                                        <h6>{item}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row" id="row-with-margin-top4">
                        <div>
                            <button className="btn btn-primary" id="generate-button" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

