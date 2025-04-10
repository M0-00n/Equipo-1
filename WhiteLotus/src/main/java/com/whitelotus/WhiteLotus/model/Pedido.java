package com.whitelotus.WhiteLotus.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "pedidos")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedido")
    private Long idOrder;

    @Column(name = "date_order", nullable = false, columnDefinition ="DATETIME" ) //columnDefinition Define el tipo de dato que tendrá la columna, DATETIME tipo de dato de SQL
    private LocalDateTime dateOrder;

    @Column(name = "total_order", nullable = false, columnDefinition ="DECIMAL(7,2)" )
    private Double totalOrder;

    @ManyToOne
    @JoinColumn(name = "pedido_id_usuario") //PERMITE GENERAR COLUMNA ESPECIFICA PARA ACTUAR COMO LLAVE FORANEA
    private User usuario;

    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL)
    private List<Articulos> listaArticulos;

    @OneToOne(mappedBy = "pedido", cascade = CascadeType.ALL)
    private Envio envio;

    public Pedido() {
    }

    public Pedido(Long idOrder, LocalDateTime dateOrder, Double totalOrder, User usuario, List<Articulos> listaArticulos, Envio envio) {
        this.idOrder = idOrder;
        this.dateOrder = dateOrder;
        this.totalOrder = totalOrder;
        this.usuario = usuario;
        this.listaArticulos = listaArticulos;
        this.envio = envio;
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

    public User getUsuario() {
        return usuario;
    }

    public void setUsuario(User usuario) {
        this.usuario = usuario;
    }

    public List<Articulos> getListaArticulos() {
        return listaArticulos;
    }

    public void setListaArticulos(List<Articulos> listaArticulos) {
        this.listaArticulos = listaArticulos;
    }

    public Envio getEnvio() {
        return envio;
    }

    public void setEnvio(Envio envio) {
        this.envio = envio;
    }

    @Override
    public String toString() {
        return "Pedido{" +
                "idOrder=" + idOrder +
                ", dateOrder=" + dateOrder +
                ", totalOrder=" + totalOrder +
                ", usuario=" + usuario +
                ", listaArticulos=" + listaArticulos +
                ", envio=" + envio +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Pedido pedido)) return false;
        return Objects.equals(idOrder, pedido.idOrder) && Objects.equals(dateOrder, pedido.dateOrder) && Objects.equals(totalOrder, pedido.totalOrder) && Objects.equals(usuario, pedido.usuario) && Objects.equals(listaArticulos, pedido.listaArticulos) && Objects.equals(envio, pedido.envio);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idOrder, dateOrder, totalOrder, usuario, listaArticulos, envio);
    }
}
