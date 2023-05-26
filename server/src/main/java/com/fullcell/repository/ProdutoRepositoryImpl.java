package com.fullcell.repository;

import com.fullcell.model.Produto;
import com.fullcell.model.core.AbstractCrudRepository;
import com.fullcell.repository.api.ProdutoRepository;
import jakarta.transaction.Transactional;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

@Repository("com.fullcell.repository.CelularRepositoryImpl")
@Transactional(Transactional.TxType.REQUIRED)
public class ProdutoRepositoryImpl extends AbstractCrudRepository<Produto, Integer> implements ProdutoRepository {


}
