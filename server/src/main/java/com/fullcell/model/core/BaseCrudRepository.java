package com.fullcell.model.core;


import java.util.List;

public interface BaseCrudRepository<T, ID> {

    <T> T save(T entity);

    <T2> T2 update(T2 entity);

    void delete (T entity);

    <T2> T2 getById(ID id);

    List<T> findAll();
}
