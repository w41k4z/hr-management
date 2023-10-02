import React from "react"
import "../assets/css/annonce.css"

import { Container, Row, Col } from 'react-bootstrap';

interface JobOfferProps {
	nomEntreprise: string;
	nomService: string;
	titrePoste: string;
	typeContrat: string;
	sexe: string;
	lieu: string;
	description: string;
	diplomeFormation: string;
	situationMatrimoniale: string;
	experience: string;
	qualiteRecherchee: string;
	numberOfDevelopers: number;
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
	numberOfDevelopers,
}) => {

	const paragraphs = description.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph.trim()}</p>
	  ));

	  const paragraphs2 = experience.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph.trim()}</p>
	  ));

	  const paragraphs3 = qualiteRecherchee.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph.trim()}</p>
	  ));

	
	
	return (
		<Container>
			<Row>
				<Col>
					<p id="title">
						<h2>{nomEntreprise} , <span>Service {nomService}</span></h2>
						<h6>recrute</h6>
						<h3>{numberOfDevelopers} {titrePoste} ({sexe})</h3>
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
					<h4>Description du poste:</h4>
					<div>{paragraphs}</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4>Profil Recherché:</h4>
					<p>
						<strong>Diplôme/Formation:</strong> {diplomeFormation}
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

const nomEntreprise = "DATACOM Mada Ltd"
const nomService = "Informatique"
const titrePoste = "Developpeur PHP"
const typeContrat = "CDI"
const sexe = "H/F"
const lieu = "Antananarivo"
const description = `
En tant que développeur PHP au sein de notre entreprise, vous aurez les responsabilités suivantes :

-Concevoir, développer et déployer des applications web robustes en utilisant PHP, en suivant les meilleures pratiques de développement.
-Collaborer avec l'équipe de développement pour comprendre les besoins du projet et traduire ces besoins en code fonctionnel.
-Participer activement à la conception et à l'architecture des applications web pour assurer leur extensibilité et leur évolutivité.
-Effectuer des tests unitaires et d'intégration pour garantir la fiabilité et la stabilité des applications.
-Identifier et résoudre efficacement les problèmes techniques et les bogues.
-Maintenir et mettre à jour les applications existantes en fonction des nouvelles exigences.
`;
const diplomeFormation = `Master en informatique ou en génie logiciel`
const situationMatrimoniale = "Celibataire ou marie(e)"
const experience = `
-Au moins 3 d'expérience dans le développement PHP
-Expérience avec des frameworks PHP.`
const qualiteRecherchee = `
-Capacité à travailler de manière autonome et en équipe, avec d'excellentes compétences en communication.
-Souci du détail et engagement envers la qualité du code.
-Familiarité avec les outils de gestion de versions (Git) et les méthodologies de développement agiles est un plus`
const numberOfDevelopers = 3


function Annonce() {
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
						numberOfDevelopers={numberOfDevelopers}
					/>
				</div>
			</div>
		</>
	);
}

export default Annonce;
