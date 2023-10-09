package com.example.springserve.cv;

public class NotedCv {
    // CV
    public Long id;
    public String cin;
    public String nom;
    public String prenom;
    public String adresse;
    public String tel;
    public String email;
    public String sm;
    public String sexe;

    // ReponseTest
    public Long idannonce;
    public Double point;

    public NotedCv(Long id, String cin, String nom, String prenom, String adresse, String tel, String email,
                   String sm, String sexe, Long idannonce, Double point) {
        this.id = id;
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.tel = tel;
        this.email = email;
        this.sm = sm;
        this.sexe = sexe;
        this.idannonce = idannonce;
        this.point = point;
    }
}
