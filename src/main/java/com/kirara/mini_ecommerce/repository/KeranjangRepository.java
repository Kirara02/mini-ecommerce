package com.kirara.mini_ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kirara.mini_ecommerce.entities.Keranjang;

public interface KeranjangRepository extends JpaRepository<Keranjang, String> {

}
