package com.whitelotus.WhiteLotus.controller;

import com.whitelotus.WhiteLotus.exception.OrderNotFoundException;
import com.whitelotus.WhiteLotus.model.Order;
import com.whitelotus.WhiteLotus.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> orderList(){
        return orderService.getAllOrders();
    }

    @GetMapping("{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id){
        try {
            return ResponseEntity.ok(orderService.findOrderById(id));
        }catch (OrderNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order newOrder){
        return ResponseEntity.status(HttpStatus.CREATED).body(orderService.createOrder(newOrder));
    }

    @DeleteMapping("/delete-order/{id}")
    public ResponseEntity<Order> deleteOrder(@PathVariable Long id){
        try {
            orderService.deleteOrder(id);
            return ResponseEntity.noContent().build();
        }catch (OrderNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update-order/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order order){
        try {
            return ResponseEntity.ok(orderService.updateOrder(order, id));
        }catch (OrderNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }

}
