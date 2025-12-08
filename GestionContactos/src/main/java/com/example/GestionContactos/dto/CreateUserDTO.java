package com.example.GestionContactos.dto;

import jakarta.validation.constraints.*;

public class CreateUserDTO {
    @NotBlank(message = "El nombre es obligatorio")
    @Size(min = 2, max = 50, message = "El nombre debe terner entre 2 y 50 caracteres")
    private String name;

    @NotNull(message = "El numero de telefono es obligatorio y debe tener 10 caracteres")
    @Min(10)
    @Max(10)
    private int numero;

    public CreateUserDTO() {
    }

    public CreateUserDTO(String name, int numero) {
        this.name = name;
        this.numero = numero;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }
}
