package com.qa.project.persistence.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.project.persistence.domain.SellerDomain;

@Repository
public interface SellerRepo extends JpaRepository<SellerDomain, Integer> {

}