package com.fullcell.controller;

import com.fullcell.model.Produto;
import com.fullcell.repository.api.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path = "/produto")
public class ProdutoController {


    @Autowired
    private ProdutoRepository repository;

    @PostMapping(path="/save")
    public @ResponseBody Produto save (@RequestBody Produto entity) {
        return repository.save(entity);
    }

    @GetMapping(path="/all")
    public @ResponseBody List<Produto> getAll () {
        return repository.findAll();
    }

}
