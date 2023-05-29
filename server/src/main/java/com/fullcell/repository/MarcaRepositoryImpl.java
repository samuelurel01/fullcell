package com.fullcell.repository;

import com.fullcell.model.cadastro.Marca;
import com.fullcell.model.core.AbstractCrudRepository;
import com.fullcell.model.vo.MarcaFilterVO;
import com.fullcell.repository.api.MarcaRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository()
@Transactional(Transactional.TxType.REQUIRED)
public class MarcaRepositoryImpl extends AbstractCrudRepository<Marca, Integer> implements MarcaRepository {

    @Override
    public List<Marca> list(MarcaFilterVO filterVO) {
        if(filterVO != null && filterVO.getNome() != null) {
            return getSession().createQuery("select o from Marca o where o.nome = :nome", Marca.class)
                    .setParameter("nome", filterVO.getNome())
                    .list();
        }

        return findAll();
    }

}
