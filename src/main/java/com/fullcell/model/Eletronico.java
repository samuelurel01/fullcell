package com.fullcell.model;

import com.fullcell.model.cadastro.Marca;

public abstract class Eletronico {

    protected Marca marca;

    protected String modelo;

    private String cor;

    private Integer idImagem;

    public Marca getMarca() {
        return marca;
    }

    public void setMarca(Marca marca) {
        this.marca = marca;
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

    public Integer getIdImagem() {
        return idImagem;
    }

    public void setIdImagem(Integer idImagem) {
        this.idImagem = idImagem;
    }

    @Override
    public String toString() {
        return "Eletronico{" +
                ", marca=" + marca +
                ", modelo='" + modelo + '\'' +
                ", cor='" + cor + '\'' +
                ", idImagem=" + idImagem +
                '}';
    }
}
