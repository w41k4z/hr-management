import { useEffect, useState } from "react";
import { Cv } from "../../model/CvInterface";
import { V_besoinannonce } from "../../model/V_besoinannonce";
import { h6, EmploymentTitle } from "./EmploymentCSS";
import { Fonction } from "../../model/FonctionInterface";
import { Personnel } from "../../model/PersonnelInterface";
import axiosInstance from "../../http-client-side/Axios";

const Employment = () => {
    const [isPageLoad, setIsPageLoad] = useState<boolean>(false);

    const [Cvs, setCvs] = useState<Cv[]>([]);
    const [v_besoinannonces, setV_besoinannonces] = useState<V_besoinannonce[]>([]);
    const [fonctions , setFonctions] = useState<Fonction[]>([]);

    useEffect(() => {
        if(isPageLoad === false){
            setIsPageLoad(true);
            fetch("http://localhost:8080/Cv/getAll")
                .then((response) => response.json())
                .then((data) => setCvs(data))

            fetch("http://localhost:8080/V_besoinannonce/getAll")
            .then((response) => response.json())
            .then((data) => setV_besoinannonces(data))

            fetch("http://localhost:8080/Fonction/getAll")
            .then((response) => response.json())
            .then((data) => setFonctions(data))
        }
    }, [isPageLoad]);

    const [selectedCv, setSelectedCv] = useState<Cv>();
    const [selectedAnnonce, setSelectedAnnonce] = useState<V_besoinannonce>();
    const [idFonction, setIdFonction] = useState<number>(-1);
    const [dtn, setDtn] = useState<Date>();
    const [dtembauche, setDtEmbauche] = useState<Date>();

    useEffect(() => {
        if(selectedCv === undefined || selectedCv.adresse !== "-1")return;
        fetch("http://localhost:8080/Cv/getById/" + selectedCv.id)
        .then((response) => response.json())
        .then((data) => {
            setSelectedCv(data)
        });
    });
    const handleSelectedCv = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const IdCv = e.target.value;
        setSelectedCv({ id : parseInt(IdCv),adresse: "-1" ,cin    : "" ,email  : "" ,nom    : "" ,prenom : "" ,sexe   : "" ,sm     : "" ,tel    : ""})
    }
    
    useEffect(() => {
        if(selectedAnnonce === undefined || selectedAnnonce.idannonce !== -1)return;
        fetch("http://localhost:8080/V_besoinannonce/getByIdAnnonce/" + selectedAnnonce.id)
        .then((response) => response.json())
        .then((data) => {
            setSelectedAnnonce(data)
        });
    });
    const handleSelectedAnnonce = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAnnonce(v_besoinannonces.find(annonce => annonce.idannonce == parseInt(e.target.value)));
    }
    const embauchement = async () => {
        if(selectedCv && selectedAnnonce){
            try{
                const personnel = {               
                    idposte     : selectedAnnonce.idposte,
                    idservice   : selectedAnnonce.idservice,
                    nom         : selectedCv.nom,  
                    prenom      : selectedCv.prenom,  
                    dtn         : dtn,
                    dtembauche  : dtembauche,
                    idfonction  : idFonction,
                } as Personnel;

                await axiosInstance.post("/Personnel/save", personnel);
                alert("Nouvelle personnel ajouter");
            }catch(error){
                alert("Erreur : " + error);
            }
        }
    }

    const handleSelectedFonction = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIdFonction(parseInt(e.target.value));
    }
    const handleChangeDtn = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDtn(new Date(e.target.value));
    }
    const handleChangeDtEmbauche = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDtEmbauche(new Date(e.target.value));
    }

    return (
        
        <div className="container mt-4" style={{ maxWidth: "100%" }}>
            <h2 style={EmploymentTitle}>Embauche</h2>

            <div className="row">

                <div className="col-md-6 mt-5 form-input">
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

                <div className="col-md-6 mt-5 form-input">
                    <h6 style={h6}>Date d` embauche</h6>
                    <br />
                    <input onChange={handleChangeDtEmbauche} type="date" name="dtembauche" className="form-control"/>
                </div>

            </div>

            <div className="row">

                <div className="col-md-6 mt-5 form-input">
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
                    {Cvs.map((cv, index) => (
                        <option value={cv.id} key={cv.id}>
                        {cv.nom + " " + cv.prenom}
                        </option>
                    ))}
                    </select>
                </div>

                <div className="col-md-6 mt-5 form-input">
                    <h6 style={h6}>Date de naissance</h6>
                    <br />
                    <input  onChange={handleChangeDtn} type="date" name="dtn" className="form-control"/>
                </div>

            </div>

            <div className="row">

                <div className="col-md-6 mt-5 form-input">
                    <h6 style={h6}>Fonction attribué</h6>
                    <br />
                    <select
                    defaultValue={0}
                    onChange={handleSelectedFonction}
                    className="form-control form-select"
                    >
                    <option disabled value={0}>
                        Choisissez la fonction correspondante
                    </option>
                    {fonctions.map((fonction, index) => (
                        <option value={fonction.id} key={fonction.id}>
                        {fonction.nom}
                        </option>
                    ))}
                    </select>
                </div>

                <div className="col-md-5 mt-5 offset-md-1">
                    <button onClick={embauchement} className="btn btn-success" style={{margin : "inherit"}}>
                    Embauché(e)
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Employment;