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
-------------------------------------------------------------------------------------------------------

-- les questions correspondant a une annonce			
SELECT Q.id , Q.question FROM questionannonce QA
	JOIN question Q ON Q.id=QA.idquestion
	WHERE idannonce = {--------- idannonce ---------------------}
	AND date_question_annonce = ( SELECT  date_question_annonce FROM questionannonce 
						WHERE idannonce = {--------- idannonce ---------------------} 
						ORDER BY date_question_annonce DESC LIMIT 1)
						
--------------------------------------------------------------------------------------------------------

-- les cv aptes aux entretients
SELECT sb.idannonce, Cv.*, sb.point FROM Cv 
	JOIN (SELECT * FROM Reponsetest WHERE idannonce = 1) sb ON sb.idcv = Cv.id
	
---------------------------------------------------------------------------------------------------------
						
