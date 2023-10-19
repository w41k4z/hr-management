package com.example.springserve.v_conge.v_congerestant;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/V_congerestant")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class V_congerestantController {

    @Autowired
    private V_congerestantService congerestantViewService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<V_congerestant> getAll() {
        return congerestantViewService.getAll();
    }
}
