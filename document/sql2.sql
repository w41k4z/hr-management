\c postgres;
CREATE USER hr PASSWORD 'hr';
ALTER ROLE hr SUPERUSER;

CREATE DATABASE hrmanagment;
\c hrmanagment;


CREATE SEQUENCE "public".annonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".besoinservice_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".criteregrade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".critereselection_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cv_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvexperience_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".cvgrade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".filiere_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".grade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".myuser_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".poste_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".posteservice_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".question_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionannonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".questionreponse_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".region_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE "public".service_id_seq START WITH 1 INCREMENT BY 1;

CREATE  TABLE "public".cv ( 
	id                   bigint DEFAULT nextval('cv_id_seq'::regclass) NOT NULL  ,
	cin                  text    ,
	nom                  text    ,
	prenom               text    ,
	adresse              text    ,
	tel                  text    ,
	email                text    ,
	sm                   text    ,
	sexe                 text    ,
	CONSTRAINT cv_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".cvexperience ( 
	id                   bigint DEFAULT nextval('cvexperience_id_seq'::regclass) NOT NULL  ,
	idcv                 bigint    ,
	description          text    ,
	lienpreuveexperience text    ,
	CONSTRAINT cvexperience_pkey PRIMARY KEY ( id ),
	CONSTRAINT cvexperience_idcv_fkey FOREIGN KEY ( idcv ) REFERENCES "public".cv( id )   
 );

CREATE  TABLE "public".filiere ( 
	id                   bigint DEFAULT nextval('filiere_id_seq'::regclass) NOT NULL  ,
	nom                  text    ,
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
	id                   bigint DEFAULT nextval('poste_id_seq'::regclass) NOT NULL  ,
	nom                  text    ,
	CONSTRAINT poste_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".question ( 
	id                   bigint DEFAULT nextval('question_id_seq'::regclass) NOT NULL  ,
	question             text    ,
	CONSTRAINT question_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".questionreponse ( 
	id                   bigint DEFAULT nextval('questionreponse_id_seq'::regclass) NOT NULL  ,
	idquestion           bigint    ,
	reponse              varchar(255)    ,
	status               text    ,
	CONSTRAINT questionreponse_pkey PRIMARY KEY ( id ),
	CONSTRAINT questionreponse_idquestion_fkey FOREIGN KEY ( idquestion ) REFERENCES "public".question( id )   
 );

CREATE  TABLE "public".region ( 
	id                   bigint DEFAULT nextval('region_id_seq'::regclass) NOT NULL  ,
	nom                  text    ,
	CONSTRAINT region_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".service ( 
	id                   bigint DEFAULT nextval('service_id_seq'::regclass) NOT NULL  ,
	nom                  text    ,
	CONSTRAINT service_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE "public".besoinservice ( 
	id                   bigint DEFAULT nextval('besoinservice_id_seq'::regclass) NOT NULL  ,
	datebesoinservice    date    ,
	idservice            bigint    ,
	idregion             bigint    ,
	idposte              bigint    ,
	qualite              text    ,
	description          text    ,
	typecontrat          text    ,
	volumetache          double precision    ,
	volumehoraire        double precision    ,
	CONSTRAINT besoinservice_pkey PRIMARY KEY ( id ),
	CONSTRAINT besoinservice_idposte_fkey FOREIGN KEY ( idposte ) REFERENCES "public".poste( id )   ,
	CONSTRAINT besoinservice_idregion_fkey FOREIGN KEY ( idregion ) REFERENCES "public".region( id )   ,
	CONSTRAINT besoinservice_idservice_fkey FOREIGN KEY ( idservice ) REFERENCES "public".service( id )   
 );

CREATE  TABLE "public".critereselection ( 
	id                   integer DEFAULT nextval('critereselection_id_seq'::regclass) NOT NULL  ,
	idbesoin             integer    ,
	experience           text    ,
	sm                   text    ,
	sexe                 text    ,
	CONSTRAINT critereselection_pkey PRIMARY KEY ( id ),
	CONSTRAINT critereselection_idbesoin_fkey FOREIGN KEY ( idbesoin ) REFERENCES "public".besoinservice( id )   
 );

CREATE  TABLE "public".cvgrade ( 
	id                   bigint DEFAULT nextval('cvgrade_id_seq'::regclass) NOT NULL  ,
	idcv                 bigint    ,
	idfiliere            bigint    ,
	idgrade              bigint    ,
	lienpreuvegrade      text    ,
	CONSTRAINT cvgrade_pkey PRIMARY KEY ( id ),
	CONSTRAINT cvgrade_idcv_fkey FOREIGN KEY ( idcv ) REFERENCES "public".cv( id )   ,
	CONSTRAINT cvgrade_idfiliere_fkey FOREIGN KEY ( idfiliere ) REFERENCES "public".filiere( id )   ,
	CONSTRAINT cvgrade_idgrade_fkey FOREIGN KEY ( idgrade ) REFERENCES "public".grade( id )   
 );

CREATE  TABLE "public".posteservice ( 
	id                   bigint DEFAULT nextval('posteservice_id_seq'::regclass) NOT NULL  ,
	idposte              bigint    ,
	idservice            bigint    ,
	CONSTRAINT posteservice_pkey PRIMARY KEY ( id ),
	CONSTRAINT posteservice_idposte_fkey FOREIGN KEY ( idposte ) REFERENCES "public".poste( id )   ,
	CONSTRAINT posteservice_idservice_fkey FOREIGN KEY ( idservice ) REFERENCES "public".service( id )   
 );

CREATE  TABLE "public".annonce ( 
	id                   bigint DEFAULT nextval('annonce_id_seq'::regclass) NOT NULL  ,
	idbesoinservice      bigint    ,
	CONSTRAINT annonce_pkey PRIMARY KEY ( id ),
	CONSTRAINT annonce_idbesoinservice_fkey FOREIGN KEY ( idbesoinservice ) REFERENCES "public".besoinservice( id )   
 );

CREATE  TABLE "public".criteregrade ( 
	id                   bigint DEFAULT nextval('criteregrade_id_seq'::regclass) NOT NULL  ,
	idcritereselection   bigint    ,
	idfiliere            bigint    ,
	idgrade              bigint    ,
	coeff                double precision    ,
	CONSTRAINT criteregrade_pkey PRIMARY KEY ( id ),
	CONSTRAINT criteregrade_idcritereselection_fkey FOREIGN KEY ( idcritereselection ) REFERENCES "public".critereselection( id )   ,
	CONSTRAINT criteregrade_idfiliere_fkey FOREIGN KEY ( idfiliere ) REFERENCES "public".filiere( id )   ,
	CONSTRAINT criteregrade_idgrade_fkey FOREIGN KEY ( idgrade ) REFERENCES "public".grade( id )   
 );

CREATE  TABLE "public".questionannonce ( 
	idannonce            integer    ,
	idquestion           integer    ,
	id                   bigint DEFAULT nextval('questionannonce_id_seq'::regclass) NOT NULL  ,
	CONSTRAINT questionannonce_idannonce_fkey FOREIGN KEY ( idannonce ) REFERENCES "public".annonce( id )   ,
	CONSTRAINT questionannonce_idquestion_fkey FOREIGN KEY ( idquestion ) REFERENCES "public".question( id )   
 );
