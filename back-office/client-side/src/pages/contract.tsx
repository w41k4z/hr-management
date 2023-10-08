import React from "react";

const Contract = () => {
  return (
    <div className="py-5 px-3">
      <h4 className="text-center fw-bold">CONTRAT D'ENGAGEMENT A L'ESSAI</h4>
      <p className="mt-5 fw-bold">
        <u>ENTRE LES SOUSSIGNES :</u>
      </p>
      <section className="mt-3">
        <p>
          1) La société{" "}
          <input
            className="dashed-bottom-border w-75"
            type="text"
            name=""
            id=""
          />
        </p>
        <p>
          Siège social :{" "}
          <input
            className="dashed-bottom-border w-75"
            type="text"
            name=""
            id=""
          />
        </p>
        <p>
          Immatriculée au Registre du Commerce de Côte d'Ivoire sous le numéro{" "}
          <input className="dashed-bottom-border" type="text" />
        </p>
        <p>
          Représentée par M
          <input className="dashed-bottom-border" type="text" />, agissant en sa
          qualité de Directeur Général
        </p>
        <p>Dûment habilité aux fins des présentes</p>
        <p className="my-4 ms-5">Ci-après dénommée "l'Employeur",</p>
        <p className="fw-bold">D'une part ;</p>
        <p className="mt-5 fw-bold">ET</p>
      </section>
      <section className="mt-3">
        <p>
          2) M. <input className="dashed-bottom-border w-75" type="text" />
        </p>
        <p>
          Né le <input className="dashed-bottom-border w-75" type="text" />
        </p>
        <p>
          Nationalité :{" "}
          <input className="dashed-bottom-border w-75" type="text" />
        </p>
        <p>
          Situation de famille :{" "}
          <input className="dashed-bottom-border w-75" type="text" />
        </p>
        <p>
          Résidence habituelle :{" "}
          <input className="dashed-bottom-border w-75" type="text" />
        </p>
        <p className="my-4 ms-5">Ci-après dénommée "le Travailleur",</p>
        <p className="fw-bold">D'une part ;</p>
      </section>
      <p className="my-5 fw-bold">
        <u>IL A ETE CONVENU ET ARRETE CE QUI SUIT :</u>
      </p>
      <h6 className="fw-bold">Article 1 : DEFINITION DES FONCTIONS</h6>
      <section className="mt-3">
        <p>
          M<input className="dashed-bottom-border" type="text" /> est engagé à
          l'essai par l'Employeur en qualité de{" "}
          <input className="dashed-bottom-border w-100" type="text" />
        </p>
        <p>
          M<input className="dashed-bottom-border" type="text" /> est classé en
          catégorie <input className="dashed-bottom-border" type="text" /> de la
          Convention{" "}
          <input className="dashed-bottom-border w-100" type="text" />
        </p>
        <p className="mt-3">
          A ce titre, il/elle aura notamment pour mission :
        </p>
      </section>
    </div>
  );
};

export default Contract;
