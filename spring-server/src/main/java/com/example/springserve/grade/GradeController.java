package com.example.springserve.grade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/Grade")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class GradeController {
    @Autowired
    private GradeService gradeService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<Grade> getAllGrade() {
        return gradeService.getAllGrades();
    }

    @PostMapping("/save")
    public Grade saveGrade(@RequestBody Grade grade) {
        return gradeService.saveGrade(grade);
    }

    @GetMapping("/getById/{id}")
    public Grade getGradeById(@PathVariable Long id) {
        return OptionalGet.get(gradeService.getGradeById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteGrade(@PathVariable Long id) {
        gradeService.deleteGrade(id);
    }
}
