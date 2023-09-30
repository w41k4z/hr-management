package com.example.springserve.myuser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class MyUserService {

    @Autowired(required = false)
    private MyUserRepository UserRepository;

    public List<MyUser> getAllUsers() {
        return UserRepository.findAll();
    }

    public MyUser saveUser(MyUser User) {
        return UserRepository.save(User);
    }

    public Optional<MyUser> getUserById(Long id) {
        Optional<MyUser> res = UserRepository.findById(id);
        return res;
    }

    public void deleteUser(Long id) {
        UserRepository.deleteById(id);
    }
}
