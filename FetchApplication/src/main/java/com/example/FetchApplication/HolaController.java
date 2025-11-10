package com.example.FetchApplication;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
public class HolaController {
    @PostMapping(
            path = "/saludo",
            //Enviar informaciòn en formato JSON
            consumes = MediaType.APPLICATION_JSON_VALUE,
            //Devuelve informaciòn en formato JSON
            produces = MediaType.APPLICATION_JSON_VALUE)

    public Map<String, String> saludar (@RequestBody Map<String, String> datos) {
        String nombre = datos.get("nombre");
        String apellido = datos.get("apellido");
        String mensaje = "Hola " + nombre + " " + apellido + " bienvenido al springboot y top tops";
        return Map.of("mensaje", mensaje);
    }
}
