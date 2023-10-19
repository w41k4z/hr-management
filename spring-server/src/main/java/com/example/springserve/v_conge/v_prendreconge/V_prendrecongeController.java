package com.example.springserve.v_conge.v_prendreconge;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/V_prendreconge")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class V_prendrecongeController {

    @Autowired
    private V_prendrecongeService prendrecongeViewService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<V_prendreconge> getAll() {
        return prendrecongeViewService.getAll();
    }
}
