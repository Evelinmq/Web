package com.example.List2.dto;

import jakarta.validation.constraints.*;

public class CreateUserDTO {
    @NotBlank(message = "El nombre es obligatorio")
    @Size(min = 2, max = 50, message = "El nombre debe terner entre 2 y 50 caracteres")
    private String name;

    @NotNull(message = "La edad es obligatoria")
    @Min(1)
    @Max(120)
    private int edad;

    @NotBlank(message = "El género es obligatorio")
    private String genero;

    public CreateUserDTO() {
    }

    public CreateUserDTO(String name, int edad, String genero) {
        this.name = name;
        this.edad = edad;
        this.genero = genero;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }
}
