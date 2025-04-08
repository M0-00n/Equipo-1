USE WhiteLotusdb;

SELECT * FROM usuarios;
SELECT * FROM pedidos;
SELECT * FROM envios;
SELECT * FROM flores;
SELECT * FROM follajes;
SELECT * FROM papeles;
SELECT * FROM listones;
SELECT * FROM tarjetas;
-- USUARIOS ------------------------------------------------------------------
INSERT INTO usuarios(nombre,correo,contraseña)
VALUES ("Ana karen","anakaren.godinezp@gmail.com","12345");

INSERT INTO usuarios(nombre,correo,contraseña)
VALUES ("Ana Pao","anapao.es@gmail.com","19536");

INSERT INTO usuarios(nombre,correo,contraseña)
VALUES ("Dani","dani.contreras@gmail.com","94368");

INSERT INTO usuarios(nombre,correo,contraseña)
VALUES ("Montse","montse.pini@gmail.com","51346");

INSERT INTO usuarios(nombre,correo,contraseña)
VALUES ("Fanys","fanys.leon@gmail.com","12345");

-- PEDIDOS ----------------------------------------------------------------------
INSERT INTO pedidos(id_usuario,fecha_pedido)
VALUES (1,'2025-04-07 10:30:00');

INSERT INTO pedidos(id_usuario,fecha_pedido)
VALUES (2,'2025-04-10 12:30:00');

INSERT INTO pedidos(id_usuario,fecha_pedido)
VALUES (3,'2025-04-01 15:45:00');

INSERT INTO pedidos(id_usuario,fecha_pedido)
VALUES (4,'2025-03-30 09:30:00');

INSERT INTO pedidos(id_usuario,fecha_pedido)
VALUES (5,'2025-03-14 11:50:00');

-- ENVIOS -------------------------------------------------------------------------------
INSERT INTO envios(id_pedido,direccion_envio,delegacion,codigo_postal,fecha_entrega)
VALUES (1,"Calle Londres 144, Colonia Juárez","Cuauhtémoc","06600",'2025-04-08');

INSERT INTO envios(id_pedido,direccion_envio,delegacion,codigo_postal,fecha_entrega)
VALUES (2,"Av. Universidad 1000, Colonia del Valle Centro","Benito Juárez","03100",'2025-04-10');

INSERT INTO envios(id_pedido,direccion_envio,delegacion,codigo_postal,fecha_entrega)
VALUES (3,"Calle Norte 45 #320, Colonia Industrial Vallejo","Gustavo A. Madero","07700",'2025-04-02');

INSERT INTO envios(id_pedido,direccion_envio,delegacion,codigo_postal,fecha_entrega)
VALUES (4,"Av. Río Churubusco 580, Colonia Xoco","Coyoacán","03330",'2025-03-30');

INSERT INTO envios(id_pedido,direccion_envio,delegacion,codigo_postal,fecha_entrega)
VALUES (5,"Calle de La Canoa 202, Colonia Tizapán","Álvaro Obregón","01090",'2025-03-20');

-- FLORES ---------------------------------------------------------------------------------
INSERT INTO flores(nombre,descripcion,precio)
VALUES ("Tulipán","Perfectos para arreglos frescos y sofisticados.",10.90);

INSERT INTO flores(nombre,descripcion,precio)
VALUES ("Peonias","Perfectos para arreglos elegantes y románticos.",80.00);

INSERT INTO flores(nombre,descripcion,precio)
VALUES ("Gerberas","Perfectos para añadir un toque fresco y vibrante.",25.30);

INSERT INTO flores(nombre,descripcion,precio)
VALUES ("Rosas","Ideales para expresar amor y admiración.",15.25);

INSERT INTO flores(nombre,descripcion,precio)
VALUES ("Girasol","Representa la alegría y energía, ideal para crear arreglos llamativos y luminosos.",26.20);

-- FOLLAJES --------------------------------------------------------------------------------
INSERT INTO follajes(nombre,descripcion,precio)
VALUES ("Eucalipto","Ideal para complementar ramos con su fragancia distintiva.",10.45);

INSERT INTO follajes(nombre,descripcion,precio)
VALUES ("Pino","Perfecto para dar un toque natural y fresco.",20.25);

INSERT INTO follajes(nombre,descripcion,precio)
VALUES ("Ruscus","Ideal para dar estructura y elegancia.",15.75);

-- PAPELES ------------------------------------------------------------------------------------
INSERT INTO papeles(tipo,color,precio)
VALUES("Kraft","café","10.00");

INSERT INTO papeles(tipo,color,precio)
VALUES("Coreano","rosa","15.00");

INSERT INTO papeles(tipo,color,precio)
VALUES("Malla de jacquard","dorado","20.25");

-- LISTONES ---------------------------------------------------------------------------------
INSERT INTO listones(color,precio)
VALUES("rojo","10.00");

INSERT INTO listones(color,precio)
VALUES("rosa","10.00");

INSERT INTO listones(color,precio)
VALUES("amarillo","10.00");

INSERT INTO listones(color,precio)
VALUES("azul","10.00");

INSERT INTO listones(color,precio)
VALUES("blanco","10.00");

-- TARJETAS ---------------------------------------------------------------------------------
INSERT INTO tarjetas(mensaje)
VALUES ("Cada flor en este ramo lleva un pedacito de mi amor por ti. Gracias por hacer mi vida más bonita.");

INSERT INTO tarjetas(mensaje)
VALUES ("Gracias por estar siempre ahí, por tu apoyo y tu cariño. Este ramo es solo una pequeña muestra de mi gratitud.");

INSERT INTO tarjetas(mensaje)
VALUES ("Porque tu amistad es tan especial como estas flores. ¡Nunca cambies!");

INSERT INTO tarjetas(mensaje)
VALUES ("¡Felicidades! Que este ramo llene tu día de color, alegría y nuevas bendiciones.");

INSERT INTO tarjetas(mensaje)
VALUES ("Que estas flores te recuerden lo fuerte, valiente y especial que eres. ¡Sigue brillando!");