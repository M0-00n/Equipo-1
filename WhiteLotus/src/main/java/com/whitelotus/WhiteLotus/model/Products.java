package com.whitelotus.WhiteLotus.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "products")
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private Long id;
    @Column(name = "product_name", length = 40, nullable = false, unique = true)
    private String productName;
    @Column(length = 5, nullable = false)
    private Long quantity;

    @ManyToOne
    @JoinColumn(name = "product_id_order") //PERMITE GENERAR COLUMNA ESPECIFICA PARA ACTUAR COMO LLAVE FORANEA
    private Order order;

    public Products() {
    }

    public Products(Long id, String productName, Long quantity, Order order) {
        this.id = id;
        this.productName = productName;
        this.quantity = quantity;
        this.order = order;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    @Override
    public String toString() {
        return "Products{" +
                "id=" + id +
                ", productName='" + productName + '\'' +
                ", quantity=" + quantity+
                ", order=" + order +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Products products)) return false;
        return Objects.equals(id, products.id) && Objects.equals(productName, products.productName) && Objects.equals(quantity, products.quantity) && Objects.equals(order, products.order);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, productName, quantity, order);
    }
}
