package com.kirara.mini_ecommerce.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kirara.mini_ecommerce.entities.Keranjang;

public interface KeranjangRepository extends JpaRepository<Keranjang, String> {

    Optional<Keranjang> findByPenggunaIdAndProdukId(String username, String productId);

    List<Keranjang> findByPenggunaId(String username);

}
