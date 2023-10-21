import React, { useEffect, useState } from 'react';
import { h6 , tableTitle , ficheLabel , arrowStyle , Money , MoneyUnit, Conclusion , Signature, PersonnelSelect } from './WageStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { Personnel } from '../../model/PersonnelInterface';
import { GainSalary } from '../../model/GainSalary';
import { StraySalary } from '../../model/StraySalary';

const WageSlip = () => {
    const [personnelList , setPersonnelList] = useState<Personnel[]>([]);
    const [isPageLoad , setIsPageLoad] = useState<boolean>(false);
    const [idPersonnel, setIdPersonnel] = useState<number>();
    const [gainSalaries , setGainSalaries] = useState<GainSalary[]>([]);
    const [straySalaries , setStraySalaries] = useState<StraySalary[]>([]);

    useEffect(() => {
        if(!isPageLoad){
            setIsPageLoad(true);
            fetch("http://localhost:8080/Personnel/getAll")
                .then((result) => result.json())
                .then((data) => setPersonnelList(data));
        }
    });

    const handleSelectedPersonnel = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setIdPersonnel(parseInt(e.target.value));
    }

    useEffect(() => {
        if(idPersonnel === undefined) return;
        fetch("http://localhost:8080/WageSlip/getGainSalary/"+idPersonnel)
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                setGainSalaries(data)
            });

        fetch("http://localhost:8080/WageSlip/getStraySalary/"+idPersonnel)
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                setStraySalaries(data)
            });

    }, [idPersonnel])

    const handleExportToPDF = () => {
        const contentToPrint = document.getElementById('wage-slip-container');
        if (contentToPrint) {
            const printWindow = window.open('', '_blank');
            if (printWindow) {
                // Include Bootstrap stylesheet
                printWindow.document.write('<html><head><title>Imprimer</title>');
                printWindow.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">');
                printWindow.document.write('<style>.fa-arrow-right { font-size: 12pt; width: 5%; }</style>')
                printWindow.document.write('</head><body class="container">');

                // Include your printable content
                printWindow.document.write(contentToPrint.innerHTML);

                // Close the HTML document
                printWindow.document.write('</body></html>');
                printWindow.document.close();

                // Trigger the print
                printWindow.print();
            } else {
              console.error('Impossible d\'ouvrir la fenêtre d\'impression.');
            }
          } else {
            console.error('Impossible de trouver l\'élément à imprimer.');
        }
    };

    return (
        <>
            <Row>
            <div className="col-md-2 offset-md-9">
                <select
                    defaultValue={0}
                    onChange={handleSelectedPersonnel}
                    className="form-select"
                    aria-label="Sélectionnez le personnel"
                    style={PersonnelSelect}
                    >
                <option value={0} disabled>
                    Personnel
                </option>
                {personnelList.map((option) => (
                    <option key={option.id} value={option.id}>
                    {option.nom + " " + option.prenom}
                    </option>
                ))}
                </select>
            </div>
            </Row>
            <Container id='wage-slip-container'>
                <Row>
                    <Col className="text-center mt-5">
                        <h4 style={{ color : '#176b17', ...h6} }>FICHE DE PAIE</h4>
                        <p className='mt-5'><b><u>ARRETE AU :</u></b> 31/08/23</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <table className='table'>
                            <tbody>
                                <tr className='row'>
                                    <td className='row col-md-6'>
                                        <span style={ficheLabel} className='col-md-5 offset-md-1'>Nom et Prénoms :</span>
                                        <span className='col-md-5 offset-md-0' style={Money}>RAZAFIARISON Laza</span>
                                    </td>
                                </tr>
                                <tr className='row'>
                                    <td className='row col-md-6'>
                                        <span style={ficheLabel} className='col-md-4 offset-md-1'>Matricule :</span>
                                        <span className='col-md-5 offset-md-1' style={Money}>627/TNR</span>
                                    </td>
                                    <td className="row col-md-6">
                                        <span style={ficheLabel} className='col-md-5 offset-md-2'>Classification :</span>
                                        <span className='col-md-5' style={Money}>HC</span>
                                    </td>
                                </tr>
                                <tr className='row'>
                                    <td className='row col-md-6'>
                                        <span style={ficheLabel} className='col-md-4 offset-md-1'>Fonction :</span>
                                        <span className='col-md-5 offset-md-1' style={Money}>MPITOLONA</span>
                                    </td>
                                    <td className="row col-md-6">
                                        <span style={ficheLabel} className='col-md-5 offset-md-2'>Salaire de base :</span>
                                        <span className='col-md-5 text-right' style={Money}>4 083 409,09 <span style={MoneyUnit}>MGA</span></span>
                                    </td>
                                </tr>
                                <tr className='row'>
                                    <td className='row col-md-6'>
                                        <span style={ficheLabel} className='col-md-4 offset-md-1'>N° CNaPS :</span>
                                        <span className='col-md-5 offset-md-1 text-right' style={Money}></span>
                                    </td>
                                    <td className="row col-md-6">
                                        <span style={ficheLabel} className='col-md-5 offset-md-2'>Taux journaliers :</span>
                                        <span className='col-md-5 text-right' style={Money}>136 114,00 <span style={MoneyUnit}>MGA</span></span>
                                    </td>
                                </tr>
                                <tr className='row'>
                                    <td className='row col-md-6'>
                                        <span style={ficheLabel} className='col-md-5 offset-md-1'>Date d'embauche :</span>
                                        <span className='col-md-5 offset-md-0' style={Money}>25/03/2011</span>
                                    </td>
                                    <td className="row col-md-6">
                                        <span style={ficheLabel} className='col-md-5 offset-md-2'>Taux horaires :</span>
                                        <span className='col-md-5 text-right' style={Money}>23 559,00 <span style={MoneyUnit}>MGA</span></span>
                                    </td>
                                </tr>
                                <tr className='row'>
                                    <td className='row col-md-6'>
                                        <span style={ficheLabel} className='col-md-4 offset-md-1'>Ancienneté :</span>
                                        <span className='col-md-6 offset-md-0'>12 an(s) 5 mois et 10 jour(s)</span>
                                    </td>
                                    <td className="row col-md-6">
                                        <span style={ficheLabel} className='col-md-5 offset-md-2'>Indice :</span>
                                        <span className='col-md-5 text-right' style={Money}>17 660,00 <span style={MoneyUnit}>MGA</span></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={tableTitle}>Désignations</th>
                                    <th style={tableTitle}>Nombre</th>
                                    <th style={tableTitle}>Taux</th>
                                    <th style={tableTitle}>Montant</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Salaire du 01/06/23 au 30/06/23</td>
                                    <td>1 mois</td>
                                    <td></td>
                                    <td style={Money}>136 114,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td>Absences déductibles</td>
                                    <td></td>
                                    <td style={Money}>136 114,00 <span style={MoneyUnit}>MGA</span></td>
                                    <td style={Money}></td>
                                </tr>
                                <tr>
                                    <td>Primes de rendement</td>
                                    <td colSpan={2}></td>
                                    <td style={Money}></td>
                                </tr>
                                <tr>
                                    <td>Primes d'ancienneté</td>
                                    <td colSpan={2}></td>
                                    <td style={Money}></td>
                                </tr>
                                <tr>
                                    <td>Heures supplémentaires majorées de 30%</td>
                                    <td colSpan={2}></td>
                                    <td style={Money}>30 627,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td>Heures supplémentaires majorées de 40%</td>
                                    <td colSpan={2}></td>
                                    <td style={Money}>32 983,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td>Heures supplémentaires majorées de 50%</td>
                                    <td colSpan={2}></td>
                                    <td style={Money}>35 339,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td>Heures supplémentaires majorées de 100%</td>
                                    <td colSpan={2}></td>
                                    <td style={Money}>47 118,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td>Majoration pour heures de nuit</td>
                                    <td colSpan={2}></td>
                                    <td style={Money}>7 068,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td>Primes diverses</td>
                                    <td colSpan={2}></td>
                                    <td style={Money}></td>
                                </tr>
                                <tr>
                                    <td>Rappels sur période antérieure</td>
                                    <td colSpan={2}></td>
                                    <td style={Money}></td>
                                </tr>
                                <tr>
                                    <td>Droits de congés</td>
                                    <td></td>
                                    <td style={Money}>136 114,00 <span style={MoneyUnit}>MGA</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Droits de préavis</td>
                                    <td></td>
                                    <td style={Money}>136 114,00 <span style={MoneyUnit}>MGA</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Indemnités de licenciement</td>
                                    <td></td>
                                    <td style={Money}>136 114,00 <span style={MoneyUnit}>MGA</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}></td>
                                    <td style={tableTitle}>Salaire brut</td>
                                    <td style={Money}>4 083 409,09 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td colSpan={4}><hr/></td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign : 'right' }}>Retenue CNaPS 1% :</td>
                                    <td colSpan={2}></td>
                                    <td style={Money}>20 000,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign : 'right' }}>Retenue sanitaire</td>
                                    <td colSpan={2}></td>
                                    <td style={Money}>40 834,09 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign : 'right' }}>Tranche IRSA INF 350 0000</td>
                                    <td colSpan={2}></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign : 'right' }}>Tranche IRSA I DE 350 0001 à 400 000</td>
                                    <td></td>
                                    <td>5 %</td>
                                    <td style={Money}>2 500,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign : 'right' }}>Tranche IRSA I DE 400 0001 à 500 000</td>
                                    <td></td>
                                    <td>10 %</td>
                                    <td style={Money}>10 000,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign : 'right' }}>Tranche IRSA I DE 500 001 à 600 000</td>
                                    <td></td>
                                    <td>15 %</td>
                                    <td style={Money}>15 000,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign : 'right' }}>Tranche IRSA SUP 600 0000</td>
                                    <td></td>
                                    <td>20 %</td>
                                    <td style={Money}>684 515,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td colSpan={4}><hr/></td>
                                </tr>
                                <tr>
                                    <td colSpan={1} style={{ textAlign : 'right' }}>TOTAL IRSA</td>
                                    <td colSpan={2} style={{ textAlign : 'center' }}><FontAwesomeIcon icon={faArrowRight} style={arrowStyle} /> </td>
                                    <td style={Money}>712 015,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td colSpan={1} style={{ textAlign : 'right' }}>Total des retenues</td>
                                    <td colSpan={2} style={{ textAlign : 'center' }}><FontAwesomeIcon icon={faArrowRight} style={arrowStyle} /></td>
                                    <td style={Money}>772 849,09 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td colSpan={1} style={{ textAlign : 'right' }}>Autres indemnités</td>
                                    <td colSpan={2} style={{ textAlign : 'center' }}><FontAwesomeIcon icon={faArrowRight} style={arrowStyle} /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={4}><hr/></td>
                                </tr>
                                <tr>
                                    <td colSpan={1} style={{ textAlign : 'right' }}>Net à payer</td>
                                    <td colSpan={2} style={{ textAlign : 'center' }}><FontAwesomeIcon icon={faArrowRight} style={arrowStyle} /></td>
                                    <td style={Money}>3 310 560,00 <span style={MoneyUnit}>MGA</span></td>
                                </tr>
                                <tr>
                                    <td colSpan={4}><hr/></td>
                                </tr>
                                {/* Add other rows as needed */}
                            </tbody>
                        </table>
                    </Col>
                </Row>
                <Row>
                    <div className='row' style={Conclusion}>
                        <table className='table border border-primary p-3'>
                            <tbody>
                                <tr>
                                    <td>Avantages en nature :</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Déductions IRSA :</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Montant imposable :</td>
                                    <td style={Money}>4 022 575,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='row' style={Signature}>
                        <table className='table border p-3'>
                            <tbody>
                                <tr>
                                    <td><b>Mode de paiement :</b></td>
                                    <td>
                                        <input type="checkbox" />
                                        <span style={{ marginLeft : '2%' }}>Virement</span>
                                        <span> ___ ou ___ </span>
                                        <input type="checkbox" />
                                        <span style={{ marginLeft : '2%' }}>Chèque</span>
                                    </td>
                                    <td></td>
                                    <td></td>   
                                    <td></td>   
                                </tr>
                                <tr>
                                    <td colSpan={5}><hr/></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className='text-center'>L'employeur</td>
                                    <td></td>
                                    <td></td>
                                    <td className='text-center'>L'employé(e)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className='text-center'>------------<span style={{ marginInline : '5%'}}></span>__________</td>
                                    <td></td>
                                    <td></td>
                                    <td className='text-center'>------------<span style={{ marginInline : '5%'}}></span>__________</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </Row>
                <br/>
            </Container>
            <Row className="row">
                <button className='btn btn-success col-md-4 offset-md-8' onClick={handleExportToPDF}>Export to pdf</button>
            </Row>
        </>
    );
}

export default WageSlip;