package com.example.springserve.myuser;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "myuser")
public class MyUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    public MyUser(String _username , String _email) {
        this.username = _username;
        this.email = _email;
    }

    public MyUser() {}

    public String getUserName() {
        return this.username;
    }
    public String getEmail() {
        return this.email;
    }

}
