package com.example.List2.service;

import com.example.List2.dto.CreateUserDTO;
import com.example.List2.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final Map<Long, User> storage = new LinkedHashMap<>();
    private final AtomicLong idGen =  new AtomicLong(1);

    //Datos iniciales
    public UserService() {
        save(new CreateUserDTO("Carmen", 23, "Femenino"));
        save(new CreateUserDTO("Roberto", 50, "Masculino"));
        save(new CreateUserDTO("Maria", 30, "PrefieroNoDecirlo"));
    }

    public User save(CreateUserDTO dto) {
        Long id = idGen.getAndIncrement();
        User user = new User(id, dto.getName(), dto.getEdad(), dto.getGenero());
        storage.put(id, user);
        return user;
    }

    public Optional<User> findById(Long id) {
        return Optional.ofNullable(storage.get(id));
    }

    public List<User> findAll(int page, int size, String search) {
        List<User> all = new ArrayList<>(storage.values());
        if (search != null && !search.isBlank()) {
            String s = search.toLowerCase();
            all = all.stream()
                    .filter(u -> u.getName().toLowerCase().contains(s))
                    .collect(Collectors.toList());
        }
        int from = page * size;
        if (from > all.size()) return Collections.emptyList();
        int to = Math.min(from + size, all.size());
        return all.subList(from, to);
    }

    public Optional<User> update(Long id, CreateUserDTO dto) {
        User existing = storage.get(id);
        if (existing == null) return Optional.empty();
        existing.setName(dto.getName());
        existing.setEdad(dto.getEdad());
        existing.setGenero(dto.getGenero());
        return Optional.of(existing);
    }

}
