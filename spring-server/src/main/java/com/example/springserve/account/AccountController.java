package com.example.springserve.account;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Account")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/login")
    public Account login(@RequestBody Map<String, Object> jsonData) {
        Account userAccount = accountService.login(jsonData.get("userName").toString(),
                jsonData.get("password").toString());
        if (userAccount == null) {
            return null;
        }
        userAccount.password = null;
        return userAccount;
    }
}
