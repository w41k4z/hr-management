INSERT INTO service VALUES
(1, 'security'),
(2, 'finance'),
(3, 'information system'),
(5, 'marketing'),
(6, 'production'),
(7, 'sales'),
(8, 'customer service'),
(9, 'administration'),
(10, 'maintenance'),
(11, 'research'),
(12, 'planning'),
(13, 'quality assurance'),
(14, 'driving');

INSERT INTO region VALUES
(1, 'Diana'),
(2,	'Sava'),
(3,	'Itasy'),	
(4,	'Analamanga'),	
(5,	'Vakinankaratra'),	
(6,	'Bongolava'),
(7,	'Sofia'),
(8,	'Boeny'),	 	
(9, 'Betsiboka'),
(10, 'Melaky'),
(11, 'Alaotra-Mangoro'),	
(12, 'Atsinanana'),
(13, 'Analanjirofo'),
(14, 'Ambatosoa'),
(15, 'Amoron i Mania'),	
(16, 'Vatovavy'),
(17, 'Fitovinany'),	
(18, 'Haute Matsiatra'),	
(19, 'Atsimo-Atsinanana'),	
(20, 'Ihorombe'),
(21, 'Menabe'),
(22, 'Atsimo-Andrefana');



-- FOR ANNONCE ONLY
INSERT INTO poste VALUES
(1,''),
(2,''),
(3,''),
(4,''),
(5,''),
(6,''),
(7,''),
(8,''),
(9,'');

UPDATE poste
SET nom = 
    CASE 
        WHEN id = 1 THEN 'Directeur des opérations'
        WHEN id = 2 THEN 'Responsable des ventes'
        WHEN id = 3 THEN 'Analyste financier'
        WHEN id = 4 THEN 'Ingénieur logiciel'
        WHEN id = 5 THEN 'Spécialiste en marketing'
        WHEN id = 6 THEN 'Assistant administratif'
        WHEN id = 7 THEN 'Technicien de support'
        WHEN id = 8 THEN 'Chef de projet'
        WHEN id = 9 THEN 'Ressources humaines'
        ELSE 'Poste non défini'
    END;

INSERT INTO besoinservice (id, datebesoinservice, idservice, idregion, idposte, qualite, description, typecontrat, volumetache, volumehoraire)
VALUES (1, '2023-10-02', 1, 2, 3, 'High', 'Ingénieur logiciel chez XYZ Corp. - Full-time position', 'Full-time', 40.0, 160.0);

INSERT INTO besoinservice (id, datebesoinservice, idservice, idregion, idposte, qualite, description, typecontrat, volumetache, volumehoraire)
VALUES (2, '2023-10-03', 2, 1, 4, 'Medium', 'Développeur Full Stack chez ABC Company - Part-time position', 'Part-time', 20.0, 80.0);

INSERT INTO besoinservice (id, datebesoinservice, idservice, idregion, idposte, qualite, description, typecontrat, volumetache, volumehoraire)
VALUES (3, '2023-10-04', 3, 3, 2, 'Low', 'Chef de projet IT chez DEF Ltd. - Contractor position', 'Contractor', 30.0, 120.0);

INSERT INTO besoinservice (id, datebesoinservice, idservice, idregion, idposte, qualite, description, typecontrat, volumetache, volumehoraire)
VALUES (4, '2023-10-05', 1, 2, 5, 'High', 'Ingénieur logiciel chez XYZ Corp. - Full-time position', 'Full-time', 35.0, 140.0);

INSERT INTO besoinservice (id, datebesoinservice, idservice, idregion, idposte, qualite, description, typecontrat, volumetache, volumehoraire)
VALUES (5, '2023-10-06', 2, 3, 1, 'Medium', 'Développeur Front-end - Part-time position', 'Part-time', 25.0, 100.0);

INSERT INTO annonce VALUES (1, 1);
INSERT INTO annonce VALUES (2, 2);
INSERT INTO annonce VALUES (3, 3);
INSERT INTO annonce VALUES (4, 4);
INSERT INTO annonce VALUES (5, 5);

INSERT INTO question (id, question)
VALUES 
(1, 'Quelles sont vos compétences en développement logiciel ?'),
(2, 'Avez-vous de l''expérience dans le développement Full Stack ?'),
(3, 'Comment gérez-vous les projets techniques ?'),
(4, 'Quelle est votre expérience en tant qu''ingénieur logiciel ?'),
(5, 'Comment gérez-vous le travail à temps plein ?'),
(6, 'Quelles sont vos compétences en développement Front-end ?'),
(7, 'Avez-vous de l''expérience en gestion de projet technique ?'),
(8, 'Décrivez votre expérience en tant que développeur Full Stack.'),
(9, 'Comment gérez-vous le travail à temps partiel ?'),
(10, 'Quelles sont vos compétences en gestion de projet IT ?'),
(11, 'Quelle est votre expérience en tant que chef de projet IT ?'),
(12, 'Comment gérez-vous les contrats en tant que contractor ?'),
(13, 'Quelles sont vos compétences en tant que chef de projet IT ?'),
(14, 'Quelle est votre expérience en tant que chef de projet IT ?'),
(15, 'Comment gérez-vous les contrats en tant que contractor ?'),
(16, 'Quelles sont vos compétences en développement logiciel ?'),
(17, 'Avez-vous de l''expérience dans le développement Full Stack ?'),
(18, 'Comment gérez-vous les projets techniques ?'),
(19, 'Quelle est votre expérience en tant qu''ingénieur logiciel ?'),
(20, 'Comment gérez-vous le travail à temps plein ?'),
(21, 'Quelles sont vos compétences en développement Front-end ?'),
(22, 'Avez-vous de l''expérience en gestion de projet technique ?'),
(23, 'Décrivez votre expérience en tant que développeur Full Stack.'),
(24, 'Comment gérez-vous le travail à temps partiel ?'),
(25, 'Quelles sont vos compétences en gestion de projet IT ?');

-- Test Data 1
INSERT INTO questionannonce (idannonce, idquestion)
VALUES (1, 1), (1, 2), (1, 3), (1, 4), (1, 5);

-- Test Data 2
INSERT INTO questionannonce (idannonce, idquestion)
VALUES (2, 6), (2, 7), (2, 8), (2, 9), (2, 10);

-- Test Data 3
INSERT INTO questionannonce (idannonce, idquestion)
VALUES (3, 11), (3, 12), (3, 13), (3, 14), (3, 15);

-- Test Data 4
INSERT INTO questionannonce (idannonce, idquestion)
VALUES (4, 16), (4, 17), (4, 18), (4, 19), (4, 20);

-- Test Data 5
INSERT INTO questionannonce (idannonce, idquestion)
VALUES (5, 21), (5, 22), (5, 23), (5, 24), (5, 25);
INSERT INTO grade VALUES
(1,'BACC'),
(2,'DTS'),
(3,'LICENSE'),
(4,'MASTER'),
(5,'DOCTORAT');


INSERT INTO filiere VALUES
(1,''),
(2,'Info'),
(3,'Compta'),
(4,'Managment');


INSERT INTO poste VALUES
(1,'P1'),
(2,'P2'),
(3,'P3');
