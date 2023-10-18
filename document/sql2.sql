CREATE SEQUENCE "public".affiliation_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".annonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".annonce_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".annonce_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".annonce_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".besoinservice_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".besoinservice_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".besoinservice_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".besoinservice_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".criteregrade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".criteregrade_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".criteregrade_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".criteregrade_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".critereselection_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".critereselection_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".critereselection_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cv_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cv_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cv_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cv_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvexperience_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvexperience_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvexperience_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvexperience_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvgrade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvgrade_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvgrade_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvgrade_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".fichedeposte_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".fichedeposteaffiliation_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".filiere_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".filiere_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".filiere_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".filiere_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".fonction_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".grade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".grade_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".grade_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".myuser_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".personnel_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".poste_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".poste_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".poste_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".poste_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".posteservice_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".posteservice_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".posteservice_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".posteservice_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".question_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".question_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".question_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".question_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionannonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionannonce_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionannonce_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionannonce_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionreponse_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionreponse_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionreponse_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionreponse_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".region_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".region_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".region_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".region_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".reponsetest_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".reponsetest_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".service_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".service_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".service_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".service_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE  TABLE "public".affiliation ( 
	id                   bigint DEFAULT nextval('affiliation_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(200)    ,
	CONSTRAINT affiliation_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".annonce ( 
	id                   bigint DEFAULT nextval('annonce_id_seq3'::regclass) NOT NULL  ,
	idbesoinservice      bigint    ,
	CONSTRAINT annonce_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".cv ( 
	id                   bigint DEFAULT nextval('cv_id_seq3'::regclass) NOT NULL  ,
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
	id                   bigint DEFAULT nextval('cvexperience_id_seq3'::regclass) NOT NULL  ,
	idcv                 bigint    ,
	description          varchar(255)    ,
	lienpreuveexperience varchar(255)    ,
	CONSTRAINT cvexperience_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".filiere ( 
	id                   bigint DEFAULT nextval('filiere_id_seq3'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT filiere_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".fonction ( 
	id                   bigint DEFAULT nextval('fonction_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(10)    ,
	CONSTRAINT fonction_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".grade ( 
	id                   bigint DEFAULT nextval('grade_id_seq2'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT grade_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".poste ( 
	id                   bigint DEFAULT nextval('poste_id_seq3'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT poste_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".question ( 
	id                   bigint DEFAULT nextval('question_id_seq3'::regclass) NOT NULL  ,
	question             varchar(255)  NOT NULL  ,
	CONSTRAINT question_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".questionannonce ( 
	date_question_annonce date  NOT NULL  ,
	id                   bigint DEFAULT nextval('questionannonce_id_seq3'::regclass) NOT NULL  ,
	idannonce            bigint  NOT NULL  ,
	idquestion           bigint  NOT NULL  ,
	CONSTRAINT questionannonce_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_questionannonce_annonce FOREIGN KEY ( idannonce ) REFERENCES "public".annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_questionannonce_question FOREIGN KEY ( idquestion ) REFERENCES "public".question( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE "public".questionreponse ( 
	id                   bigint DEFAULT nextval('questionreponse_id_seq3'::regclass) NOT NULL  ,
	idquestion           bigint  NOT NULL  ,
	reponse              varchar(255)  NOT NULL  ,
	status               varchar(255)  NOT NULL  ,
	CONSTRAINT questionreponse_pkey PRIMARY KEY ( id ),
	CONSTRAINT fkho8caewikn0e7nwn76je0f8cm FOREIGN KEY ( idquestion ) REFERENCES "public".question( id )   
 );

CREATE  TABLE "public".region ( 
	id                   bigint DEFAULT nextval('region_id_seq3'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT region_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".reponsetest ( 
	date_test            date  NOT NULL  ,
	point                double precision  NOT NULL  ,
	id                   bigint DEFAULT nextval('reponsetest_id_seq1'::regclass) NOT NULL  ,
	idannonce            bigint  NOT NULL  ,
	idcv                 bigint  NOT NULL  ,
	CONSTRAINT reponsetest_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_reponsetest_annonce FOREIGN KEY ( idannonce ) REFERENCES "public".annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_reponsetest_cv FOREIGN KEY ( idcv ) REFERENCES "public".cv( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE "public".service ( 
	id                   bigint DEFAULT nextval('service_id_seq3'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT service_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".besoinservice ( 
	datebesoinservice    date    ,
	volumehoraire        double precision    ,
	volumetache          double precision    ,
	id                   bigint DEFAULT nextval('besoinservice_id_seq3'::regclass) NOT NULL  ,
	idposte              bigint    ,
	idregion             bigint    ,
	idservice            bigint    ,
	description          varchar(255)    ,
	qualite              varchar(255)    ,
	typecontrat          varchar(255)    ,
	CONSTRAINT besoinservice_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_besoinservice_poste FOREIGN KEY ( idposte ) REFERENCES "public".poste( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_besoinservice_region FOREIGN KEY ( idregion ) REFERENCES "public".region( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_besoinservice_service FOREIGN KEY ( idservice ) REFERENCES "public".service( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE "public".critereselection ( 
	id                   bigint DEFAULT nextval('critereselection_id_seq2'::regclass) NOT NULL  ,
	idbesoin             bigint    ,
	experience           varchar(255)    ,
	sexe                 varchar(255)    ,
	sm                   varchar(255)    ,
	CONSTRAINT critereselection_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_critereselection_besoinservice FOREIGN KEY ( idbesoin ) REFERENCES "public".besoinservice( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE "public".cvgrade ( 
	id                   bigint DEFAULT nextval('cvgrade_id_seq3'::regclass) NOT NULL  ,
	idcv                 bigint    ,
	idfiliere            bigint    ,
	idgrade              bigint    ,
	lienpreuvegrade      varchar(255)    ,
	CONSTRAINT cvgrade_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_cvgrade_cv FOREIGN KEY ( idcv ) REFERENCES "public".cv( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_cvgrade_filiere FOREIGN KEY ( idfiliere ) REFERENCES "public".filiere( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_cvgrade_grade FOREIGN KEY ( idgrade ) REFERENCES "public".grade( id ) ON DELETE CASCADE ON UPDATE CASCADE 
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
	CONSTRAINT personnel_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_personnel_fonction FOREIGN KEY ( idfonction ) REFERENCES "public".fonction( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_personnel_poste FOREIGN KEY ( idposte ) REFERENCES "public".poste( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_personnel_service FOREIGN KEY ( idservice ) REFERENCES "public".service( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE "public".posteservice ( 
	id                   bigint DEFAULT nextval('posteservice_id_seq3'::regclass) NOT NULL  ,
	idposte              bigint    ,
	idservice            bigint    ,
	CONSTRAINT posteservice_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_posteservice_poste FOREIGN KEY ( idposte ) REFERENCES "public".poste( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_posteservice_service FOREIGN KEY ( idservice ) REFERENCES "public".service( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE "public".criteregrade ( 
	coeff                double precision    ,
	id                   bigint DEFAULT nextval('criteregrade_id_seq3'::regclass) NOT NULL  ,
	idcritereselection   bigint    ,
	idfiliere            bigint    ,
	idgrade              bigint    ,
	CONSTRAINT criteregrade_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_criteregrade_critereselection FOREIGN KEY ( idcritereselection ) REFERENCES "public".critereselection( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_criteregrade_filiere FOREIGN KEY ( idfiliere ) REFERENCES "public".filiere( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_criteregrade_grade FOREIGN KEY ( idgrade ) REFERENCES "public".grade( id ) ON DELETE CASCADE ON UPDATE CASCADE 
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
	CONSTRAINT fichedeposte_pkey PRIMARY KEY ( id ),
	CONSTRAINT fichedeposte_idcv_fkey FOREIGN KEY ( idcv ) REFERENCES "public".cv( id )   ,
	CONSTRAINT fichedeposte_idsuperieur_fkey FOREIGN KEY ( idsuperieur ) REFERENCES "public".personnel( id )   
 );

CREATE  TABLE "public".fichedeposteaffiliation ( 
	id                   bigint DEFAULT nextval('fichedeposteaffiliation_id_seq'::regclass) NOT NULL  ,
	idfichedeposte       bigint    ,
	idaffiliation        bigint    ,
	CONSTRAINT fichedeposteaffiliation_pkey PRIMARY KEY ( id ),
	CONSTRAINT fichedeposteaffiliation_idaffiliation_fkey FOREIGN KEY ( idaffiliation ) REFERENCES "public".affiliation( id )   ,
	CONSTRAINT fichedeposteaffiliation_idfichedeposte_fkey FOREIGN KEY ( idfichedeposte ) REFERENCES "public".fichedeposte( id )   
 );

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
