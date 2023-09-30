package com.example.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.model.MyUser;

public interface UserRepository extends JpaRepository<MyUser , Long>
{
    MyUser findByUsername(String username);
    MyUser findByIdUser(Long idUser);    
}
