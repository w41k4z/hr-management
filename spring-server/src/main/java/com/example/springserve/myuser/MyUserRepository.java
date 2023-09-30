package com.example.springserve.myuser;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyUserRepository extends JpaRepository<MyUser , Long>
{
    Optional<MyUser> findById(Long id);
}