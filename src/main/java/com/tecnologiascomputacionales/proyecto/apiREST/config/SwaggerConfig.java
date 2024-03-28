package com.tecnologiascomputacionales.proyecto.apiREST.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 *
 * Configuracion Swagger para la generacion de la documentacion de la API REST
 * http://localhost:9090/docs/swagger-ui.html
 */
@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI api() {
        return new OpenAPI()
                .info(new Info()
                        .title("Estudiantes API-REST")
                        .version("1.0")
                        .description("API REST peteneciente a la entidad students")
                        .termsOfService("https://swagger.io/terms/")
                        .license(new License().name("Apache 2.0").url("http://springdoc.org")));
    }

}
