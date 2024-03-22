package com.qa.project.persistence.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class SellerDomain {
    @Id
    @GeneratedValue
    private Integer id;
    private String firstName;
    private String surname;
    @Column(unique = true)
    private String email;
    @Column(unique = true)
    private String telephone;

    public SellerDomain(String firstName, String surname, String email, String telephone) {
        this.firstName = firstName;
        this.surname = surname;
        this.email = email;
        this.telephone = telephone;
    }
    
    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return this.telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSurname() {
        return this.surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

}