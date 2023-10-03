import React from "react"
import { useState, useEffect } from "react";
import "../assets/css/annonce.css"
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Filiere from '../model/FiliereInterface';
import Grade from '../model/GradeInterface';
import axiosInstance from '../http-client-side/Axios';
import Service from "../model/ServiceInterface";
import Poste from "../model/PosteInterface";
import Region from "../model/RegionInterface";

interface JobOfferProps {
	nomEntreprise: string | undefined;
	nomService: string | undefined;
	titrePoste: string | undefined;
	typeContrat: string | undefined;
	sexe: string | undefined;
	lieu: string | undefined;
	description: string | undefined;
	diplomeFormation: string | undefined;
	situationMatrimoniale: string | undefined;
	experience: string | undefined;
	qualiteRecherchee: string | undefined;
}



const JobOffer: React.FC<JobOfferProps> = ({
	nomEntreprise,
	nomService,
	titrePoste,
	typeContrat,
	sexe,
	lieu,
	description,
	diplomeFormation,
	situationMatrimoniale,
	experience,
	qualiteRecherchee,
}) => {

	const paragraphs = description?.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph.trim()}</p>
	));

	const paragraphs2 = experience?.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph.trim()}</p>
	));

	const paragraphs3 = qualiteRecherchee?.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph.trim()}</p>
	));
	const paragraphs4 = diplomeFormation?.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph.trim()}</p>
	));



	return (
		<Container>
			<Row>
				<Col>
					<p id="title">
						<h2>{nomEntreprise} , <span>Service {nomService}</span></h2>
						<h6>recrute</h6>
						<h3>{titrePoste} ({sexe})</h3>
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>
						<strong>Lieu de travail :</strong> {lieu}
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>
						<strong>Type de contrat : </strong> {typeContrat}
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4>Description du poste:</h4>
					<div>{paragraphs}</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4>Profil Recherché:</h4>
					<p>
						<strong>Diplôme/Formation:</strong>  <div>{paragraphs4}</div>
					</p>
					<p>
						<strong>Situation Matrimoniale:</strong> {situationMatrimoniale}
					</p>
					<p>
						<strong>Expérience:</strong> <div>{paragraphs2}</div>
					</p>
					<p>
						<strong>Qualité Recherchée:</strong> <div>{paragraphs3}</div>
					</p>
				</Col>
			</Row>
		</Container>
	);
};



function Annonce() {

	const location = useLocation();
	const f1 = location.state?.f1 || {};
	const f2 = location.state?.formDataList || {};
	const f3 = location.state?.formData2 || {};

	const [filieres, setFilieres] = useState<Filiere[]>([]);
	var diplomeFormation = ""

	const [grades, setGrades] = useState<Grade[]>([]);

	useEffect(() => {

		const fetchData = async () => {
			try {
				const response = await axiosInstance.get('/Grade/getAll');
				setGrades(response.data);
			} catch (error) {
			}
		};

		const fetchDataAndContinue = async () => {
			if (grades.length === 0) {
				await fetchData();
			}
		};

		fetchDataAndContinue();
	}, [grades]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosInstance.get('/Filiere/getAll');
				setFilieres(response.data);
			} catch (error) {
			}
		};

		const fetchDataAndContinue = async () => {
			if (filieres.length === 0) {
				await fetchData();
			}
		};

		fetchDataAndContinue();
	}, [filieres]);


	const [service, setService] = useState<Service[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosInstance.get('/Service/getAll');
				setService(response.data);
			} catch (error) {
			}
		};

		const fetchDataAndContinue = async () => {
			if (service.length === 0) {
				await fetchData();
			}
		};

		fetchDataAndContinue();
	}, [service]);

	const [postes, setPostes] = useState<Poste[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosInstance.get('/Poste/getAll');
				setPostes(response.data);
			} catch (error) {
			}
		};

		const fetchDataAndContinue = async () => {
			if (postes.length === 0) {
				await fetchData();
			}
		};

		fetchDataAndContinue();
	}, [postes]);

	const [regions, setRegions] = useState<Region[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosInstance.get('/Region/getAll');
				setRegions(response.data);
			} catch (error) {
			}
		};

		const fetchDataAndContinue = async () => {
			if (regions.length === 0) {
				await fetchData();
			}
		};

		fetchDataAndContinue();
	}, [regions]);

	const nomEntreprise = "DATACOM Mada Ltd"
	var nomService = ""
	if (service.length !== 0) {
		nomService = service[parseInt(f1.service) - 1].nom
	}
	var titrePoste = ""
	if (postes.length !== 0) {
		titrePoste = postes[parseInt(f1.poste) - 1].nom
	}
	const typeContrat = f1.contrat
	var sexe = ""
	const selsex = f3.gen
	selsex.forEach((item: string, index: number) => {
		sexe += item + " - ";
	});
	var lieu = ""
	if (regions.length !== 0) {
		lieu = regions[parseInt(f1.location) - 1].nom
	}
	const description = f1.description

	if (grades.length !== 0 && filieres.length !== 0) {
		f2.forEach((item: any, index: number) => {
			diplomeFormation += grades[parseInt(item['sgrade'], 10) - 1].nom + " en " + filieres[parseInt(item['sfiliere'], 10) - 1].nom + " \n "
		})
	}

	var situationMatrimoniale = ""
	const selsm = f3.sitmat
	selsm.forEach((item: string, index: number) => {
		situationMatrimoniale += item + " - ";
	});
	const qualiteRecherchee = f1.aptitude
	const experience = f3.experiences


	const [buttonVisible, setButtonVisible] = useState(true); // State to control button visibility

	// Data sending

	const besoinservice = {
		datebesoinservice: f1.dat,
		idservice: parseInt(f1.service),
		idregion: parseInt(f1.location),
		idposte: parseInt(f1.poste),
		qualite: f1.aptitude,
		description: f1.description,
		typecontrat: f1.contrat,
		volumetache: parseFloat(f1.capacity),
		volumehoraire: parseFloat(f1.capacitypers)
	}


	const sendDataToServer = async () => {
		try {
			const response = await axiosInstance.post('/Besoinservice/save', besoinservice, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			let idbesoin = response.data['id']
			let critereselection = {
				idbesoin: idbesoin,
				experience: f3.experiences,
				sm: situationMatrimoniale,
				sexe: sexe
			}
			const response2 = await axiosInstance.post('/Critereselection/save', critereselection, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			let idcritereselection = response2.data['id']
			f2.forEach(async (item: any, index: number) => {
				let criteregrade = {
					idcritereselection: idcritereselection,
					idfiliere: parseInt(item['sfiliere']),
					idgrade: parseInt(item['sgrade']),
					coeff: parseFloat(item['scoeff'])
				}
				try {
					let response3 = await axiosInstance.post('/Criteregrade/save', criteregrade, {
						headers: {
							'Content-Type': 'application/json',
						},
					})
				} catch (error) {
				}
			})
			let annonce = {
				idbesoinservice: idbesoin
			}
			const response4 = await axiosInstance.post('/Annonce/save', annonce, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
		} catch (error) {
		}
	};


	// Data sending


	const handleClick = () => {
		sendDataToServer()
		setButtonVisible(false);
	};

	return (
		<>
			<div className="container">
				<div className="row" id="row-with-margin-top">
					<h2>Annonce Preview</h2>
				</div>
				<div className="row" id="annonce">
					<JobOffer
						nomEntreprise={nomEntreprise}
						nomService={nomService}
						titrePoste={titrePoste}
						typeContrat={typeContrat}
						sexe={sexe}
						lieu={lieu}
						description={description}
						diplomeFormation={diplomeFormation}
						situationMatrimoniale={situationMatrimoniale}
						experience={experience}
						qualiteRecherchee={qualiteRecherchee}
					/>
				</div>
				<div className="row">
					<div className="col-md-1">
						{buttonVisible && (
							<button type="button" className="btn btn-primary" onClick={handleClick}>Confirmer</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Annonce;
