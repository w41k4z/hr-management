package com.example.springserve.v_personnel;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/V_personnel")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class V_personnelController {

    @Autowired
    private V_personnelService personnelViewService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<V_personnel> getAll() {
        return personnelViewService.getAll();
    }
}
