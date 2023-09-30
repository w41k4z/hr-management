package com.example.springserve.myuser;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springserve.helpers.OptionalGet;

@RestController
@RequestMapping("/users")
public class MyUserController 
{
    @Autowired
    private MyUserService myUserService;

    @GetMapping("/getAll")
    @ResponseBody
    public List<MyUser> getAllMyUsers() {
        return myUserService.getAllUsers();
    }

    @PostMapping("/save/{username}/{email}")
    public MyUser saveMyUser(@PathVariable String username, @PathVariable String email) {
        MyUser MyUser = new MyUser(username, email);
        return myUserService.saveUser(MyUser);
    }

    @GetMapping("/getById/{id}")
    public MyUser getMyUserById(@PathVariable Long id) {
        return OptionalGet.get(myUserService.getUserById(id));
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteMyUser(@PathVariable Long id) {
        myUserService.deleteUser(id);
    }
}
