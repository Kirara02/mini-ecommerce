package com.kirara.mini_ecommerce.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class pengguna implements Serializable {
    
    @Id
    private String id;
    private String password;
    private String nama;
    private String alamat;
    private String email;
    private String telepon;
    private String roles;
    private Boolean isActive;
}
