package com.fullcell.controller;

import com.fullcell.model.cadastro.Marca;
import com.fullcell.model.vo.MarcaFilterVO;
import com.fullcell.repository.api.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path = "/marca")
public class MarcaControler {

    @Autowired
    private MarcaRepository repository;


    @GetMapping(path="/{id}")
    public @ResponseBody Marca getById (@PathVariable(("id")) Integer id) {
        return repository.getById(id);
    }

    @PostMapping(path="/")
    public @ResponseBody Marca save (@RequestBody Marca entity) {
        return repository.save(entity);
    }

    @PutMapping(path="/")
    public @ResponseBody Marca update (@RequestBody Marca entity) {
        return repository.update(entity);
    }

    @DeleteMapping(path="/")
    public @ResponseBody void delete (@RequestBody Marca entity) throws Exception {
        repository.delete(entity);
    }

    @PostMapping(path="/list")
    public @ResponseBody List<Marca> list (@RequestBody MarcaFilterVO entity) {
        return repository.list(entity);
    }
}
