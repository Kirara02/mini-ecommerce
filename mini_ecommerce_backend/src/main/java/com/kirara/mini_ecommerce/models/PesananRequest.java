package com.kirara.mini_ecommerce.models;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

import lombok.Data;

@Data
public class PesananRequest implements Serializable {

    private BigDecimal ongkir;
    private String alamatPengiriman;
    private List<KeranjangRequest> items;

}
