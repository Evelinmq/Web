package com.example.List2.controller;

import com.example.List2.dto.CreateUserDTO;
import com.example.List2.model.User;
import com.example.List2.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    //Obtener por ID
    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable ("id") Long id) {
        return service.findById(id)
                .map(u -> ResponseEntity.ok((Object) u)) //Devuelve el user
                .orElse(
                        ResponseEntity.status(HttpStatus.NOT_FOUND)
                                .body(Map.of("error", "Usuario no encontrado"))
                );
    }

    //Listar con query params
    @GetMapping
    public List<User> list(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String search
    ) {
        return service.findAll(page, size, search);
    }

    @PostMapping
    public User create(@RequestBody @Valid CreateUserDTO dto) {
        return service.save(dto);
    }


    //Crear usuario
    @PostMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable ("id") Long id, @RequestBody @Valid CreateUserDTO dto) {
        return service.update(id, dto)
                .map(u -> ResponseEntity.ok((Object) u)) //Devuelve user
                .orElse(
                        ResponseEntity.status(HttpStatus.NOT_FOUND)
                                .body(Map.of("error", "Usuario no encontrado")) //Devuelve JSON
                );
    }


}
