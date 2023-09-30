package com.example.springserve.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class Service_Service {

    @Autowired(required = false)
    private Service_Repository service_Repository;

    public List<Service_> getAllServices() {
        return service_Repository.findAll();
    }

    public Service_ saveService(Service_ service) {
        return service_Repository.save(service);
    }

    public Optional<Service_> getServiceById(Long id) {
        Optional<Service_> res = service_Repository.findById(id);
        return res;
    }

    public void deleteService(Long id) {
        service_Repository.deleteById(id);
    }
}
