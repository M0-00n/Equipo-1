package com.whitelotus.WhiteLotus.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "usuarios")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long id;


    private String email;
    private String name;
    private String lastname;
    private String password;
    private Long phoneNumber;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private List<Pedido> orders;



}
