package com.kirara.mini_ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kirara.mini_ecommerce.entities.Produk;

public interface ProdukRepository extends JpaRepository<Produk, String> {

}
