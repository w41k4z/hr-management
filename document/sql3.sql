CREATE SCHEMA IF NOT EXISTS "public";

CREATE SEQUENCE affiliation_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE affiliaton_id_seq AS integer START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE annonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE annonce_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE annonce_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE annonce_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE besoinservice_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE besoinservice_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE besoinservice_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE besoinservice_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE criteregrade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE criteregrade_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE criteregrade_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE criteregrade_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE critereselection_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE critereselection_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE critereselection_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE cv_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE cv_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE cv_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE cv_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE cvexperience_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE cvexperience_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE cvexperience_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE cvexperience_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE cvgrade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE cvgrade_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE cvgrade_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE cvgrade_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE debutconge_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE fichedeposte_id_seq AS integer START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE fichedeposteaffiliation_id_seq AS integer START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE filiere_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE filiere_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE filiere_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE filiere_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE finconge_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE fonction_id_seq AS integer START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE grade_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE grade_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE grade_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE myuser_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE personnel_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE poste_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE poste_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE poste_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE poste_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE posteservice_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE posteservice_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE posteservice_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE posteservice_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE question_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE question_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE question_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE question_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE questionannonce_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE questionannonce_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE questionannonce_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE questionannonce_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE questionreponse_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE questionreponse_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE questionreponse_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE questionreponse_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE region_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE region_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE region_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE region_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE reponsetest_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE reponsetest_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE service_id_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE service_id_seq1 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE service_id_seq2 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE service_id_seq3 START WITH 1 INCREMENT BY 1;

CREATE  TABLE affiliation ( 
	id                   bigserial DEFAULT nextval('affiliation_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT affiliation_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE affiliaton ( 
	id                   serial DEFAULT nextval('affiliaton_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(200)    ,
	CONSTRAINT affiliaton_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE annonce ( 
	id                   bigint DEFAULT nextval('annonce_id_seq3'::regclass) NOT NULL  ,
	idbesoinservice      bigint    ,
	CONSTRAINT annonce_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE cv ( 
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

CREATE  TABLE cvexperience ( 
	id                   bigint DEFAULT nextval('cvexperience_id_seq3'::regclass) NOT NULL  ,
	idcv                 bigint    ,
	description          varchar(255)    ,
	lienpreuveexperience varchar(255)    ,
	CONSTRAINT cvexperience_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE filiere ( 
	id                   bigint DEFAULT nextval('filiere_id_seq3'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT filiere_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE fonction ( 
	id                   serial DEFAULT nextval('fonction_id_seq'::regclass) NOT NULL  ,
	nom                  varchar(10)    ,
	CONSTRAINT fonction_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE grade ( 
	id                   bigint DEFAULT nextval('grade_id_seq2'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT grade_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE poste ( 
	id                   bigint DEFAULT nextval('poste_id_seq3'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT poste_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE question ( 
	id                   bigint DEFAULT nextval('question_id_seq3'::regclass) NOT NULL  ,
	question             varchar(255)  NOT NULL  ,
	CONSTRAINT question_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE questionannonce ( 
	date_question_annonce date  NOT NULL  ,
	id                   bigint DEFAULT nextval('questionannonce_id_seq3'::regclass) NOT NULL  ,
	idannonce            bigint  NOT NULL  ,
	idquestion           bigint  NOT NULL  ,
	CONSTRAINT questionannonce_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_questionannonce_annonce FOREIGN KEY ( idannonce ) REFERENCES annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_questionannonce_question FOREIGN KEY ( idquestion ) REFERENCES question( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE questionreponse ( 
	id                   bigint DEFAULT nextval('questionreponse_id_seq3'::regclass) NOT NULL  ,
	idquestion           bigint  NOT NULL  ,
	reponse              varchar(255)  NOT NULL  ,
	status               varchar(255)  NOT NULL  ,
	CONSTRAINT questionreponse_pkey PRIMARY KEY ( id ),
	CONSTRAINT fkho8caewikn0e7nwn76je0f8cm FOREIGN KEY ( idquestion ) REFERENCES question( id )   
 );

CREATE  TABLE region ( 
	id                   bigint DEFAULT nextval('region_id_seq3'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT region_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE reponsetest ( 
	date_test            date  NOT NULL  ,
	point                double precision  NOT NULL  ,
	id                   bigint DEFAULT nextval('reponsetest_id_seq1'::regclass) NOT NULL  ,
	idannonce            bigint  NOT NULL  ,
	idcv                 bigint  NOT NULL  ,
	CONSTRAINT reponsetest_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_reponsetest_annonce FOREIGN KEY ( idannonce ) REFERENCES annonce( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_reponsetest_cv FOREIGN KEY ( idcv ) REFERENCES cv( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE service ( 
	id                   bigint DEFAULT nextval('service_id_seq3'::regclass) NOT NULL  ,
	nom                  varchar(255)    ,
	CONSTRAINT service_pkey PRIMARY KEY ( id )
 );

CREATE  TABLE besoinservice ( 
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
	CONSTRAINT fk_besoinservice_poste FOREIGN KEY ( idposte ) REFERENCES poste( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_besoinservice_region FOREIGN KEY ( idregion ) REFERENCES region( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_besoinservice_service FOREIGN KEY ( idservice ) REFERENCES service( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE critereselection ( 
	id                   bigint DEFAULT nextval('critereselection_id_seq2'::regclass) NOT NULL  ,
	idbesoin             bigint    ,
	experience           varchar(255)    ,
	sexe                 varchar(255)    ,
	sm                   varchar(255)    ,
	CONSTRAINT critereselection_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_critereselection_besoinservice FOREIGN KEY ( idbesoin ) REFERENCES besoinservice( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE cvgrade ( 
	id                   bigint DEFAULT nextval('cvgrade_id_seq3'::regclass) NOT NULL  ,
	idcv                 bigint    ,
	idfiliere            bigint    ,
	idgrade              bigint    ,
	lienpreuvegrade      varchar(255)    ,
	CONSTRAINT cvgrade_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_cvgrade_cv FOREIGN KEY ( idcv ) REFERENCES cv( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_cvgrade_filiere FOREIGN KEY ( idfiliere ) REFERENCES filiere( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_cvgrade_grade FOREIGN KEY ( idgrade ) REFERENCES grade( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE personnel ( 
	id                   bigint DEFAULT nextval('personnel_id_seq'::regclass) NOT NULL  ,
	idposte              bigint    ,
	idservice            bigint    ,
	nom                  varchar(255)    ,
	prenom               varchar(255)    ,
	dtn                  date    ,
	dtembauche           date    ,
	idfonction           bigint    ,
	CONSTRAINT personnel_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_personnel_poste FOREIGN KEY ( idposte ) REFERENCES poste( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_personnel_service FOREIGN KEY ( idservice ) REFERENCES service( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_personnel_fonction FOREIGN KEY ( idfonction ) REFERENCES fonction( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE posteservice ( 
	id                   bigint DEFAULT nextval('posteservice_id_seq3'::regclass) NOT NULL  ,
	idposte              bigint    ,
	idservice            bigint    ,
	CONSTRAINT posteservice_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_posteservice_poste FOREIGN KEY ( idposte ) REFERENCES poste( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_posteservice_service FOREIGN KEY ( idservice ) REFERENCES service( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE criteregrade ( 
	coeff                double precision    ,
	id                   bigint DEFAULT nextval('criteregrade_id_seq3'::regclass) NOT NULL  ,
	idcritereselection   bigint    ,
	idfiliere            bigint    ,
	idgrade              bigint    ,
	CONSTRAINT criteregrade_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_criteregrade_critereselection FOREIGN KEY ( idcritereselection ) REFERENCES critereselection( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_criteregrade_filiere FOREIGN KEY ( idfiliere ) REFERENCES filiere( id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_criteregrade_grade FOREIGN KEY ( idgrade ) REFERENCES grade( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE debutconge ( 
	id                   bigserial DEFAULT nextval('debutconge_id_seq'::regclass) NOT NULL  ,
	debut                date    ,
	idpersonnel          bigint    ,
	motif                varchar(255)    ,
	"type"               bigint    ,
	CONSTRAINT debutconge_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_debutconge_personnel FOREIGN KEY ( idpersonnel ) REFERENCES personnel( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE fichedeposte ( 
	id                   bigserial DEFAULT nextval('fichedeposte_id_seq'::regclass) NOT NULL  ,
	idcv                 bigint    ,
	contrat              varchar(200)    ,
	pathcontrat          varchar(255)    ,
	responsabilite       text    ,
	mission              text    ,
	idsuperieur          bigint    ,
	matricule            varchar(10)    ,
	CONSTRAINT fichedeposte_pkey PRIMARY KEY ( id ),
	CONSTRAINT fichedeposte_idcv_fkey FOREIGN KEY ( idcv ) REFERENCES cv( id )   ,
	CONSTRAINT fichedeposte_idsuperieur_fkey FOREIGN KEY ( idsuperieur ) REFERENCES personnel( id )   
 );

CREATE  TABLE fichedeposteaffiliation ( 
	id                   bigserial DEFAULT nextval('fichedeposteaffiliation_id_seq'::regclass) NOT NULL  ,
	idfichedeposte       bigint    ,
	idaffiliation        bigint    ,
	CONSTRAINT fichedeposteaffiliation_pkey PRIMARY KEY ( id ),
	CONSTRAINT fichedeposteaffiliation_idaffiliation_fkey FOREIGN KEY ( idaffiliation ) REFERENCES affiliation( id )   ,
	CONSTRAINT fichedeposteaffiliation_idfichedeposte_fkey FOREIGN KEY ( idfichedeposte ) REFERENCES fichedeposte( id )   
 );

CREATE  TABLE finconge ( 
	id                   bigserial DEFAULT nextval('finconge_id_seq'::regclass) NOT NULL  ,
	duree                double precision    ,
	fin                  date    ,
	iddebut              bigint    ,
	CONSTRAINT finconge_pkey PRIMARY KEY ( id ),
	CONSTRAINT fk_finconge_debutconge FOREIGN KEY ( iddebut ) REFERENCES debutconge( id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE OR REPLACE VIEW v_besoinannonce AS SELECT a.id AS idannonce,     bs.datebesoinservice,     bs.volumehoraire,     bs.volumetache,     bs.id,     bs.idposte,     bs.idregion,     bs.idservice,     bs.description,     bs.qualite,     bs.typecontrat    FROM (annonce a      JOIN besoinservice bs ON ((bs.id = a.idbesoinservice)))
 SELECT a.id AS idannonce,
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

CREATE OR REPLACE VIEW v_personnel AS SELECT p.id,     p.nom,     p.prenom,     p.dtn,     p.dtembauche,     s.nom AS service,     po.nom AS poste,     f.nom AS fonction    FROM (((personnel p      JOIN service s ON ((s.id = p.idservice)))      JOIN fonction f ON ((f.id = p.idfonction)))      JOIN poste po ON ((po.id = p.idposte)))
 SELECT p.id,
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

INSERT INTO affiliation( id, nom ) VALUES ( 1, 'Cnaps');
INSERT INTO affiliation( id, nom ) VALUES ( 2, 'Ostie');
INSERT INTO affiliaton( id, nom ) VALUES ( 1, 'Cnaps');
INSERT INTO affiliaton( id, nom ) VALUES ( 2, 'Ostie');
INSERT INTO annonce( id, idbesoinservice ) VALUES ( 1, 1);
INSERT INTO annonce( id, idbesoinservice ) VALUES ( 2, 2);
INSERT INTO annonce( id, idbesoinservice ) VALUES ( 3, 3);
INSERT INTO annonce( id, idbesoinservice ) VALUES ( 4, 4);
INSERT INTO annonce( id, idbesoinservice ) VALUES ( 5, 5);
INSERT INTO cv( id, adresse, cin, email, nom, prenom, sexe, sm, tel ) VALUES ( 1, 'A1', 'C1', 'A1@mail.com', 'CVN1', 'CVP1', 'Homme', 'Marie', 'T1');
INSERT INTO cv( id, adresse, cin, email, nom, prenom, sexe, sm, tel ) VALUES ( 2, 'A2', 'C2', 'A2@mail.com', 'CVN2', 'CVP2', 'Homme', 'Marie', 'T2');
INSERT INTO filiere( id, nom ) VALUES ( 1, 'Design');
INSERT INTO filiere( id, nom ) VALUES ( 2, 'Info');
INSERT INTO filiere( id, nom ) VALUES ( 3, 'Compta');
INSERT INTO filiere( id, nom ) VALUES ( 4, 'Managment');
INSERT INTO fonction( id, nom ) VALUES ( 1, 'F1');
INSERT INTO fonction( id, nom ) VALUES ( 2, 'HC');
INSERT INTO grade( id, nom ) VALUES ( 1, 'BACC');
INSERT INTO grade( id, nom ) VALUES ( 2, 'DTS');
INSERT INTO grade( id, nom ) VALUES ( 3, 'LICENSE');
INSERT INTO grade( id, nom ) VALUES ( 4, 'MASTER');
INSERT INTO grade( id, nom ) VALUES ( 5, 'DOCTORAT');
INSERT INTO poste( id, nom ) VALUES ( 1, 'Directeur des op‚rations');
INSERT INTO poste( id, nom ) VALUES ( 2, 'Responsable des ventes');
INSERT INTO poste( id, nom ) VALUES ( 3, 'Analyste financier');
INSERT INTO poste( id, nom ) VALUES ( 4, 'Ing‚nieur logiciel');
INSERT INTO poste( id, nom ) VALUES ( 5, 'Sp‚cialiste en marketing');
INSERT INTO poste( id, nom ) VALUES ( 6, 'Assistant administratif');
INSERT INTO poste( id, nom ) VALUES ( 7, 'Technicien de support');
INSERT INTO poste( id, nom ) VALUES ( 8, 'Chef de projet');
INSERT INTO poste( id, nom ) VALUES ( 9, 'Ressources humaines');
INSERT INTO poste( id, nom ) VALUES ( 10, 'P1');
INSERT INTO poste( id, nom ) VALUES ( 11, 'P2');
INSERT INTO poste( id, nom ) VALUES ( 12, 'P3');
INSERT INTO question( id, question ) VALUES ( 1, 'Quelles sont vos comp‚tences en d‚veloppement logiciel ?');
INSERT INTO question( id, question ) VALUES ( 2, 'Avez-vous de l''exp‚rience dans le d‚veloppement Full Stack ?');
INSERT INTO question( id, question ) VALUES ( 3, 'Comment g‚rez-vous les projets techniques ?');
INSERT INTO question( id, question ) VALUES ( 4, 'Quelle est votre exp‚rience en tant qu''ing‚nieur logiciel ?');
INSERT INTO question( id, question ) VALUES ( 5, 'Comment g‚rez-vous le travail … temps plein ?');
INSERT INTO question( id, question ) VALUES ( 6, 'Quelles sont vos comp‚tences en d‚veloppement Front-end ?');
INSERT INTO question( id, question ) VALUES ( 7, 'Avez-vous de l''exp‚rience en gestion de projet technique ?');
INSERT INTO question( id, question ) VALUES ( 8, 'D‚crivez votre exp‚rience en tant que d‚veloppeur Full Stack.');
INSERT INTO question( id, question ) VALUES ( 9, 'Comment g‚rez-vous le travail … temps partiel ?');
INSERT INTO question( id, question ) VALUES ( 10, 'Quelles sont vos comp‚tences en gestion de projet IT ?');
INSERT INTO question( id, question ) VALUES ( 11, 'Quelle est votre exp‚rience en tant que chef de projet IT ?');
INSERT INTO question( id, question ) VALUES ( 12, 'Comment g‚rez-vous les contrats en tant que contractor ?');
INSERT INTO question( id, question ) VALUES ( 13, 'Quelles sont vos comp‚tences en tant que chef de projet IT ?');
INSERT INTO question( id, question ) VALUES ( 14, 'Quelle est votre exp‚rience en tant que chef de projet IT ?');
INSERT INTO question( id, question ) VALUES ( 15, 'Comment g‚rez-vous les contrats en tant que contractor ?');
INSERT INTO question( id, question ) VALUES ( 16, 'Quelles sont vos comp‚tences en d‚veloppement logiciel ?');
INSERT INTO question( id, question ) VALUES ( 17, 'Avez-vous de l''exp‚rience dans le d‚veloppement Full Stack ?');
INSERT INTO question( id, question ) VALUES ( 18, 'Comment g‚rez-vous les projets techniques ?');
INSERT INTO question( id, question ) VALUES ( 19, 'Quelle est votre exp‚rience en tant qu''ing‚nieur logiciel ?');
INSERT INTO question( id, question ) VALUES ( 20, 'Comment g‚rez-vous le travail … temps plein ?');
INSERT INTO question( id, question ) VALUES ( 21, 'Quelles sont vos comp‚tences en d‚veloppement Front-end ?');
INSERT INTO question( id, question ) VALUES ( 22, 'Avez-vous de l''exp‚rience en gestion de projet technique ?');
INSERT INTO question( id, question ) VALUES ( 23, 'D‚crivez votre exp‚rience en tant que d‚veloppeur Full Stack.');
INSERT INTO question( id, question ) VALUES ( 24, 'Comment g‚rez-vous le travail … temps partiel ?');
INSERT INTO question( id, question ) VALUES ( 25, 'Quelles sont vos comp‚tences en gestion de projet IT ?');
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 1, 1, 1);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 2, 1, 2);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 3, 1, 3);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 4, 1, 4);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 5, 1, 5);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 6, 2, 6);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 7, 2, 7);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 8, 2, 8);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 9, 2, 9);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 10, 2, 10);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 11, 3, 11);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 12, 3, 12);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 13, 3, 13);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 14, 3, 14);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 15, 3, 15);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 16, 4, 16);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 17, 4, 17);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 18, 4, 18);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 19, 4, 19);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 20, 4, 20);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 21, 5, 21);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 22, 5, 22);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 23, 5, 23);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 24, 5, 24);
INSERT INTO questionannonce( date_question_annonce, id, idannonce, idquestion ) VALUES ( '2023-10-05', 25, 5, 25);
INSERT INTO region( id, nom ) VALUES ( 1, 'Diana');
INSERT INTO region( id, nom ) VALUES ( 2, 'Sava');
INSERT INTO region( id, nom ) VALUES ( 3, 'Itasy');
INSERT INTO region( id, nom ) VALUES ( 4, 'Analamanga');
INSERT INTO region( id, nom ) VALUES ( 5, 'Vakinankaratra');
INSERT INTO region( id, nom ) VALUES ( 6, 'Bongolava');
INSERT INTO region( id, nom ) VALUES ( 7, 'Sofia');
INSERT INTO region( id, nom ) VALUES ( 8, 'Boeny');
INSERT INTO region( id, nom ) VALUES ( 9, 'Betsiboka');
INSERT INTO region( id, nom ) VALUES ( 10, 'Melaky');
INSERT INTO region( id, nom ) VALUES ( 11, 'Alaotra-Mangoro');
INSERT INTO region( id, nom ) VALUES ( 12, 'Atsinanana');
INSERT INTO region( id, nom ) VALUES ( 13, 'Analanjirofo');
INSERT INTO region( id, nom ) VALUES ( 14, 'Ambatosoa');
INSERT INTO region( id, nom ) VALUES ( 15, 'Amoron i Mania');
INSERT INTO region( id, nom ) VALUES ( 16, 'Vatovavy');
INSERT INTO region( id, nom ) VALUES ( 17, 'Fitovinany');
INSERT INTO region( id, nom ) VALUES ( 18, 'Haute Matsiatra');
INSERT INTO region( id, nom ) VALUES ( 19, 'Atsimo-Atsinanana');
INSERT INTO region( id, nom ) VALUES ( 20, 'Ihorombe');
INSERT INTO region( id, nom ) VALUES ( 21, 'Menabe');
INSERT INTO region( id, nom ) VALUES ( 22, 'Atsimo-Andrefana');
INSERT INTO service( id, nom ) VALUES ( 1, 'security');
INSERT INTO service( id, nom ) VALUES ( 2, 'finance');
INSERT INTO service( id, nom ) VALUES ( 3, 'information system');
INSERT INTO service( id, nom ) VALUES ( 4, 'marketing');
INSERT INTO service( id, nom ) VALUES ( 5, 'production');
INSERT INTO service( id, nom ) VALUES ( 6, 'sales');
INSERT INTO service( id, nom ) VALUES ( 7, 'customer service');
INSERT INTO service( id, nom ) VALUES ( 8, 'administration');
INSERT INTO service( id, nom ) VALUES ( 9, 'maintenance');
INSERT INTO service( id, nom ) VALUES ( 10, 'research');
INSERT INTO service( id, nom ) VALUES ( 11, 'planning');
INSERT INTO service( id, nom ) VALUES ( 12, 'quality assurance');
INSERT INTO service( id, nom ) VALUES ( 13, 'driving');
INSERT INTO besoinservice( datebesoinservice, volumehoraire, volumetache, id, idposte, idregion, idservice, description, qualite, typecontrat ) VALUES ( '2023-10-02', 160.0, 40.0, 1, 3, 2, 1, 'Ing‚nieur logiciel chez XYZ Corp. - Full-time position', 'High', 'Full-time');
INSERT INTO besoinservice( datebesoinservice, volumehoraire, volumetache, id, idposte, idregion, idservice, description, qualite, typecontrat ) VALUES ( '2023-10-03', 80.0, 20.0, 2, 4, 1, 2, 'D‚veloppeur Full Stack chez ABC Company - Part-time position', 'Medium', 'Part-time');
INSERT INTO besoinservice( datebesoinservice, volumehoraire, volumetache, id, idposte, idregion, idservice, description, qualite, typecontrat ) VALUES ( '2023-10-04', 120.0, 30.0, 3, 2, 3, 3, 'Chef de projet IT chez DEF Ltd. - Contractor position', 'Low', 'Contractor');
INSERT INTO besoinservice( datebesoinservice, volumehoraire, volumetache, id, idposte, idregion, idservice, description, qualite, typecontrat ) VALUES ( '2023-10-05', 140.0, 35.0, 4, 5, 2, 1, 'Ing‚nieur logiciel chez XYZ Corp. - Full-time position', 'High', 'Full-time');
INSERT INTO besoinservice( datebesoinservice, volumehoraire, volumetache, id, idposte, idregion, idservice, description, qualite, typecontrat ) VALUES ( '2023-10-06', 100.0, 25.0, 5, 1, 3, 2, 'D‚veloppeur Front-end - Part-time position', 'Medium', 'Part-time');
INSERT INTO personnel( id, idposte, idservice, nom, prenom, dtn, dtembauche, idfonction ) VALUES ( 1, 1, 1, 'PN1', 'PN1', '1990-01-01', '2020-01-01', 1);
INSERT INTO personnel( id, idposte, idservice, nom, prenom, dtn, dtembauche, idfonction ) VALUES ( 2, 2, 2, 'PN2', 'PN2', '1998-08-08', '2022-02-02', 2);
INSERT INTO fichedeposte( id, idcv, contrat, pathcontrat, responsabilite, mission, idsuperieur, matricule ) VALUES ( 1, 1, 'CDI', 'CV.pdf', 'sdfs', 'wd', 1, '1CY5QD');
INSERT INTO fichedeposte( id, idcv, contrat, pathcontrat, responsabilite, mission, idsuperieur, matricule ) VALUES ( 2, 1, 'CDI', 'CV.pdf', 'sdfs', 'wd', 1, '1CY5QD');
INSERT INTO fichedeposteaffiliation( id, idfichedeposte, idaffiliation ) VALUES ( 1, 1, 2);
INSERT INTO fichedeposteaffiliation( id, idfichedeposte, idaffiliation ) VALUES ( 2, 2, 2);
INSERT INTO fichedeposteaffiliation( id, idfichedeposte, idaffiliation ) VALUES ( 3, 2, 1);




create  or replace view v_terminerconge as select d.id as iddebut,p.id as idpersonnel,p.nom,p.prenom,d.debut,d.type,d.motif,d.fin,d.etat from debutconge d join personnel p on p.id=d.idpersonnel where d.id not in (select iddebut from finconge);

create or replace view v_prendreconge as  select id as idpersonnel,nom,prenom from personnel where id not in (select idpersonnel from v_terminerconge);


create or replace view v_congerestant as select idpersonnel,nom,prenom,(months_since_hiring*2.5)-total_duree as reste from (
	SELECT
    p.id AS idpersonnel,
    p.nom,
    p.prenom,
    COALESCE(SUM(CASE WHEN dc.type = 0 THEN fc.duree ELSE 0 END), 0) AS total_duree,
    EXTRACT(YEAR FROM AGE(NOW(), p.dtembauche)) * 12 + EXTRACT(MONTH FROM AGE(NOW(), p.dtembauche)) AS months_since_hiring
FROM
    personnel AS p
    LEFT JOIN debutconge AS dc ON p.id = dc.idpersonnel
    LEFT JOIN finconge AS fc ON dc.id = fc.iddebut
GROUP BY
    p.id, p.nom, p.prenom, p.dtembauche
) as r;

