package com.fullcell.model;


import com.fullcell.model.cadastro.Marca;
import jakarta.persistence.*;

@Entity
@Table(name = "produto")
public class Produto  {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private String modelo;

    private String cor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "marca")
    private Marca marca;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public Marca getMarca() {
        return marca;
    }

    public void setMarca(Marca marca) {
        this.marca = marca;
    }
}
