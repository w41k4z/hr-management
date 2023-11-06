package com.example.springserve.typeheuresupp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TypeHsService {

    @Autowired(required = false)
    private TypeHsRepository typeHsRepository;

    public List<TypeHs> getAll() {
        return typeHsRepository.findAll();
    }

    public Optional<TypeHs> getPayrollViewById(Long id) {
        return typeHsRepository.findById(id);
    }
}
