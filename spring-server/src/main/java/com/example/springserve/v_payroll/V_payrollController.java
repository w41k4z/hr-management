package com.example.springserve.v_payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/V_payroll")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class V_payrollController {

    @Autowired
    private V_payrollService payrollViewService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<V_payroll> getAll() {
        return payrollViewService.getAll();
    }
}
