package com.whitelotus.WhiteLotus.service;

import com.whitelotus.WhiteLotus.exception.ProductsNotFoundException;
import com.whitelotus.WhiteLotus.model.Products;
import com.whitelotus.WhiteLotus.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsService {
    private final ProductsRepository productsRepository;

    @Autowired
    public ProductsService(ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    public List<Products> productsList(){
        return productsRepository.findAll();
    }

    public Products createProducts(Products newProducts){
        return productsRepository.save(newProducts);
    }

    public Products findProductsById(Long id){
        return productsRepository.findById(id).orElseThrow(()-> new ProductsNotFoundException(id));
    }

    public void deleteProducts(Long id){
        if (productsRepository.existsById(id)){
            productsRepository.deleteById(id);
        }else {
            throw new ProductsNotFoundException(id);
        }
    }

    public Products updateProducts(Products products, Long id) {
        return productsRepository.findById(id).map(shippingMapping -> {
            shippingMapping.setProductType(products.getProductType());
            shippingMapping.setProductName(products.getProductName());
            shippingMapping.setProductDescription(products.getProductDescription());
            shippingMapping.setImageUrl(products.getImageUrl());
            shippingMapping.setProduct_price(products.getProduct_price());
            shippingMapping.setQuantity(products.getQuantity());
            return productsRepository.save(shippingMapping);
        }).orElseThrow(()-> new ProductsNotFoundException(id));
    }
}
