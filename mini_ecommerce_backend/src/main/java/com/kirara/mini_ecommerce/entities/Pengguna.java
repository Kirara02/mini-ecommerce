package com.kirara.mini_ecommerce.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Pengguna implements Serializable {

    @Id
    private String id;
    private String nama;
    @JsonIgnore
    private String password;
    @JsonIgnore
    private String alamat;
    @JsonIgnore
    private String email;
    @JsonIgnore
    private String telepon;
    @JsonIgnore
    private String roles;
    @JsonIgnore
    private Boolean isActive;

    public Pengguna(String username) {
        this.id = username;
    }
}
