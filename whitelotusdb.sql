-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: whitelotusdb
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id_order` bigint NOT NULL AUTO_INCREMENT,
  `date_order` datetime NOT NULL,
  `total_order` decimal(7,2) NOT NULL,
  `order_id_user` bigint DEFAULT NULL,
  PRIMARY KEY (`id_order`),
  KEY `FKovfcgjxu1x9mvi3arreayheq1` (`order_id_user`),
  CONSTRAINT `FKovfcgjxu1x9mvi3arreayheq1` FOREIGN KEY (`order_id_user`) REFERENCES `users` (`id_users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_product` bigint NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) DEFAULT NULL,
  `product_description` varchar(200) NOT NULL,
  `product_name` varchar(40) NOT NULL,
  `product_type` varchar(40) NOT NULL,
  `product_price` decimal(7,2) NOT NULL,
  `quantity` bigint NOT NULL,
  `product_id_order` bigint DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  KEY `FKms9yyvgot9gpko4hngfqlr4vj` (`product_id_order`),
  CONSTRAINT `FKms9yyvgot9gpko4hngfqlr4vj` FOREIGN KEY (`product_id_order`) REFERENCES `orders` (`id_order`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'https://st4.depositphotos.com/16122460/41859/i/450/depositphotos_418596158-stock-photo-beautiful-dahlia-flowers-blurred-background.jpg','Ideales para arreglos llamativos y elegantes. disponibles en rojo, rosa, naranja y blanco.','Dahlia','Flores',60.99,1,NULL),(2,'https://cistelleriapou.com/17055-large_default/papel-kraft-habana-marron-natural-70cm-x-100mts.jpg','Su textura rústica le da un toque sencillo y elegante.','Kraft','Papel',15.99,1,NULL),(3,'https://bouquetdepapel.mx/cdn/shop/files/enlace_a0e39924-7649-4030-b221-250ff1f552dd.jpg?v=1712781412','Es suave y ligero, con un acabado traslúcido que da un toque elegante y sofisticado. ','Coreano','Papel',25.99,1,NULL),(4,'https://m.media-amazon.com/images/I/71PlzV0rJZL._AC_UF350,350_QL80_.jpg',' Aporta un toque de elegancia y sofisticación con su diseño único','Malla de Jacquard','Papel',28.99,1,NULL),(5,'https://i5.walmartimages.com/asr/6514eb23-6e57-407c-a8a2-a8934b181503.b86ca107b5af48625f481d120ec6bafa.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF','Ideal para complementar ramos con su fragancia distintiva.','Eucalipto','Follaje',15.99,1,NULL),(6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4Pq5Q4nbgiO02F8ndNF7n2D1X99MZNFK_g&s','Perfecto para  dar un toque natural y fresco.','Pino ','Follaje',25.99,1,NULL),(7,'https://www.thecolvinco.com/es/blog/wp-content/uploads/2017/07/12A7681-copia-min.jpg','Representa la alegría y la energía, ideal para crear arreglos llamativos y luminosos.','Girasol','Flores',35.99,1,NULL),(8,'https://m.media-amazon.com/images/I/719SdJJgEoL._AC_SX679_.jpg','Perfectas para añadir un toque fresco y vibrante, disponibles en rojo, amarillo y rosa.','Gerberas','Flores',30.99,1,NULL),(9,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJsADQj3d6zdP__IGFdJH2Ihkvghj7kWh-Q&s','Perfectos para arreglos frescos y sofisticados, disponible en rosa, amarillo y blanco.','Tulipán','Flores',50.99,1,NULL),(10,'https://media.istockphoto.com/id/174812956/es/foto/docena-de-rosas.jpg?s=612x612&w=0&k=20&c=4EKyzdMSr-cHx3oOh8A9kfficc1GdVZKrQiyaQsPIwo=','Ideales para expresar amor y admiración, disponible en rojo, blanco, rosa y amarillo.','Rosas','Flores',35.99,1,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shippings`
--

DROP TABLE IF EXISTS `shippings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shippings` (
  `id_shipping` bigint NOT NULL AUTO_INCREMENT,
  `calle_numero` varchar(50) NOT NULL,
  `codigo_postal` varchar(5) NOT NULL,
  `date_shipping` datetime NOT NULL,
  `delegacion` varchar(24) NOT NULL,
  `shipping_id_order` bigint DEFAULT NULL,
  PRIMARY KEY (`id_shipping`),
  UNIQUE KEY `UKirsnhouc0yjc0nmfxqig0nrql` (`shipping_id_order`),
  CONSTRAINT `FKpcuvv5j2l9xwusge1tipbimkl` FOREIGN KEY (`shipping_id_order`) REFERENCES `orders` (`id_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shippings`
--

LOCK TABLES `shippings` WRITE;
/*!40000 ALTER TABLE `shippings` DISABLE KEYS */;
/*!40000 ALTER TABLE `shippings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_users` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `lastname` varchar(35) NOT NULL,
  `name` varchar(25) NOT NULL,
  `password` varchar(20) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  PRIMARY KEY (`id_users`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'correo@correo.com','Pineda','Montse','123456','5578964513'),(2,'mon@correo.com','Pineda','Montserrat','123456','4875961245');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-24 10:01:11
