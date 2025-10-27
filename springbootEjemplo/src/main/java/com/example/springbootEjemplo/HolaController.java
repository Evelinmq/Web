package com.example.springbootEjemplo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaController {
    @GetMapping("/hola")
    public String hola(){
        return "<strong>Hola desde spring boot</strong>";
    }
}
