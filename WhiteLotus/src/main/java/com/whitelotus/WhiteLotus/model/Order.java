package com.whitelotus.WhiteLotus.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order")
    private Long idOrder;

    @Column(name = "date_order", nullable = false, columnDefinition ="DATETIME" ) //columnDefinition Define el tipo de dato que tendrá la columna, DATETIME tipo de dato de SQL
    private LocalDateTime dateOrder;

    @Column(name = "total_order", nullable = false, columnDefinition ="DECIMAL(7,2)" )
    private Double totalOrder;

    @ManyToOne
    @JoinColumn(name = "order_id_user") //PERMITE GENERAR COLUMNA ESPECIFICA PARA ACTUAR COMO LLAVE FORANEA
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<Products> productsList;

    @OneToOne(mappedBy = "order", cascade = CascadeType.ALL)
    private Shipping shipping;

    public Order() {
    }

    public Order(Long idOrder, LocalDateTime dateOrder, Double totalOrder, User user, List<Products> productsList, Shipping shipping) {
        this.idOrder = idOrder;
        this.dateOrder = dateOrder;
        this.totalOrder = totalOrder;
        this.user = user;
        this.productsList = productsList;
        this.shipping = shipping;
    }

    public Long getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(Long idOrder) {
        this.idOrder = idOrder;
    }

    public LocalDateTime getDateOrder() {
        return dateOrder;
    }

    public void setDateOrder(LocalDateTime dateOrder) {
        this.dateOrder = dateOrder;
    }

    public Double getTotalOrder() {
        return totalOrder;
    }

    public void setTotalOrder(Double totalOrder) {
        this.totalOrder = totalOrder;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Products> getProductsList() {
        return productsList;
    }

    public void setProductsList(List<Products> productsList) {
        this.productsList = productsList;
    }

    public Shipping getShipping() {
        return shipping;
    }

    public void setShipping(Shipping shipping) {
        this.shipping = shipping;
    }

    @Override
    public String toString() {
        return "Order{" +
                "idOrder=" + idOrder +
                ", dateOrder=" + dateOrder +
                ", totalOrder=" + totalOrder +
                ", user=" + user +
                ", productsList =" + productsList +
                ", shipping=" + shipping +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Order order)) return false;
        return Objects.equals(idOrder, order.idOrder) && Objects.equals(dateOrder, order.dateOrder) && Objects.equals(totalOrder, order.totalOrder) && Objects.equals(user, order.user) && Objects.equals(productsList, order.productsList) && Objects.equals(shipping, order.shipping);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idOrder, dateOrder, totalOrder, user, productsList, shipping);
    }
}
