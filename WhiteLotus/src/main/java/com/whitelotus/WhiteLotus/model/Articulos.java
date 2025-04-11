package com.whitelotus.WhiteLotus.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "articulos")
public class Articulos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_articulo")
    private Long id;
    @Column(name = "nombre_articulo", length = 40, nullable = false, unique = true)
    private String nombreArticulo;
    @Column(length = 5, nullable = false)
    private Long cantidad;

    @ManyToOne
    @JoinColumn(name = "articulo_id_pedido") //PERMITE GENERAR COLUMNA ESPECIFICA PARA ACTUAR COMO LLAVE FORANEA
    private Pedido pedido;

    public Articulos() {
    }

    public Articulos(Long id, String nombreArticulo, Long cantidad, Pedido pedido) {
        this.id = id;
        this.nombreArticulo = nombreArticulo;
        this.cantidad = cantidad;
        this.pedido = pedido;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreArticulo() {
        return nombreArticulo;
    }

    public void setNombreArticulo(String nombreArticulo) {
        this.nombreArticulo = nombreArticulo;
    }

    public Long getCantidad() {
        return cantidad;
    }

    public void setCantidad(Long cantidad) {
        this.cantidad = cantidad;
    }

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

    @Override
    public String toString() {
        return "Articulos{" +
                "id=" + id +
                ", nombreArticulo='" + nombreArticulo + '\'' +
                ", cantidad=" + cantidad +
                ", pedido=" + pedido +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Articulos articulos)) return false;
        return Objects.equals(id, articulos.id) && Objects.equals(nombreArticulo, articulos.nombreArticulo) && Objects.equals(cantidad, articulos.cantidad) && Objects.equals(pedido, articulos.pedido);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombreArticulo, cantidad, pedido);
    }
}
