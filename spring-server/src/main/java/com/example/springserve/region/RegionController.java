package com.example.springserve.region;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Region")
@CrossOrigin(origins = "http://localhost:3000")
public class RegionController {
    @Autowired
    private RegionService regionService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Region> getAllRegion() {
        return regionService.getAllRegions();
    }

    @PostMapping("/save")
    public Region saveRegion(@RequestBody Region region) {
        return regionService.saveRegion(region);
    }

    @GetMapping("/getById/{id}")
    public Region getRegionById(@PathVariable Long id) {
        return OptionalGet.get(regionService.getRegionById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteRegion(@PathVariable Long id) {
        regionService.deleteRegion(id);
    }
}
