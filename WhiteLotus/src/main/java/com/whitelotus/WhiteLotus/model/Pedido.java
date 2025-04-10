package com.whitelotus.WhiteLotus.model;

import jakarta.persistence.*;

@Entity
@Table(name = "pedidos")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedido")
    private Long idOrder;

    @ManyToOne
    @JoinColumn(name = "pedido_id_usuario") //pERMITE GENERAR COLUMNA ESPECIFICA PARA ACTUAR COMO LLAVE FORANEA
    private User usuario;
}
