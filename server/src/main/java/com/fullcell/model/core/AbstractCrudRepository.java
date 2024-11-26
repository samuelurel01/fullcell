package com.fullcell.model.core;

import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.provider.PersistenceProvider;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.JpaEntityInformationSupport;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

import static org.springframework.data.jpa.repository.query.QueryUtils.toOrders;
@Transactional(rollbackFor = {Throwable.class})
@SuppressWarnings("unchecked")
public abstract class AbstractCrudRepository<T, ID> implements BaseCrudRepository<T, ID>{

    private PersistenceProvider provider;
    private JpaEntityInformation<T, ?> entityInformation;
    private Class<?> type;

    @Autowired
    protected EntityManager entityManager;


    @PostConstruct
    public void init() {
        Type[] args = ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments();

        try {
            this.type = Class.forName(args[0].getTypeName());
            this.entityInformation = (JpaEntityInformation<T, ?>) JpaEntityInformationSupport.getEntityInformation(type, getEntityManager());
            this.provider = PersistenceProvider.fromEntityManager(getEntityManager());
        } catch (ClassNotFoundException e) {
            throw new IllegalStateException(e);
        }
    }


    public Session getSession() {
        return this.entityManager.unwrap(Session.class);
    }


    protected <S extends T> TypedQuery<S> getQuery(Specification<S> spec, Class<S> domainClass, Sort sort) {

        CriteriaBuilder builder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<S> query = builder.createQuery(domainClass);

        Root<S> root = applySpecificationToCriteria(spec, domainClass, query);
        query.select(root);

        if (sort != null) {
            query.orderBy(toOrders(sort, root, builder));
        }

        return getEntityManager().createQuery(query);
    }

    private <S, U extends T> Root<U> applySpecificationToCriteria(Specification<U> spec, Class<U> domainClass, CriteriaQuery<S> query) {

        Assert.notNull(domainClass, "Domain class must not be null!");
        Assert.notNull(query, "CriteriaQuery must not be null!");

        Root<U> root = query.from(domainClass);

        if (spec == null) {
            return root;
        }

        CriteriaBuilder builder = getEntityManager().getCriteriaBuilder();
        Predicate predicate = spec.toPredicate(root, query, builder);

        if (predicate != null) {
            query.where(predicate);
        }

        return root;
    }



    @Override
    public T save(T entity) {
        getEntityManager().persist(entity);
        return entity;
    }

    @Override
    public T update(T entity) {
        return getEntityManager().merge(entity);
    }

    @Override
    public void delete(T entity) {
        getEntityManager().remove(getEntityManager().contains(entity) ? entity : getEntityManager().merge(entity));
    }

    @Override
    public T getById(ID id) {
        return (T) getEntityManager().find(type, id);
    }


    @Override
    public List<T> findAll() {
        return getQuery(null, getDomainClass(), (Sort) null).getResultList();
    }


    public EntityManager getEntityManager() {
        return entityManager;
    }

    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    protected Class<T> getDomainClass() {
        return entityInformation.getJavaType();
    }
}
