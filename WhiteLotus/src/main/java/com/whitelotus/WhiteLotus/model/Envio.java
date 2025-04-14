package com.whitelotus.WhiteLotus.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "envios")
public class Envio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_envio")
    private Long id;

    @Column(name = "date_envio", nullable = false, columnDefinition ="DATETIME" ) //columnDefinition Define el tipo de dato que tendrá la columna, DATETIME tipo de dato de SQL
    private LocalDateTime dateEnvio;

    @Column(length =24, nullable = false)
    private String delegacion;
    @Column(name = "calle_numero", length = 50, nullable = false)
    private String calleNumero;
    @Column(name = "codigo_postal", length = 5, nullable = false)
    private String codigoPostal;

    @OneToOne
    @JoinColumn(name = "envio_id_pedido")
    private Pedido pedido;

    public Envio() {
    }

    public Envio(Long id, LocalDateTime dateEnvio, String delegacion, String calleNumero, String codigoPostal, Pedido pedido) {
        this.id = id;
        this.dateEnvio = dateEnvio;
        this.delegacion = delegacion;
        this.calleNumero = calleNumero;
        this.codigoPostal = codigoPostal;
        this.pedido = pedido;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDateEnvio() {
        return dateEnvio;
    }

    public void setDateEnvio(LocalDateTime dateEnvio) {
        this.dateEnvio = dateEnvio;
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

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

    @Override
    public String toString() {
        return "Envio{" +
                "id=" + id +
                ", dateEnvio=" + dateEnvio +
                ", delegacion='" + delegacion + '\'' +
                ", calleNumero='" + calleNumero + '\'' +
                ", codigoPostal='" + codigoPostal + '\'' +
                ", pedido=" + pedido +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Envio envio)) return false;
        return Objects.equals(id, envio.id) && Objects.equals(dateEnvio, envio.dateEnvio) && Objects.equals(delegacion, envio.delegacion) && Objects.equals(calleNumero, envio.calleNumero) && Objects.equals(codigoPostal, envio.codigoPostal) && Objects.equals(pedido, envio.pedido);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dateEnvio, delegacion, calleNumero, codigoPostal, pedido);
    }
}
