package com.example.springserve.v_conge.v_terminerconge;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/V_terminerconge")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class V_terminercongeController {

    @Autowired
    private V_terminercongeService terminercongeViewService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<V_terminerconge> getAll() {
        return terminercongeViewService.getAll();
    }

    @GetMapping("/getAllByEtat")
    @ResponseBody
    public List<V_terminerconge> getAllByEtat(@RequestParam Long etat) {
        return terminercongeViewService.getAllByEtat(etat);
    }
}
