import React, { useEffect, useState } from "react";
import {
  h6,
  tableTitle,
  ficheLabel,
  arrowStyle,
  Money,
  MoneyUnit,
  Conclusion,
  Signature,
  PersonnelSelect,
} from "./WageStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { Personnel } from "../../model/PersonnelInterface";
import { GainSalary } from "../../model/GainSalary";
import { StraySalary } from "../../model/StraySalary";

const WageSlip = () => {
  const [personnelList, setPersonnelList] = useState<Personnel[]>([]);
  const [isPageLoad, setIsPageLoad] = useState<boolean>(false);
  const [employee, setEmployee] = useState<Personnel>();
  const [gainSalaries, setGainSalaries] = useState<GainSalary[]>([]);
  const [straySalaries, setStraySalaries] = useState<StraySalary[]>([]);
  const [assessablePay, setAssessablePay] = useState<number>(0);
  const [netPay, setNetPay] = useState<number>(0);

  useEffect(() => {
    if (!isPageLoad) {
      setIsPageLoad(true);
      fetch("http://localhost:8080/Personnel/getAll")
        .then((result) => result.json())
        .then((data) => setPersonnelList(data));
    }
  }, []);

  const handleSelectedPersonnel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEmployee(
      personnelList.find((personne) => personne.id === parseInt(e.target.value))
    );
  };

  useEffect(() => {
    if (employee == null || employee.id === undefined) return;
    if (!gainSalaries || gainSalaries.length <= 0) return;
    let grossPay = gainSalaries[gainSalaries.length - 1].montant;
    fetch(
      "http://localhost:8080/WageSlip/getStraySalary/" +
        employee.id +
        "/" +
        grossPay
    )
      .then((result) => result.json())
      .then((data) => {
        setAssessablePay(grossPay - data[0].montant - data[1].montant);
        setNetPay(grossPay - data[data.length - 1].montant);
        setStraySalaries(data);
      });
  }, [gainSalaries, employee]);

  useEffect(() => {
    if (employee == null || employee.id === undefined) return;
    fetch("http://localhost:8080/WageSlip/getGainSalary/" + employee.id)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setGainSalaries(data);
      });
  }, [employee]);

  const handleExportToPDF = () => {
    const contentToPrint = document.getElementById("wage-slip-container");
    if (contentToPrint) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        // Include Bootstrap stylesheet
        printWindow.document.write("<html><head><title>Imprimer</title>");
        printWindow.document.write(
          '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">'
        );
        printWindow.document.write(
          "<style>.fa-arrow-right { font-size: 12pt; width: 5%; }</style>"
        );
        printWindow.document.write('</head><body class="container">');

        // Include your printable content
        printWindow.document.write(contentToPrint.innerHTML);

        // Close the HTML document
        printWindow.document.write("</body></html>");
        printWindow.document.close();

        // Trigger the print
        printWindow.print();
      } else {
        console.error("Impossible d'ouvrir la fenêtre d'impression.");
      }
    } else {
      console.error("Impossible de trouver l'élément à imprimer.");
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
      <Container id="wage-slip-container">
        <Row>
          <Col className="text-center mt-5">
            <h4 style={{ color: "#176b17", ...h6 }}>FICHE DE PAIE</h4>
            <p className="mt-5">
              <b>
                <u>ARRETE AU :</u>{" "}
              </b>{" "}
              {new Date().toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <table className="table">
              <tbody>
                <tr className="row">
                  <td className="row col-md-6">
                    <span style={ficheLabel} className="col-md-5 offset-md-1">
                      Nom et Prénoms :
                    </span>
                    <span className="col-md-5 offset-md-0" style={Money}>
                      {employee?.nom + " " + employee?.prenom}
                    </span>
                  </td>
                </tr>
                <tr className="row">
                  <td className="row col-md-6">
                    <span style={ficheLabel} className="col-md-4 offset-md-1">
                      Matricule :
                    </span>
                    <span className="col-md-5 offset-md-1" style={Money}>
                      627/TNR
                    </span>
                  </td>
                  <td className="row col-md-6">
                    <span style={ficheLabel} className="col-md-5 offset-md-2">
                      Classification :
                    </span>
                    <span className="col-md-5" style={Money}>
                      HC
                    </span>
                  </td>
                </tr>
                <tr className="row">
                  <td className="row col-md-6">
                    <span style={ficheLabel} className="col-md-4 offset-md-1">
                      Fonction :
                    </span>
                    <span className="col-md-5 offset-md-1" style={Money}>
                      MPITOLONA
                    </span>
                  </td>
                  <td className="row col-md-6">
                    <span style={ficheLabel} className="col-md-5 offset-md-2">
                      Salaire de base :
                    </span>
                    <span className="col-md-5 text-right" style={Money}>
                      {employee?.poste.starting_salary.toFixed(2)}{" "}
                      <span style={MoneyUnit}>MGA</span>
                    </span>
                  </td>
                </tr>
                <tr className="row">
                  <td className="row col-md-6">
                    <span style={ficheLabel} className="col-md-4 offset-md-1">
                      N° CNaPS :
                    </span>
                    <span
                      className="col-md-5 offset-md-1 text-right"
                      style={Money}
                    ></span>
                  </td>
                  <td className="row col-md-6">
                    <span style={ficheLabel} className="col-md-5 offset-md-2">
                      Taux journaliers :
                    </span>
                    <span className="col-md-5 text-right" style={Money}>
                      {employee?.poste.starting_salary
                        ? (employee?.poste.starting_salary / 30).toFixed(2)
                        : ""}{" "}
                      <span style={MoneyUnit}>MGA</span>
                    </span>
                  </td>
                </tr>
                <tr className="row">
                  <td className="row col-md-6">
                    <span style={ficheLabel} className="col-md-5 offset-md-1">
                      Date d'embauche :
                    </span>
                    <span className="col-md-5 offset-md-0" style={Money}>
                      {employee?.dtembauche
                        ? employee.dtembauche.toString()
                        : ""}
                    </span>
                  </td>
                  <td className="row col-md-6">
                    <span style={ficheLabel} className="col-md-5 offset-md-2">
                      taux horaires :
                    </span>
                    <span className="col-md-5 text-right" style={Money}>
                      {employee?.poste.starting_salary
                        ? (employee?.poste.starting_salary / 173.33).toFixed(2)
                        : ""}{" "}
                      <span style={MoneyUnit}>MGA</span>
                    </span>
                  </td>
                </tr>
                <tr className="row">
                  <td className="row col-md-6">
                    <span style={ficheLabel} className="col-md-4 offset-md-1">
                      Ancienneté :
                    </span>
                    <span className="col-md-6 offset-md-0">
                      12 an(s) 5 mois et 10 jour(s)
                    </span>
                  </td>
                  <td className="row col-md-6">
                    <span style={ficheLabel} className="col-md-5 offset-md-2">
                      Indice :
                    </span>
                    <span className="col-md-5 text-right" style={Money}>
                      17 660,00 <span style={MoneyUnit}>MGA</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th style={tableTitle}>Désignations</th>
                  <th style={tableTitle}>Nombre</th>
                  <th style={tableTitle}>taux</th>
                  <th style={tableTitle}>Montant</th>
                </tr>
              </thead>
              <tbody>
                {gainSalaries.map(
                  (gainSalary, index) =>
                    index <= gainSalaries.length - 2 && (
                      <tr key={index}>
                        <td>{gainSalary.designation}</td>
                        <td style={Money}>{gainSalary.nombre}</td>
                        <td style={Money}>
                          {gainSalary.taux ? gainSalary.taux.toFixed(2) : ""}{" "}
                          <span style={MoneyUnit}>MGA</span>
                        </td>
                        <td style={Money}>
                          {gainSalary.montant
                            ? gainSalary.montant.toFixed(2)
                            : ""}{" "}
                          <span style={MoneyUnit}>MGA</span>
                        </td>
                      </tr>
                    )
                )}
                <tr>
                  <td colSpan={2}></td>
                  <td style={tableTitle}>Salaire brut</td>
                  <td style={Money}>
                    {gainSalaries.length > 0
                      ? gainSalaries[gainSalaries.length - 1].montant
                      : ""}{" "}
                    <span style={MoneyUnit}>MGA</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <hr />
                  </td>
                </tr>

                {straySalaries.map(
                  (straySalary, index) =>
                    index <= straySalaries.length - 3 && (
                      <tr key={index}>
                        <td style={{ textAlign: "right" }}>
                          {straySalary.designation} :
                        </td>
                        <td colSpan={2} style={Money}>
                          {straySalary.taux
                            ? straySalary.taux.toFixed(2) + " %"
                            : ""}{" "}
                        </td>
                        <td style={Money}>
                          {straySalary.montant
                            ? straySalary.montant.toFixed(2)
                            : ""}{" "}
                          <span style={MoneyUnit}>MGA</span>
                        </td>
                      </tr>
                    )
                )}

                <tr>
                  <td colSpan={4}>
                    <hr />
                  </td>
                </tr>
                {straySalaries.map(
                  (straySalary, index) =>
                    index >= straySalaries.length - 2 && (
                      <tr>
                        <td colSpan={1} style={{ textAlign: "right" }}>
                          {straySalary.designation}
                        </td>
                        <td colSpan={2} style={{ textAlign: "center" }}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            style={arrowStyle}
                          />{" "}
                        </td>
                        <td style={Money}>
                          {straySalary.montant.toFixed(2)}{" "}
                          <span style={MoneyUnit}>MGA</span>
                        </td>
                      </tr>
                    )
                )}
                <tr>
                  <td colSpan={1} style={{ textAlign: "right" }}>
                    Autres indemnités
                  </td>
                  <td colSpan={2} style={{ textAlign: "center" }}>
                    <FontAwesomeIcon icon={faArrowRight} style={arrowStyle} />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td colSpan={1} style={{ textAlign: "right" }}>
                    Net à payer
                  </td>
                  <td colSpan={2} style={{ textAlign: "center" }}>
                    <FontAwesomeIcon icon={faArrowRight} style={arrowStyle} />
                  </td>
                  <td style={Money}>
                    {netPay ? netPay.toFixed(2) : ""}{" "}
                    <span style={MoneyUnit}>MGA</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <hr />
                  </td>
                </tr>
                {/* Add other rows as needed */}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <div className="row" style={Conclusion}>
            <table className="table border border-primary p-3">
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
                  <td style={Money}>
                    {assessablePay ? assessablePay.toFixed(2) : ""}{" "}
                    <span style={MoneyUnit}>MGA</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row" style={Signature}>
            <table className="table border p-3">
              <tbody>
                <tr>
                  <td>
                    <b>Mode de paiement :</b>
                  </td>
                  <td>
                    <input type="checkbox" />
                    <span style={{ marginLeft: "2%" }}>Virement</span>
                    <span> ___ ou ___ </span>
                    <input type="checkbox" />
                    <span style={{ marginLeft: "2%" }}>Chèque</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-center">L'employeur</td>
                  <td></td>
                  <td></td>
                  <td className="text-center">L'employé(e)</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-center">
                    ------------<span style={{ marginInline: "5%" }}></span>
                    __________
                  </td>
                  <td></td>
                  <td></td>
                  <td className="text-center">
                    ------------<span style={{ marginInline: "5%" }}></span>
                    __________
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
        <br />
      </Container>
      <Row className="row">
        <button
          className="btn btn-success col-md-4 offset-md-8"
          onClick={handleExportToPDF}
        >
          Export to pdf
        </button>
      </Row>
    </>
  );
};

export default WageSlip;
