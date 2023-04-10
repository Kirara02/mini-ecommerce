package com.kirara.mini_ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kirara.mini_ecommerce.entities.Pengguna;

public interface PenggunaRepository extends JpaRepository<Pengguna, String> {

    Boolean existsByEmail(String email);

}
