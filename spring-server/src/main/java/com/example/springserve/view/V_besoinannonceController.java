package com.example.springserve.view;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/V_besoinannonce")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class V_besoinannonceController {

    @Autowired
    private V_besoinannonceService besoinAnnonceViewService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<V_besoinannonce> getAllV_besoinannonce() {
        return besoinAnnonceViewService.getAllV_besoinannonces();
    }

    @GetMapping("/getByIdAnnonce/{idAnnonce}")
    public V_besoinannonce getV_besoinannonceByIdAnnonce(@PathVariable Long idAnnonce){
        return OptionalGet.get(besoinAnnonceViewService.getBesoinAnnonceViewById(idAnnonce));
    }
}
