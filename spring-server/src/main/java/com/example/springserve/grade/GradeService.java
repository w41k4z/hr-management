package com.example.springserve.grade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GradeService {

    @Autowired(required = false)
    private GradeRepository gradeRepository;

    public List<Grade> getAllGrades() {
        return gradeRepository.findAll();
    }

    public Grade saveGrade(Grade grade) {
        return gradeRepository.save(grade);
    }

    public Optional<Grade> getGradeById(Long id) {
        Optional<Grade> res = gradeRepository.findById(id);
        return res;
    }

    public void deleteGrade(Long id) {
        gradeRepository.deleteById(id);
    }
}
