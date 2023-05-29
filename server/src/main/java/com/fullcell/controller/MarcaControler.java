package com.fullcell.controller;

import com.fullcell.model.cadastro.Marca;
import com.fullcell.model.vo.MarcaFilterVO;
import com.fullcell.repository.api.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping(path = "/marca")
public class MarcaControler {

    @Autowired
    private MarcaRepository repository;

    @PostMapping(path="/save")
    public @ResponseBody Marca save (@RequestBody Marca entity) {
        return repository.save(entity);
    }

    @PostMapping(path="/list")
    public @ResponseBody List<Marca> getAll (@RequestBody MarcaFilterVO entity) {
        return repository.list(entity);
    }
}
