package com.whitelotus.WhiteLotus.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {

        super("Usuario con id "+ id + " no encontrado");
    }
}
