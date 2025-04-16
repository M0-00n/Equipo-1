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

    @Column(name = "product_type", length = 40, nullable = false)//flor, follaje, papel, liston, tarjeta
    private String productType;

    @Column(name = "product_name", length = 40, nullable = false)
    private String productName;

    @Column(name = "product_description", length = 200, nullable = false)
    private String productDescription;

    @Column(name = "image_url", length = 255)
    private String imageUrl;

    @Column(name = "product_price", nullable = false, columnDefinition = "DECIMAL(7,2)")
    private Double product_price;

    @Column(length = 5, nullable = false)
    private Long quantity;

    @ManyToOne
    @JoinColumn(name = "product_id_order") //PERMITE GENERAR COLUMNA ESPECIFICA PARA ACTUAR COMO LLAVE FORANEA
    private Order order;

    public Products() {
    }

    public Products(Long id, String productType, String productName, String productDescription, String imageUrl, Double product_price, Long quantity, Order order) {
        this.id = id;
        this.productType = productType;
        this.productName = productName;
        this.productDescription = productDescription;
        this.imageUrl = imageUrl;
        this.product_price = product_price;
        this.quantity = quantity;
        this.order = order;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Double getProduct_price() {
        return product_price;
    }

    public void setProduct_price(Double product_price) {
        this.product_price = product_price;
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
                ", productType='" + productType + '\'' +
                ", productName='" + productName + '\'' +
                ", productDescription='" + productDescription + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", product_price=" + product_price +
                ", quantity=" + quantity +
                ", order=" + order +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Products products)) return false;
        return Objects.equals(id, products.id) && Objects.equals(productType, products.productType) && Objects.equals(productName, products.productName) && Objects.equals(productDescription, products.productDescription) && Objects.equals(imageUrl, products.imageUrl) && Objects.equals(product_price, products.product_price) && Objects.equals(quantity, products.quantity) && Objects.equals(order, products.order);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, productType, productName, productDescription, imageUrl, product_price, quantity, order);
    }
}