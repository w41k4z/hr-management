CREATE SEQUENCE "public".affiliation_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".annonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".besoinservice_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".criteregrade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".critereselection_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cv_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvexperience_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvgrade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".debutconge_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".fichedeposte_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".fichedeposteaffiliation_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".filiere_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".finconge_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".fonction_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".grade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".heure_supp_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".myuser_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".personnel_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".poste_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".posteservice_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".question_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionannonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionreponse_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".region_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".reponsetest_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".reponsetest_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".service_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".type_hs_id_seq START WITH 1 INCREMENT BY 1;

CREATE  TABLE "public".affiliation ( 
	id                   bigint DEFAULT nextval('affiliation_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(200)    ,
	CONSTRAINT affiliation_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".annonce ( 
	id                   bigint DEFAULT nextval('annonce_id_seq'::regclass) NOT NULL  ,
	idbesoinservice      bigint    ,
	CONSTRAINT annonce_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".cv ( 
	id                   bigint DEFAULT nextval('cv_id_seq'::regclass) NOT NULL  ,
	adresse              varchar(255)    ,
	cin                  varchar(255)    ,
	email                varchar(255)    ,
	nom                  varchar(255)    ,
	prenom               varchar(255)    ,
	sexe                 varchar(255)    ,
	sm                   varchar(255)    ,
	tel                  varchar(255)    ,
	CONSTRAINT cv_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".cvexperience ( 
	id                   bigint DEFAULT nextval('cvexperience_id_seq'::regclass) NOT NULL  ,
	idcv                 bigint    ,
	description          varchar(255)    ,
	lienpreuveexperience varchar(255)    ,
	CONSTRAINT cvexperience_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".filiere ( 
	id                   bigint DEFAULT nextval('filiere_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT filiere_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".fonction ( 
	id                   bigint DEFAULT nextval('fonction_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(10)    ,
	CONSTRAINT fonction_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".grade ( 
	id                   bigint DEFAULT nextval('grade_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT grade_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".poste ( 
	id                   bigint DEFAULT nextval('poste_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	starting_salary      double precision  NOT NULL  ,
	CONSTRAINT poste_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".question ( 
	id                   bigint DEFAULT nextval('question_id_seq'::regclass) NOT NULL  ,
	question             varchar(255)  NOT NULL  ,
	CONSTRAINT question_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".questionannonce ( 
	date_question_annonce date  NOT NULL  ,
	id                   bigint DEFAULT nextval('questionannonce_id_seq'::regclass) NOT NULL  ,
	idannonce            bigint  NOT NULL  ,
	idquestion           bigint  NOT NULL  ,
	CONSTRAINT questionannonce_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".questionreponse ( 
	id                   bigint DEFAULT nextval('questionreponse_id_seq'::regclass) NOT NULL  ,
	idquestion           bigint  NOT NULL  ,
	reponse              varchar(255)  NOT NULL  ,
	status               varchar(255)  NOT NULL  ,
	CONSTRAINT questionreponse_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".region ( 
	id                   bigint DEFAULT nextval('region_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT region_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".reponsetest ( 
	date_test            date  NOT NULL  ,
	point                double precision  NOT NULL  ,
	id                   bigint DEFAULT nextval('reponsetest_id_seq1'::regclass) NOT NULL  ,
	idannonce            bigint  NOT NULL  ,
	idcv                 bigint  NOT NULL  ,
	CONSTRAINT reponsetest_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".service ( 
	id                   bigint DEFAULT nextval('service_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT service_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".type_hs ( 
	id                   bigint DEFAULT nextval('type_hs_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(255)  NOT NULL  ,
	pourcentage          double precision  NOT NULL  ,
	status               integer    ,
	CONSTRAINT pk_type_hs PRIMARY KEY ( id )
 );

CREATE  TABLE "public".besoinservice ( 
	datebesoinservice    date    ,
	volumehoraire        double precision    ,
	volumetache          double precision    ,
	id                   bigint DEFAULT nextval('besoinservice_id_seq'::regclass) NOT NULL  ,
	idposte              bigint    ,
	idregion             bigint    ,
	idservice            bigint    ,
	description          varchar(255)    ,
	qualite              varchar(255)    ,
	typecontrat          varchar(255)    ,
	CONSTRAINT besoinservice_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".critereselection ( 
	id                   bigint DEFAULT nextval('critereselection_id_seq'::regclass) NOT NULL  ,
	idbesoin             bigint    ,
	experience           varchar(255)    ,
	sexe                 varchar(255)    ,
	sm                   varchar(255)    ,
	CONSTRAINT critereselection_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".cvgrade ( 
	id                   bigint DEFAULT nextval('cvgrade_id_seq'::regclass) NOT NULL  ,
	idcv                 bigint    ,
	idfiliere            bigint    ,
	idgrade              bigint    ,
	lienpreuvegrade      varchar(255)    ,
	CONSTRAINT cvgrade_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".personnel ( 
	id                   bigint DEFAULT nextval('personnel_id_seq'::regclass) NOT NULL  ,
	idposte              bigint    ,
	idservice            bigint    ,
	nom                  varchar(255)    ,
	prenom               varchar(255)    ,
	dtn                  date    ,
	dtembauche           date    ,
	idfonction           bigint    ,
	cnaps                varchar  NOT NULL  ,
	mtr                  varchar  NOT NULL  ,
	seniority            integer[]    ,
	CONSTRAINT personnel_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".posteservice ( 
	id                   bigint DEFAULT nextval('posteservice_id_seq'::regclass) NOT NULL  ,
	idposte              bigint    ,
	idservice            bigint    ,
	CONSTRAINT posteservice_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".criteregrade ( 
	coeff                double precision    ,
	id                   bigint DEFAULT nextval('criteregrade_id_seq'::regclass) NOT NULL  ,
	idcritereselection   bigint    ,
	idfiliere            bigint    ,
	idgrade              bigint    ,
	CONSTRAINT criteregrade_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".debutconge ( 
	id                   bigint DEFAULT nextval('debutconge_id_seq'::regclass) NOT NULL  ,
	debut                date    ,
	idpersonnel          bigint    ,
	motif                varchar(255)    ,
	"type"               bigint    ,
	etat                 bigint    ,
	fin                  date    ,
	CONSTRAINT debutconge_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".fichedeposte ( 
	id                   bigint DEFAULT nextval('fichedeposte_id_seq'::regclass) NOT NULL  ,
	idcv                 bigint    ,
	contrat              varchar(200)    ,
	pathcontrat          varchar(255)    ,
	responsabilite       text    ,
	mission              text    ,
	idsuperieur          bigint    ,
	matricule            varchar(10)    ,
	CONSTRAINT fichedeposte_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".fichedeposteaffiliation ( 
	id                   bigint DEFAULT nextval('fichedeposteaffiliation_id_seq'::regclass) NOT NULL  ,
	idfichedeposte       bigint    ,
	idaffiliation        bigint    ,
	CONSTRAINT fichedeposteaffiliation_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".finconge ( 
	id                   bigint DEFAULT nextval('finconge_id_seq'::regclass) NOT NULL  ,
	duree                double precision    ,
	fin                  date    ,
	iddebut              bigint    ,
	CONSTRAINT finconge_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".heure_supp ( 
	id                   bigint DEFAULT nextval('heure_supp_id_seq'::regclass) NOT NULL  ,
	idpersonnel          bigint  NOT NULL  ,
	idtype_hs            bigint    ,
	date_                date DEFAULT CURRENT_DATE NOT NULL  ,
	nb_heure             integer  NOT NULL  ,
	CONSTRAINT pk_heure_supp PRIMARY KEY ( id )
 );

ALTER TABLE "public".besoinservice ADD CONSTRAINT fk_besoinservice_poste FOREIGN KEY ( idposte ) REFERENCES "public".poste( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".besoinservice ADD CONSTRAINT fk_besoinservice_region FOREIGN KEY ( idregion ) REFERENCES "public".region( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".besoinservice ADD CONSTRAINT fk_besoinservice_service FOREIGN KEY ( idservice ) REFERENCES "public".service( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".criteregrade ADD CONSTRAINT fk_criteregrade_critereselection FOREIGN KEY ( idcritereselection ) REFERENCES "public".critereselection( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".criteregrade ADD CONSTRAINT fk_criteregrade_filiere FOREIGN KEY ( idfiliere ) REFERENCES "public".filiere( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".criteregrade ADD CONSTRAINT fk_criteregrade_grade FOREIGN KEY ( idgrade ) REFERENCES "public".grade( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".critereselection ADD CONSTRAINT fk_critereselection_besoinservice FOREIGN KEY ( idbesoin ) REFERENCES "public".besoinservice( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".cvgrade ADD CONSTRAINT fk_cvgrade_cv FOREIGN KEY ( idcv ) REFERENCES "public".cv( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".cvgrade ADD CONSTRAINT fk_cvgrade_filiere FOREIGN KEY ( idfiliere ) REFERENCES "public".filiere( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".cvgrade ADD CONSTRAINT fk_cvgrade_grade FOREIGN KEY ( idgrade ) REFERENCES "public".grade( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".debutconge ADD CONSTRAINT fk_debutconge_personnel FOREIGN KEY ( idpersonnel ) REFERENCES "public".personnel( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".fichedeposte ADD CONSTRAINT fichedeposte_idcv_fkey FOREIGN KEY ( idcv ) REFERENCES "public".cv( id );

ALTER TABLE "public".fichedeposte ADD CONSTRAINT fichedeposte_idsuperieur_fkey FOREIGN KEY ( idsuperieur ) REFERENCES "public".personnel( id );

ALTER TABLE "public".fichedeposteaffiliation ADD CONSTRAINT fichedeposteaffiliation_idaffiliation_fkey FOREIGN KEY ( idaffiliation ) REFERENCES "public".affiliation( id );

ALTER TABLE "public".fichedeposteaffiliation ADD CONSTRAINT fichedeposteaffiliation_idfichedeposte_fkey FOREIGN KEY ( idfichedeposte ) REFERENCES "public".fichedeposte( id );

ALTER TABLE "public".finconge ADD CONSTRAINT fk_finconge_debutconge FOREIGN KEY ( iddebut ) REFERENCES "public".debutconge( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".heure_supp ADD CONSTRAINT fk_heure_supp_type_hs FOREIGN KEY ( idtype_hs ) REFERENCES "public".type_hs( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".heure_supp ADD CONSTRAINT fk_heure_supp_personnel FOREIGN KEY ( idpersonnel ) REFERENCES "public".personnel( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".personnel ADD CONSTRAINT fk_personnel_fonction FOREIGN KEY ( idfonction ) REFERENCES "public".fonction( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".personnel ADD CONSTRAINT fk_personnel_poste FOREIGN KEY ( idposte ) REFERENCES "public".poste( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".personnel ADD CONSTRAINT fk_personnel_service FOREIGN KEY ( idservice ) REFERENCES "public".service( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".personnel ADD CONSTRAINT fkmla5xrmak15pwth5vf1r3dxuk FOREIGN KEY ( idfonction ) REFERENCES "public".filiere( id );

ALTER TABLE "public".posteservice ADD CONSTRAINT fk_posteservice_poste FOREIGN KEY ( idposte ) REFERENCES "public".poste( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".posteservice ADD CONSTRAINT fk_posteservice_service FOREIGN KEY ( idservice ) REFERENCES "public".service( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".questionannonce ADD CONSTRAINT fk_questionannonce_annonce FOREIGN KEY ( idannonce ) REFERENCES "public".annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".questionannonce ADD CONSTRAINT fk_questionannonce_question FOREIGN KEY ( idquestion ) REFERENCES "public".question( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".questionreponse ADD CONSTRAINT fkho8caewikn0e7nwn76je0f8cm FOREIGN KEY ( idquestion ) REFERENCES "public".question( id );

ALTER TABLE "public".reponsetest ADD CONSTRAINT fk_reponsetest_annonce FOREIGN KEY ( idannonce ) REFERENCES "public".annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "public".reponsetest ADD CONSTRAINT fk_reponsetest_cv FOREIGN KEY ( idcv ) REFERENCES "public".cv( id ) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE VIEW "public".v_besoinannonce AS  SELECT a.id AS idannonce,
    bs.datebesoinservice,
    bs.volumehoraire,
    bs.volumetache,
    bs.id,
    bs.idposte,
    bs.idregion,
    bs.idservice,
    bs.description,
    bs.qualite,
    bs.typecontrat
   FROM (annonce a
     JOIN besoinservice bs ON ((bs.id = a.idbesoinservice)));

CREATE VIEW "public".v_congerestant AS  SELECT r.idpersonnel,
    r.nom,
    r.prenom,
    (((r.months_since_hiring * 2.5))::double precision - r.total_duree) AS reste
   FROM ( SELECT p.id AS idpersonnel,
            p.nom,
            p.prenom,
            COALESCE(sum(
                CASE
                    WHEN (dc.type = 0) THEN fc.duree
                    ELSE (0)::double precision
                END), (0)::double precision) AS total_duree,
            ((EXTRACT(year FROM age(now(), (p.dtembauche)::timestamp with time zone)) * (12)::numeric) + EXTRACT(month FROM age(now(), (p.dtembauche)::timestamp with time zone))) AS months_since_hiring
           FROM ((personnel p
             LEFT JOIN debutconge dc ON ((p.id = dc.idpersonnel)))
             LEFT JOIN finconge fc ON ((dc.id = fc.iddebut)))
          GROUP BY p.id, p.nom, p.prenom, p.dtembauche) r;

CREATE VIEW "public".v_payroll AS  SELECT personnel.id,
    (((personnel.nom)::text || ' '::text) || (personnel.prenom)::text) AS full_name,
    personnel.dtembauche,
    fonction.nom AS fonction,
    service.nom AS service,
    poste.nom AS poste,
    poste.starting_salary
   FROM (((personnel
     JOIN fonction ON ((personnel.idfonction = fonction.id)))
     JOIN service ON ((personnel.idservice = service.id)))
     JOIN poste ON ((personnel.idposte = poste.id)));

CREATE VIEW "public".v_personnel AS  SELECT p.id,
    p.nom,
    p.prenom,
    p.dtn,
    p.dtembauche,
    s.nom AS service,
    po.nom AS poste,
    f.nom AS fonction
   FROM (((personnel p
     JOIN service s ON ((s.id = p.idservice)))
     JOIN fonction f ON ((f.id = p.idfonction)))
     JOIN poste po ON ((po.id = p.idposte)));

CREATE VIEW "public".v_terminerconge AS  SELECT d.id AS iddebut,
    p.id AS idpersonnel,
    p.nom,
    p.prenom,
    d.debut,
    d.type,
    d.motif,
    d.fin,
    d.etat
   FROM (debutconge d
     JOIN personnel p ON ((p.id = d.idpersonnel)))
  WHERE (NOT (d.id IN ( SELECT finconge.iddebut
           FROM finconge)));
		   
CREATE VIEW "public".v_prendreconge AS  SELECT personnel.id AS idpersonnel,
    personnel.nom,
    personnel.prenom
   FROM personnel
  WHERE (NOT (personnel.id IN ( SELECT v_terminerconge.idpersonnel
           FROM v_terminerconge)));


