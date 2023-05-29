package com.fullcell.repository.api;

import com.fullcell.model.Produto;
import com.fullcell.model.cadastro.Marca;
import com.fullcell.model.core.BaseCrudRepository;
import com.fullcell.model.vo.MarcaFilterVO;

import java.util.List;

public interface MarcaRepository extends BaseCrudRepository<Marca, Integer> {
    List<Marca> list(MarcaFilterVO filterVO);
}
