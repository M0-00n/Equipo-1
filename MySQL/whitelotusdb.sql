CREATE DATABASE WhiteLotusDB;
USE WhiteLotusDB;

-- Tabla de usuarios
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL
);

-- Tabla de pedidos
CREATE TABLE pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Tabla de envíos
CREATE TABLE envios (
    id_envio INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT NOT NULL,
    direccion_envio TEXT NOT NULL,
    delegacion VARCHAR(100) NOT NULL,
    codigo_postal VARCHAR(10) NOT NULL,
    fecha_entrega DATE NOT NULL,    
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
);

-- Catálogo: Flores
CREATE TABLE flores (
    id_flor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(8,2) NOT NULL
);

-- Catálogo: Follajes
CREATE TABLE follajes (
    id_follaje INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(8,2) NOT NULL
);

-- Catálogo: Papeles
CREATE TABLE papeles (
    id_papel INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(100) NOT NULL,
    color VARCHAR(50),
    precio DECIMAL(8,2) NOT NULL
);

-- Catálogo: Listones
CREATE TABLE listones (
    id_liston INT AUTO_INCREMENT PRIMARY KEY,
    color VARCHAR(50),
    precio DECIMAL(8,2) NOT NULL
);

-- Tabla de tarjetas
CREATE TABLE tarjetas (
    id_tarjeta INT AUTO_INCREMENT PRIMARY KEY,
    mensaje TEXT NOT NULL
);

-- Tabla pivote: Artículos (ramo personalizado)
CREATE TABLE articulos (
    id_articulo INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT NOT NULL,
    id_flor INT NOT NULL,
    id_follaje INT NOT NULL,
    id_papel INT NOT NULL,
    id_liston INT NOT NULL,
    id_tarjeta INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_flor) REFERENCES flores(id_flor),
    FOREIGN KEY (id_follaje) REFERENCES follajes(id_follaje),
    FOREIGN KEY (id_papel) REFERENCES papeles(id_papel),
    FOREIGN KEY (id_liston) REFERENCES listones(id_liston),
    FOREIGN KEY (id_tarjeta) REFERENCES tarjetas(id_tarjeta)
);
