package com.example.springserve.v_payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class V_payrollService {

    @Autowired(required = false)
    private V_payrollRepository payrollViewRepository;

    public List<V_payroll> getAll() {
        return payrollViewRepository.findAll();
    }

    public Optional<V_payroll> getPayrollViewById(Long id) {
        return payrollViewRepository.findById(id);
    }
}
