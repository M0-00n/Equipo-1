package com.whitelotus.WhiteLotus.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "shippings")
public class Shipping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_shipping")
    private Long id;

    @Column(name = "date_shipping", nullable = false, columnDefinition ="DATETIME" ) //columnDefinition Define el tipo de dato que tendrá la columna, DATETIME tipo de dato de SQL
    private LocalDateTime dateShipping;

    @Column(length =24, nullable = false)
    private String delegacion;
    @Column(name = "calle_numero", length = 50, nullable = false)
    private String calleNumero;
    @Column(name = "codigo_postal", length = 5, nullable = false)
    private String codigoPostal;

    @OneToOne
    @JoinColumn(name = "shipping_id_order")
    private Order order;

    public Shipping() {
    }

    public Shipping(Long id, LocalDateTime dateShipping, String delegacion, String calleNumero, String codigoPostal, Order order) {
        this.id = id;
        this.dateShipping = dateShipping;
        this.delegacion = delegacion;
        this.calleNumero = calleNumero;
        this.codigoPostal = codigoPostal;
        this.order = order;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDateShipping() {
        return dateShipping;
    }

    public void setDateShipping(LocalDateTime dateShipping) {
        this.dateShipping = dateShipping;
    }

    public String getDelegacion() {
        return delegacion;
    }

    public void setDelegacion(String delegacion) {
        this.delegacion = delegacion;
    }

    public String getCalleNumero() {
        return calleNumero;
    }

    public void setCalleNumero(String calleNumero) {
        this.calleNumero = calleNumero;
    }

    public String getCodigoPostal() {
        return codigoPostal;
    }

    public void setCodigoPostal(String codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    @Override
    public String toString() {
        return "Shipping{" +
                "id=" + id +
                ", dateShipping=" + dateShipping +
                ", delegacion='" + delegacion + '\'' +
                ", calleNumero='" + calleNumero + '\'' +
                ", codigoPostal='" + codigoPostal + '\'' +
                ", order=" + order +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Shipping shipping)) return false;
        return Objects.equals(id, shipping.id) && Objects.equals(dateShipping, shipping.dateShipping) && Objects.equals(delegacion, shipping.delegacion) && Objects.equals(calleNumero, shipping.calleNumero) && Objects.equals(codigoPostal, shipping.codigoPostal) && Objects.equals(order, shipping.order);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dateShipping, delegacion, calleNumero, codigoPostal, order);
    }
}
