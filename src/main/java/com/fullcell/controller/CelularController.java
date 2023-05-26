package com.fullcell.controller;

import com.fullcell.model.Celular;
import com.fullcell.repository.api.CelularRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path = "/celular")
public class CelularController {


    @Autowired
    private CelularRepository repository;

    @PostMapping(path="/save") // Map ONLY POST Requests
    public @ResponseBody String save (@RequestParam String modelo, @RequestParam String cor) {
        Celular n = new Celular();
        n.setModelo(modelo);
        n.setCor(cor);
        repository.save(n);
        return "Saved";
    }

    @GetMapping(path="/all") // Map ONLY POST R
    public @ResponseBody List<Celular> getAll () {
        return repository.findAll();
    }

}
