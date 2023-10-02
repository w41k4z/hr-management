-- v_lastBesoinService
SELECT id FROM besoinservice 
		WHERE idposte=1 
		ORDER BY datebesoinservice DESC 
		LIMIT 1;

-- annonce_correspondant		
SELECT id FROM annonce 
	WHERE id=(SELECT id FROM besoinservice 
			WHERE idposte=1 
			ORDER BY datebesoinservice DESC 
			LIMIT 1);

-- les questions correspondant a la derniere annonces du poste			
SELECT Q.id AS idquestion, Q.question FROM questionannonce QA
	JOIN question Q ON Q.id=QA.idquestion
	WHERE idannonce = (SELECT id FROM annonce 
				WHERE id=(SELECT id FROM besoinservice 
						WHERE idposte={--------- idposte ---------------------}
						ORDER BY datebesoinservice DESC 
						LIMIT 1));
