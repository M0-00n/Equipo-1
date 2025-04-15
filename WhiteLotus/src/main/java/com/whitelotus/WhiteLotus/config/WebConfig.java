package com.whitelotus.WhiteLotus.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig  implements WebMvcConfigurer {
//Para que tu frontend (que corre desde otro puerto, como 5500) pueda comunicarse con el backend, necesitas permitir el CORS (Cross-Origin Resource Sharing).
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://127.0.0.1:5501") // el puerto de tu Live Server
                .allowedMethods("*")
                .allowedHeaders("*");
    }
}
