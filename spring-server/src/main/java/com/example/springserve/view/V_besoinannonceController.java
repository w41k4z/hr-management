package com.example.springserve.view;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/V_besoinannonce")
@CrossOrigin(origins = "http://localhost:3000")
public class V_besoinannonceController {
    
    @Autowired
    private V_besoinannonceService besoinAnnonceViewService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<V_besoinannonce> getAllRegion() {
        return besoinAnnonceViewService.getAllRegions();
    }
}
