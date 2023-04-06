package com.kirara.mini_ecommerce.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Kategori implements Serializable {

    @Id
    private String id;
    private String name;

}
