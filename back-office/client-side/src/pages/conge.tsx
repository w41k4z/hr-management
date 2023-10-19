import React, { FormEvent, useEffect, useState } from "react"
import Congerestant from "../model/CongerestantInterface";
import axiosInstance from "../http-client-side/Axios";
import Prendreconge from "../model/PrendrecongeInterface";
import Terminerconge from "../model/TerminercongeInterface";


export default function Conge() {

    const typo = ["Deductible", "Non deductible"];

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
        const endpointUrl = "/V_terminerconge/getAll";
        axiosInstance
            .get(endpointUrl)
            .then((response) => {
                setTerminerconge(response.data);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []);


    // 

    const [formData, setFormData] = useState({
        employeSelect: "",
        typeCongeSelect: "0",
        debutConge: "",
        motifConge: "",
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
            motif: formData.motifConge
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



    const handleSubmit =  (e: React.FormEvent) => {
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
                                <label htmlFor="motifConge">Motif du conge</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="motifConge"
                                    value={formData.motifConge}
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
                <h2>Terminer un conge</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Personnel</th>
                            <th>Debut</th>
                            <th>Type</th>
                            <th>Motif</th>
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

