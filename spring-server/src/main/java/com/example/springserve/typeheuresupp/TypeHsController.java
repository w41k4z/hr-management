package com.example.springserve.typeheuresupp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/TypeHS")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class TypeHsController {

    @Autowired
    private TypeHsService typeHsService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<TypeHs> getAll() {
        return typeHsService.getAll();
    }
}
