INSERT INTO service VALUES
(default, 'security'),
(default, 'finance'),
(default, 'information system'),
(default, 'marketing'),
(default, 'production'),
(default, 'sales'),
(default, 'customer service'),
(default, 'administration'),
(default, 'maintenance'),
(default, 'research'),
(default, 'planning'),
(default, 'quality assurance'),
(default, 'driving');

INSERT INTO region VALUES
(default, 'Diana'),
(default,	'Sava'),
(default,	'Itasy'),	
(default,	'Analamanga'),	
(default,	'Vakinankaratra'),	
(default,	'Bongolava'),
(default,	'Sofia'),
(default,	'Boeny'),	 	
(default, 'Betsiboka'),
(default, 'Melaky'),
(default, 'Alaotra-Mangoro'),	
(default, 'Atsinanana'),
(default, 'Analanjirofo'),
(default, 'Ambatosoa'),
(default, 'Amoron i Mania'),	
(default, 'Vatovavy'),
(default, 'Fitovinany'),	
(default, 'Haute Matsiatra'),	
(default, 'Atsimo-Atsinanana'),	
(default, 'Ihorombe'),
(default, 'Menabe'),
(default, 'Atsimo-Andrefana');



-- FOR ANNONCE ONLY
INSERT INTO poste VALUES
(default,'Directeur des opérations'),
(default,'Responsable des ventes'),
(default,'Analyste financier'),
(default,'Ingénieur logiciel'),
(default,'Spécialiste en marketing'),
(default,'Assistant administratif'),
(default,'Technicien de support'),
(default,'Chef de projet'),
(default,'Ressources humaines');

INSERT INTO besoinservice (id, datebesoinservice, idservice, idregion, idposte, qualite, description, typecontrat, volumetache, volumehoraire)
VALUES (default, '2023-10-02', 1, 2, 3, 'High', 'Ingénieur logiciel chez XYZ Corp. - Full-time position', 'Full-time', 40.0, 160.0);

INSERT INTO besoinservice (id, datebesoinservice, idservice, idregion, idposte, qualite, description, typecontrat, volumetache, volumehoraire)
VALUES (default, '2023-10-03', 2, 1, 4, 'Medium', 'Développeur Full Stack chez ABC Company - Part-time position', 'Part-time', 20.0, 80.0);

INSERT INTO besoinservice (id, datebesoinservice, idservice, idregion, idposte, qualite, description, typecontrat, volumetache, volumehoraire)
VALUES (default, '2023-10-04', 3, 3, 2, 'Low', 'Chef de projet IT chez DEF Ltd. - Contractor position', 'Contractor', 30.0, 120.0);

INSERT INTO besoinservice (id, datebesoinservice, idservice, idregion, idposte, qualite, description, typecontrat, volumetache, volumehoraire)
VALUES (default, '2023-10-05', 1, 2, 5, 'High', 'Ingénieur logiciel chez XYZ Corp. - Full-time position', 'Full-time', 35.0, 140.0);

INSERT INTO besoinservice (id, datebesoinservice, idservice, idregion, idposte, qualite, description, typecontrat, volumetache, volumehoraire)
VALUES (default, '2023-10-06', 2, 3, 1, 'Medium', 'Développeur Front-end - Part-time position', 'Part-time', 25.0, 100.0);

INSERT INTO annonce VALUES (default, 1);
INSERT INTO annonce VALUES (default, 2);
INSERT INTO annonce VALUES (default, 3);
INSERT INTO annonce VALUES (default, 4);
INSERT INTO annonce VALUES (default, 5);

INSERT INTO question (id, question)
VALUES 
(default, 'Quelles sont vos compétences en développement logiciel ?'),
(default, 'Avez-vous de l''expérience dans le développement Full Stack ?'),
(default, 'Comment gérez-vous les projets techniques ?'),
(default, 'Quelle est votre expérience en tant qu''ingénieur logiciel ?'),
(default, 'Comment gérez-vous le travail à temps plein ?'),
(default, 'Quelles sont vos compétences en développement Front-end ?'),
(default, 'Avez-vous de l''expérience en gestion de projet technique ?'),
(default, 'Décrivez votre expérience en tant que développeur Full Stack.'),
(default, 'Comment gérez-vous le travail à temps partiel ?'),
(default, 'Quelles sont vos compétences en gestion de projet IT ?'),
(default, 'Quelle est votre expérience en tant que chef de projet IT ?'),
(default, 'Comment gérez-vous les contrats en tant que contractor ?'),
(default, 'Quelles sont vos compétences en tant que chef de projet IT ?'),
(default, 'Quelle est votre expérience en tant que chef de projet IT ?'),
(default, 'Comment gérez-vous les contrats en tant que contractor ?'),
(default, 'Quelles sont vos compétences en développement logiciel ?'),
(default, 'Avez-vous de l''expérience dans le développement Full Stack ?'),
(default, 'Comment gérez-vous les projets techniques ?'),
(default, 'Quelle est votre expérience en tant qu''ingénieur logiciel ?'),
(default, 'Comment gérez-vous le travail à temps plein ?'),
(default, 'Quelles sont vos compétences en développement Front-end ?'),
(default, 'Avez-vous de l''expérience en gestion de projet technique ?'),
(default, 'Décrivez votre expérience en tant que développeur Full Stack.'),
(default, 'Comment gérez-vous le travail à temps partiel ?'),
(default, 'Quelles sont vos compétences en gestion de projet IT ?');

-- Test Data 1
INSERT INTO questionannonce (idannonce, idquestion, date_question_annonce)
VALUES (1, 1, '2023-10-05'), (1, 2, '2023-10-05'), (1, 3, '2023-10-05'), (1, 4, '2023-10-05'), (1, 5, '2023-10-05');

-- Test Data 2
INSERT INTO questionannonce (idannonce, idquestion, date_question_annonce)
VALUES (2, 6, '2023-10-05'), (2, 7, '2023-10-05'), (2, 8, '2023-10-05'), (2, 9, '2023-10-05'), (2, 10, '2023-10-05');

-- Test Data 3
INSERT INTO questionannonce (idannonce, idquestion, date_question_annonce)
VALUES (3, 11, '2023-10-05'), (3, 12, '2023-10-05'), (3, 13, '2023-10-05'), (3, 14, '2023-10-05'), (3, 15, '2023-10-05');

-- Test Data 4
INSERT INTO questionannonce (idannonce, idquestion, date_question_annonce)
VALUES (4, 16, '2023-10-05'), (4, 17, '2023-10-05'), (4, 18, '2023-10-05'), (4, 19, '2023-10-05'), (4, 20, '2023-10-05');

-- Test Data 5
INSERT INTO questionannonce (idannonce, idquestion, date_question_annonce)
VALUES (5, 21, '2023-10-05'), (5, 22, '2023-10-05'), (5, 23, '2023-10-05'), (5, 24, '2023-10-05'), (5, 25, '2023-10-05');


INSERT INTO grade VALUES
(default,'BACC'),
(default,'DTS'),
(default,'LICENSE'),
(default,'MASTER'),
(default,'DOCTORAT');


INSERT INTO filiere VALUES
(default,'Design'),
(default,'Info'),
(default,'Compta'),
(default,'Managment');


INSERT INTO poste VALUES
(default,'P1'),
(default,'P2'),
(default,'P3');
