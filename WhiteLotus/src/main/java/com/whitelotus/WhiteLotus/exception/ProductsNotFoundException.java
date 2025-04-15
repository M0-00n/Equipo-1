package com.whitelotus.WhiteLotus.exception;

public class ProductsNotFoundException extends RuntimeException {
    public ProductsNotFoundException(Long id) {
        super("Producto con id " + id + " no encontrado");
    }
}
