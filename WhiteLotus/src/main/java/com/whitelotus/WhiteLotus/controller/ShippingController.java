package com.whitelotus.WhiteLotus.controller;

import com.whitelotus.WhiteLotus.exception.ShippingNotFoundException;
import com.whitelotus.WhiteLotus.model.Shipping;
import com.whitelotus.WhiteLotus.service.ShippingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shippings")
public class ShippingController {
    private final ShippingService shippingService;

    @Autowired
    public ShippingController(ShippingService shippingService) {
        this.shippingService = shippingService;
    }

    @GetMapping
    public List<Shipping> getShippingList(){
     return shippingService.shippingList();
    }

    @PostMapping
    public ResponseEntity<Shipping> createShipping (@RequestBody Shipping newShipping) {
        return ResponseEntity.status(HttpStatus.CREATED).body(shippingService.createShipping(newShipping));
    }

    @GetMapping("{id}")
    public ResponseEntity<Shipping> getShippingById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(shippingService.findShippingById(id));
        }catch (ShippingNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/delete-shipping/{id}")
    public ResponseEntity<Shipping> deleteShipping(@PathVariable Long id) {
        try {
            shippingService.deleteShipping(id);
            return ResponseEntity.noContent().build();
        } catch (ShippingNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update-shipping/{id}")
    public ResponseEntity<Shipping> updateShipping(@PathVariable Long id, @RequestBody Shipping shipping) {
        try {
            return ResponseEntity.ok(shippingService.updateShipping(shipping, id));
        } catch (ShippingNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
