package com.whitelotus.WhiteLotus.service;

import com.whitelotus.WhiteLotus.exception.OrderNotFoundException;
import com.whitelotus.WhiteLotus.model.Order;
import com.whitelotus.WhiteLotus.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    public Order createOrder(Order newOrder){
        return orderRepository.save(newOrder);
    }

    public Order findOrderById(Long id){
        return orderRepository.findById(id).orElseThrow(()-> new OrderNotFoundException(id));
    }

    public void deleteOrder(Long id){
        if (orderRepository.existsById(id)){
            orderRepository.deleteById(id);
        }else {
            throw new OrderNotFoundException(id);
        }
    }

    public Order updateOrder(Order order, Long id){
        return orderRepository.findById(id).map(orderMapping -> {
            orderMapping.setDateOrder(order.getDateOrder());
            orderMapping.setTotalOrder(order.getTotalOrder());
            return orderRepository.save(orderMapping);
        }).orElseThrow(()-> new OrderNotFoundException(id));
    }


}
