package com.kirara.mini_ecommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kirara.mini_ecommerce.entities.Pengguna;
import com.kirara.mini_ecommerce.services.PenggunaService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

// http:localhost:8080/api/penggunas

@RestController
@RequestMapping("/api")
@PreAuthorize("isAuthenticated()")

public class PenggunaController {

    @Autowired
    private PenggunaService penggunaService;

    @GetMapping(value = "/penggunas")
    public List<Pengguna> findAll() {
        return penggunaService.findAll();
    }

    @GetMapping(value = "/penggunas/{id}")
    public Pengguna findById(@PathVariable("id") String id) {
        return penggunaService.findById(id);
    }

    @PostMapping(value = "/penggunas")
    public Pengguna create(@RequestBody Pengguna pengguna) {
        return penggunaService.create(pengguna);
    }

    @PutMapping(value = "/penggunas")
    public Pengguna edit(@RequestBody Pengguna pengguna) {
        return penggunaService.edit(pengguna);
    }

    @DeleteMapping(value = "/penggunas/{id}")
    public void deleteById(@PathVariable("id") String id) {
        penggunaService.deleteById(id);
    }
}
