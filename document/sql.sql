\c postgres;
CREATE USER hr PASSWORD 'hr';
ALTER ROLE hr SUPERUSER;

CREATE DATABASE hrmanagment;
\c hrmanagment;

CREATE TABLE service (
    id serial PRIMARY KEY,
    nom text
);

CREATE TABLE region (
    id serial PRIMARY KEY,
    nom text
);

CREATE TABLE poste (
    id serial PRIMARY KEY,
    nom text
);

CREATE TABLE posteservice (
    id serial PRIMARY KEY,
    idposte integer REFERENCES poste(id),
    idservice integer REFERENCES service(id)
);

CREATE TABLE filiere (
    id serial PRIMARY KEY,
    nom text
);

CREATE TABLE grade (
    id serial PRIMARY KEY,
    nom text
);

CREATE TABLE besoinservice (
    id serial PRIMARY KEY,
    datebesoinservice date,
    idservice integer REFERENCES service(id),
    idregion integer REFERENCES region(id),
    idposte integer REFERENCES poste(id),
    qualite text,
    description text,
    typecontrat text,
    volumetache numeric,
    volumehoraire numeric
);

CREATE TABLE critereselection (
    id serial PRIMARY KEY,
    idbesoin integer REFERENCES besoinservice(id),
    experience text,
    sm text,
    sexe text
);

CREATE TABLE criteregrade (
    id serial PRIMARY KEY,
    idcritereselection integer REFERENCES critereselection(id),
    idfiliere integer REFERENCES filiere(id),
    idgrade integer REFERENCES grade(id),
    coeff numeric
);

CREATE TABLE cv (
    id serial PRIMARY KEY,
    cin text,
    nom text,
    prenom text,
    adresse text,
    tel text,
    email text,
    sm text,
    sexe text
);

CREATE TABLE cvgrade (
    id serial PRIMARY KEY,
    idcv integer REFERENCES cv(id),
    idfiliere integer REFERENCES filiere(id),
    idgrade integer REFERENCES grade(id),
    lienpreuvegrade text
);

CREATE TABLE cvexperience (
    id serial PRIMARY KEY,
    idcv integer REFERENCES cv(id),
    description text,
    lienpreuveexperience text
);

CREATE TABLE question (
    id serial PRIMARY KEY,
    question text
);

CREATE TABLE questionreponse (
    id serial PRIMARY KEY,
    idquestion integer REFERENCES question(id),
    idreponse integer,
    status text
);

CREATE TABLE annonce (
    id serial PRIMARY KEY,
    idbesoinservice integer REFERENCES besoinservice(id)
);

CREATE TABLE questionannonce (
    idannonce integer REFERENCES annonce(id),
    idquestion integer REFERENCES question(id)
);




