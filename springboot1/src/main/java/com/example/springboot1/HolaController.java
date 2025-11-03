package com.example.springboot1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaController {
    @GetMapping("/hola")
    public String hola(){
        return "<strong>Hola Evelin Itzel Mojica Quintana 20 años</strong>";
    }
}
