package com.fullcell.model;


import jakarta.persistence.*;

@Entity
@Table(name = "celular")
public class Celular extends Eletronico {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
