package com.fullcell.model.core;


import java.util.List;

public interface BaseCrudRepository<T, ID> {

    T save(T entity);

    T update(T entity);

    void delete (T entity);

    T getById(ID id);

    List<T> findAll();
}
