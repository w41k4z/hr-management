package com.example.springserve.personnel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class PersonnelService {

    @Autowired(required = false)
    private PersonnelRepository personnelRepository;

    public List<Personnel> getAllPersonnels() {
        return personnelRepository.findAll();
    }

    public Personnel savePersonnel(Personnel personnel) {
        return personnelRepository.save(personnel);
    }

    public Optional<Personnel> getPersonnelById(Long id) {
        Optional<Personnel> res = personnelRepository.findById(id);
        return res;
    }

    public void deletePersonnel(Long id) {
        personnelRepository.deleteById(id);
    }
}
