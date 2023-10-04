\c postgres;
CREATE USER hr PASSWORD 'hr';
ALTER ROLE hr SUPERUSER;

CREATE DATABASE hrmanagment;
\c hrmanagment;

CREATE SEQUENCE "public".annonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".annonce_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".besoinservice_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".besoinservice_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".criteregrade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".criteregrade_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".critereselection_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cv_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cv_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvexperience_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvexperience_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvgrade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvgrade_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".filiere_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".filiere_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".grade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".myuser_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".poste_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".poste_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".posteservice_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".posteservice_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".question_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".question_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionannonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionannonce_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionreponse_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionreponse_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".region_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".region_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".service_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".service_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE  TABLE "public".annonce ( 
	id                   bigint DEFAULT nextval('annonce_id_seq1'::regclass) NOT NULL  ,
	idbesoinservice      bigint    ,
	CONSTRAINT annonce_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".besoinservice ( 
	datebesoinservice    date    ,
	volumehoraire        double precision    ,
	volumetache          double precision    ,
	id                   bigint DEFAULT nextval('besoinservice_id_seq1'::regclass) NOT NULL  ,
	idposte              bigint    ,
	idregion             bigint    ,
	idservice            bigint    ,
	description          varchar(255)    ,
	qualite              varchar(255)    ,
	typecontrat          varchar(255)    ,
	CONSTRAINT besoinservice_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".criteregrade ( 
	coeff                double precision    ,
	id                   bigint DEFAULT nextval('criteregrade_id_seq1'::regclass) NOT NULL  ,
	idcritereselection   bigint    ,
	idfiliere            bigint    ,
	idgrade              bigint    ,
	CONSTRAINT criteregrade_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".critereselection ( 
	id                   integer DEFAULT nextval('critereselection_id_seq'::regclass) NOT NULL  ,
	idbesoin             integer    ,
	experience           text    ,
	sm                   text    ,
	sexe                 text    ,
	CONSTRAINT critereselection_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".cv ( 
	id                   bigint DEFAULT nextval('cv_id_seq1'::regclass) NOT NULL  ,
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
	id                   bigint DEFAULT nextval('cvexperience_id_seq1'::regclass) NOT NULL  ,
	idcv                 bigint    ,
	description          varchar(255)    ,
	lienpreuveexperience varchar(255)    ,
	CONSTRAINT cvexperience_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".cvgrade ( 
	id                   bigint DEFAULT nextval('cvgrade_id_seq1'::regclass) NOT NULL  ,
	idcv                 bigint    ,
	idfiliere            bigint    ,
	idgrade              bigint    ,
	lienpreuvegrade      varchar(255)    ,
	CONSTRAINT cvgrade_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".filiere ( 
	id                   bigint DEFAULT nextval('filiere_id_seq1'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT filiere_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".grade ( 
	id                   integer DEFAULT nextval('grade_id_seq'::regclass) NOT NULL  ,
	nom                  text    ,
	CONSTRAINT grade_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".myuser ( 
	id                   bigint DEFAULT nextval('myuser_id_seq'::regclass) NOT NULL  ,
	email                varchar(255)    ,
	username             varchar(255)    ,
	CONSTRAINT myuser_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".poste ( 
	id                   bigint DEFAULT nextval('poste_id_seq1'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT poste_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".posteservice ( 
	id                   bigint DEFAULT nextval('posteservice_id_seq1'::regclass) NOT NULL  ,
	idposte              bigint    ,
	idservice            bigint    ,
	CONSTRAINT posteservice_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".question ( 
	id                   bigint DEFAULT nextval('question_id_seq1'::regclass) NOT NULL  ,
	question             varchar(255)    ,
	CONSTRAINT question_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".questionannonce ( 
	id                   bigint DEFAULT nextval('questionannonce_id_seq1'::regclass) NOT NULL  ,
	idannonce            bigint    ,
	idquestion           bigint    ,
	date_question_annonce date DEFAULT CURRENT_DATE,
	CONSTRAINT questionannonce_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".questionreponse ( 
	id                   bigint DEFAULT nextval('questionreponse_id_seq1'::regclass) NOT NULL  ,
	idquestion           bigint    ,
	reponse              varchar(255)    ,
	status               varchar(255)    ,
	CONSTRAINT questionreponse_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".region ( 
	id                   bigint DEFAULT nextval('region_id_seq1'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT region_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".service ( 
	id                   bigint DEFAULT nextval('service_id_seq1'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT service_pkey PRIMARY KEY ( id )
 );

ALTER TABLE "public".questionreponse ADD CONSTRAINT fkho8caewikn0e7nwn76je0f8cm FOREIGN KEY ( idquestion ) REFERENCES "public".question( id );

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
