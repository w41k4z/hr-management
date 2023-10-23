CREATE VIEW v_payroll AS
SELECT
    personnel.id,
    personnel.nom || ' ' || personnel.prenom AS full_name,
    personnel.dtembauche,
    fonction.nom AS fonction,
    service.nom AS service,
    poste.nom AS poste,
    poste.starting_salary
FROM personnel
JOIN fonction ON personnel.idfonction = fonction.id
JOIN service ON personnel.idservice = service.id
JOIN poste ON personnel.idposte = poste.id
;
