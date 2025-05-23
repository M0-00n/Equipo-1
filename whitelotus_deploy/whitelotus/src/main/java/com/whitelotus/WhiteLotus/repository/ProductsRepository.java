package com.whitelotus.WhiteLotus.repository;

import com.whitelotus.WhiteLotus.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {
}
