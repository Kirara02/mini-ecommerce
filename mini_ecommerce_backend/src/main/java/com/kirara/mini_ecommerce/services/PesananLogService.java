package com.kirara.mini_ecommerce.services;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kirara.mini_ecommerce.entities.Pengguna;
import com.kirara.mini_ecommerce.entities.Pesanan;
import com.kirara.mini_ecommerce.entities.PesananLog;
import com.kirara.mini_ecommerce.repository.PesananLogRepository;

@Service
public class PesananLogService {

    @Autowired
    private PesananLogRepository pesananLogRepository;

    public static final int DRAFT = 0;
    public static final int PEMBAYARAN = 10;
    public static final int PACKING = 20;
    public static final int PENGIRIMAN = 30;
    public static final int SELESAI = 40;
    public static final int DIBATALKAN = 90;

    public void createLog(String username, Pesanan pesanan, int type, String message) {
        PesananLog log = new PesananLog();
        log.setId(UUID.randomUUID().toString());
        log.setLogType(type);
        log.setLogMessage(message);
        log.setPesanan(pesanan);
        log.setPengguna(new Pengguna(username));
        log.setWaktu(new Date());
        pesananLogRepository.save(log);
    }
}
