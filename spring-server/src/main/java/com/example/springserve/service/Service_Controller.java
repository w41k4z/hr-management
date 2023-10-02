package com.example.springserve.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Service")
@CrossOrigin("http://localhost:3000")
public class Service_Controller {
    @Autowired
    private Service_Service serviceService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Service_> getAllService() {
        return serviceService.getAllServices();
    }

    @PostMapping("/save")
    public Service_ saveService(@RequestBody Service_ service) {
        return serviceService.saveService(service);
    }

    @GetMapping("/getById/{id}")
    public Service_ getServiceById(@PathVariable Long id) {
        return OptionalGet.get(serviceService.getServiceById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteService(@PathVariable Long id) {
        serviceService.deleteService(id);
    }
}
