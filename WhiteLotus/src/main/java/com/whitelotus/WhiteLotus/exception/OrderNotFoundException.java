package com.whitelotus.WhiteLotus.exception;

public class OrderNotFoundException extends RuntimeException {
    public OrderNotFoundException(Long id) {

        super("Pedido con id " + id + " no encontrado");
    }
}
