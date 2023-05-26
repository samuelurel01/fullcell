package com.fullcell.model.core;


import java.util.List;

public interface BaseCrudRepository<T, ID> {

    <T> T save(T entity);

    List<T> findAll();
}
