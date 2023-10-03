package com.example.springserve.grade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class GradeService {

    @Autowired(required = false)
    private GradeRepository GradeRepository;

    public List<Grade> getAllGrades() {
        return GradeRepository.findAll();
    }

    public Grade saveGrade(Grade Grade) {
        return GradeRepository.save(Grade);
    }

    public Optional<Grade> getGradeById(Long id) {
        Optional<Grade> res = GradeRepository.findById(id);
        return res;
    }

    public void deleteGrade(Long id) {
        GradeRepository.deleteById(id);
    }
}
