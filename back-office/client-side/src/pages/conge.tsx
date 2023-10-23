import React, { FormEvent, useEffect, useState } from "react"
import Congerestant from "../model/CongerestantInterface";
import axiosInstance from "../http-client-side/Axios";
import Prendreconge from "../model/PrendrecongeInterface";
import Terminerconge from "../model/TerminercongeInterface";
import { VPersonnel } from "../model/VpersonnelInterface";


export default function Conge() {

    const typo = ["Deductible", "Non deductible"];

    const [vpersonnels, setVpersonnel] = useState<VPersonnel[]>([]);
    useEffect(() => {
        const endpointUrl = "/V_personnel/getAll";
        axiosInstance
            .get(endpointUrl)
            .then((response) => {
                setVpersonnel(response.data);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []);

    const [congerestants, setCongerestant] = useState<Congerestant[]>([]);
    useEffect(() => {
        const endpointUrl = "/V_congerestant/getAll";
        axiosInstance
            .get(endpointUrl)
            .then((response) => {
                setCongerestant(response.data);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []);
    const [prendreconges, setPrendreconge] = useState<Prendreconge[]>([]);
    useEffect(() => {
        const endpointUrl = "/V_prendreconge/getAll";
        axiosInstance
            .get(endpointUrl)
            .then((response) => {
                setPrendreconge(response.data);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []);
    const [terminerconges, setTerminerconge] = useState<Terminerconge[]>([]);
    useEffect(() => {
        const endpointUrl = "/V_terminerconge/getAllByEtat?etat=2";
        axiosInstance
            .get(endpointUrl)
            .then((response) => {
                setTerminerconge(response.data);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []);
    const [terminercongesvsup, setTerminercongevsup] = useState<Terminerconge[]>([]);
    useEffect(() => {
        const endpointUrl = "/V_terminerconge/getAllByEtat?etat=0";
        axiosInstance
            .get(endpointUrl)
            .then((response) => {
                setTerminercongevsup(response.data);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []);
    const [terminercongesvrh, setTerminercongerh] = useState<Terminerconge[]>([]);
    useEffect(() => {
        const endpointUrl = "/V_terminerconge/getAllByEtat?etat=1";
        axiosInstance
            .get(endpointUrl)
            .then((response) => {
                setTerminercongerh(response.data);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []);



    // 

    const [formData, setFormData] = useState({
        employeSelect: "1",
        typeCongeSelect: "0",
        debutConge: "",
        motifConge: "",
        finConge: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const sendDataToServer = async () => {
        let debutconge = {
            idpersonnel: formData.employeSelect,
            type: formData.typeCongeSelect,
            debut: formData.debutConge,
            motif: formData.motifConge,
            fin: formData.finConge,
            etat: 0
        }
        console.log(debutconge)
        try {
            const response = await axiosInstance.post('/Debutconge/save', debutconge, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
        catch (error) {
        }
    };



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendDataToServer();
        window.location.reload();
    };


    const handleTerminerClick = async (event: FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const debutStr = formData.get("debut") as string;
        const finStr = formData.get("fin") as string;
        const debutDate = new Date(debutStr);
        const finDate = new Date(finStr);
        const timeDifference = finDate.getTime() - debutDate.getTime();
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const finconge = {
            iddebut: formData.get("iddebut"),
            fin: finStr,
            duree: daysDifference
        };

        try {
            const response = await axiosInstance.post('/Finconge/save', finconge, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            window.location.reload();
        } catch (error) {
            // Handle any errors, e.g., log or display an error message
        }
    };


    //
    const [formData1, setFormData1] = useState({ id: '', debut: '', idpersonnel: '', motif: '', type: '', fin: '', supervisorId: '' });

    const handleFormSubmit1 = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the form data
        const form = event.target as HTMLFormElement;
        const formData1 = new FormData(form);
        const formDataObject1: { [key: string]: string } = {};
        formData1.forEach((value, key) => {
            formDataObject1[key] = value as string;
        });

        let debutconge = {
            id: formDataObject1.id,
            debut: formDataObject1.debut,
            idpersonnel: formDataObject1.idpersonnel,
            motif: formDataObject1.motif,
            type: formDataObject1.type,
            fin: formDataObject1.fin,
            etat: 1
        }
        // console.log(debutconge)
        try {
            const response = await axiosInstance.post('/Debutconge/save', debutconge, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            window.location.reload();
        }
        catch (error) {
        }

        // console.log('Form Data:', formDataObject1);
    };
    // 
    // 
    const [formData2, setFormData2] = useState({ id: '', debut: '', idpersonnel: '', motif: '', type: '', fin: ''});

    const handleFormSubmit2 = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the form data
        const form = event.target as HTMLFormElement;
        const formData2 = new FormData(form);
        const formDataObject2: { [key: string]: string } = {};
        formData2.forEach((value, key) => {
            formDataObject2[key] = value as string;
        });

        let debutconge = {
            id: formDataObject2.id,
            debut: formDataObject2.debut,
            idpersonnel: formDataObject2.idpersonnel,
            motif: formDataObject2.motif,
            type: formDataObject2.type,
            fin: formDataObject2.fin,
            etat: 2
        }
        // console.log(debutconge)
        try {
            const response = await axiosInstance.post('/Debutconge/save', debutconge, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            window.location.reload();
        }
        catch (error) {
        }

        // console.log('Form Data:', formDataObject1);
    };

    const [formData3, setFormData3] = useState({ id: ''});

    const handleFormSubmit3 = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the form data
        const form = event.target as HTMLFormElement;
        const formData3 = new FormData(form);
        const formDataObject3: { [key: string]: string } = {};
        formData3.forEach((value, key) => {
            formDataObject3[key] = value as string;
        });
        try {
            const response = await axiosInstance.post('/Debutconge/deleteById/'+formDataObject3.id,{
            });
            window.location.reload();
        }
        catch (error) {
        }

        // console.log('Form Data:', formDataObject1);
    };
    // /deleteById/{id}


    return (
        <div className="container">
            <h1 className="mt-4">Conge</h1>
            <section className="mb-4 border p-4">
                <h2>Commencer un conge</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="employeSelect">Employe</label>
                                <select
                                    className="form-control"
                                    id="employeSelect"
                                    value={formData.employeSelect}
                                    onChange={handleChange}
                                >
                                    {prendreconges.map((prendreconge) => (
                                        <option
                                            key={prendreconge.idpersonnel}
                                            value={prendreconge.idpersonnel}
                                        >
                                            {prendreconge.nom + " " + prendreconge.prenom}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="typeCongeSelect">Type de conge</label>
                                <select
                                    className="form-control"
                                    id="typeCongeSelect"
                                    value={formData.typeCongeSelect}
                                    onChange={handleChange}
                                >
                                    <option value="0">Deductible</option>
                                    <option value="1">Non deductible</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="motifConge">Motif du conge</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="motifConge"
                                    value={formData.motifConge}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="debutConge">Debut de conge</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="debutConge"
                                    value={formData.debutConge}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="finConge">Fin de conge</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="finConge"
                                    value={formData.finConge}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ marginLeft: "85%" }}>
                                Valider
                            </button>
                        </div>
                    </div>
                </form>
            </section>
            <section className="mb-4 border p-4">
                <h2>Valider Superieur</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Personnel</th>
                            <th>Debut</th>
                            <th>Type</th>
                            <th>Motif</th>
                            <th>Fin Suppose</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {terminercongesvsup.map((terminerconge) => (
                            <tr key={terminerconge.iddebut}>
                                <td>{terminerconge.nom + " " + terminerconge.prenom}</td>
                                <td>{terminerconge.debut.toString()}</td>
                                <td>{typo[terminerconge.type]}</td>
                                <td>{terminerconge.motif}</td>
                                <td>{terminerconge.fin.toString()}</td>
                                <td>
                                    <form onSubmit={handleFormSubmit1}>
                                        <div className="d-flex align-items-center">
                                            <input type="hidden" name="id" value={terminerconge.iddebut} />
                                            <input type="hidden" name="debut" value={terminerconge.debut.toString()} />
                                            <input type="hidden" name="idpersonnel" value={terminerconge.idpersonnel} />
                                            <input type="hidden" name="motif" value={terminerconge.motif} />
                                            <input type="hidden" name="type" value={terminerconge.type} />
                                            <input type="hidden" name="fin" value={terminerconge.fin.toString()} />
                                            <select
                                                className="form-control"
                                                id="supSelect"
                                                name="supervisorId"
                                            >
                                                {vpersonnels.map((vpersonnel) => (
                                                    <option
                                                        key={vpersonnel.id}
                                                        value={vpersonnel.id}
                                                    >
                                                        {vpersonnel.nom + " " + vpersonnel.prenom}
                                                    </option>
                                                ))}
                                            </select>
                                            <button type="submit" className="btn btn-primary" style={{ marginLeft: "10px" }}>Valider Superieur</button>
                                        </div>
                                    </form>
                                </td>
                                <td>
                                    <form onSubmit={handleFormSubmit3}>
                                        <div className="d-flex align-items-center">
                                            <input type="hidden" name="id" value={terminerconge.iddebut} />
                                            <button type="submit" className="btn btn-primary" style={{ marginLeft: "10px" }}>Refuser Superieur</button>
                                        </div>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section className="mb-4 border p-4">
                <h2>Valider RH</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Personnel</th>
                            <th>Debut</th>
                            <th>Type</th>
                            <th>Motif</th>
                            <th>Fin Suppose</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {terminercongesvrh.map((terminerconge) => (
                            <tr key={terminerconge.iddebut}>
                                <td>{terminerconge.nom + " " + terminerconge.prenom}</td>
                                <td>{terminerconge.debut.toString()}</td>
                                <td>{typo[terminerconge.type]}</td>
                                <td>{terminerconge.motif}</td>
                                <td>{terminerconge.fin.toString()}</td>
                                <td>
                                <form onSubmit={handleFormSubmit2}>
                                        <div className="d-flex align-items-center">
                                            <input type="hidden" name="id" value={terminerconge.iddebut} />
                                            <input type="hidden" name="debut" value={terminerconge.debut.toString()} />
                                            <input type="hidden" name="idpersonnel" value={terminerconge.idpersonnel} />
                                            <input type="hidden" name="motif" value={terminerconge.motif} />
                                            <input type="hidden" name="type" value={terminerconge.type} />
                                            <input type="hidden" name="fin" value={terminerconge.fin.toString()} />
                                            <button type="submit" className="btn btn-primary" style={{ marginLeft: "10px" }}>Valider RH</button>
                                        </div>
                                    </form>
                                </td>
                                <td>
                                    <form onSubmit={handleFormSubmit3}>
                                        <div className="d-flex align-items-center">
                                            <input type="hidden" name="id" value={terminerconge.iddebut} />
                                            <button type="submit" className="btn btn-primary" style={{ marginLeft: "10px" }}>Refuser RH</button>
                                        </div>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section className="mb-4 border p-4">
                <h2>Terminer un conge</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Personnel</th>
                            <th>Debut</th>
                            <th>Type</th>
                            <th>Motif</th>
                            <th>Fin Suppose</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {terminerconges.map((terminerconge) => (
                            <tr key={terminerconge.iddebut}>
                                <td>{terminerconge.nom + " " + terminerconge.prenom}</td>
                                <td>{terminerconge.debut.toString()}</td>
                                <td>{typo[terminerconge.type]}</td>
                                <td>{terminerconge.motif}</td>
                                <td>{terminerconge.fin.toString()}</td>
                                <td>
                                    <form onSubmit={handleTerminerClick}>
                                        <div className="d-flex align-items-center">
                                            <input type="hidden" name="iddebut" value={terminerconge.iddebut} />
                                            <input type="hidden" name="debut" value={terminerconge.debut.toString()} />
                                            <input type="date" name="fin" className="form-control date-input" />
                                            <button type="submit" className="btn btn-primary" style={{ marginLeft: "10px" }}>Terminer</button>
                                        </div>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section className="mb-4 border p-4">
                <h2>Reste conge</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Personnel</th>
                            <th>Reste</th>
                        </tr>
                    </thead>
                    <tbody>
                        {congerestants.map((congerestant) => (
                            <tr>
                                <td>{congerestant.nom + " " + congerestant.prenom}</td>
                                <td>{congerestant.reste}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>



    )
}

