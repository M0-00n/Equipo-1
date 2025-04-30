package com.whitelotus.WhiteLotus.controller;

import com.whitelotus.WhiteLotus.exception.OrderNotFoundException;
import com.whitelotus.WhiteLotus.exception.ProductsNotFoundException;
import com.whitelotus.WhiteLotus.exception.UserNotFoundException;
import com.whitelotus.WhiteLotus.model.Order;
import com.whitelotus.WhiteLotus.model.Products;
import com.whitelotus.WhiteLotus.model.User;
import com.whitelotus.WhiteLotus.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductsController {
    private final ProductsService productsService;

    @Autowired
    public ProductsController(ProductsService productsService) { this.productsService = productsService;}


    @GetMapping
    public List<Products> getProducts(){
        return productsService.productsList();
    }

    @GetMapping("{id}")
    public ResponseEntity<Products> getById(@PathVariable Long id){
        try {
            return ResponseEntity.ok(productsService.findProductsById(id));
        }catch (ProductsNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/add-product")
    public ResponseEntity<Products> createProducts(@RequestBody Products newProducts){
        return ResponseEntity.status(HttpStatus.CREATED).body(productsService.createProducts(newProducts));
    }

    @DeleteMapping("/delete-product/{id}")
    public ResponseEntity<Products> deleteProducts(@PathVariable Long id){
        try {
            productsService.deleteProducts(id);
            return ResponseEntity.noContent().build();
        }catch (ProductsNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update-product/{id}")
    public ResponseEntity<Products> updateProducts(@PathVariable Long id, @RequestBody Products products){
        try {
            return ResponseEntity.ok(productsService.updateProducts(products, id));
        }catch (ProductsNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }
}
