package com.fullcell.repository;

import com.fullcell.model.Celular;
import com.fullcell.repository.api.CelularRepository;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Repository("com.fullcell.repository.CelularRepositoryImpl")
@Transactional(Transactional.TxType.REQUIRED)
@Primary
public class CelularRepositoryImpl implements CelularRepository {

    @Autowired
    private EntityManager entityManager;


    public Session getSession() {
        return this.entityManager.unwrap(Session.class);
    }

    @Override
    public void flush() {

    }

    @Override
    public <S extends Celular> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends Celular> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<Celular> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public Celular getOne(Integer integer) {
        return null;
    }

    @Override
    public Celular getById(Integer integer) {
        return null;
    }

    @Override
    public Celular getReferenceById(Integer integer) {
        return null;
    }

    @Override
    public <S extends Celular> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Celular> List<S> findAll(Example<S> example) {
        return entityManager.createQuery("select o from Celular o ").getResultList();
    }

    @Override
    public <S extends Celular> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends Celular> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Celular> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Celular> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends Celular, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

    @Override
    public <S extends Celular> S save(S entity) {
        entityManager.persist(entity);
        return entity;
    }

    @Override
    public <S extends Celular> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<Celular> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Integer integer) {
        return false;
    }

    @Override
    public List<Celular> findAll() {
        return entityManager.createQuery("select o from Celular o ").getResultList();
    }

    @Override
    public List<Celular> findAllById(Iterable<Integer> integers) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Integer integer) {

    }

    @Override
    public void delete(Celular entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends Celular> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public List<Celular> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<Celular> findAll(Pageable pageable) {
        return null;
    }
}