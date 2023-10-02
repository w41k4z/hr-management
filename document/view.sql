CREATE VIEW v_besoinannonce AS
	SELECT A.id as idannonce , BS.* FROM annonce A
	JOIN besoinservice AS BS ON BS.id = A.idbesoinservice;


