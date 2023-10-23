package com.example.springserve.v_conge.v_terminerconge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface V_terminercongeRepository extends JpaRepository<V_terminerconge, Long> 
{
    List<V_terminerconge> findByEtat(Long etat);
}
