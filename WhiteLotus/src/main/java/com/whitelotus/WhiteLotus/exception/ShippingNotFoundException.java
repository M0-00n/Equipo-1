package com.whitelotus.WhiteLotus.exception;

public class ShippingNotFoundException extends RuntimeException {
    public ShippingNotFoundException(Long id) {
        super("Envío con Id " + id + " No encontrado");
    }
}
