package com.example.springserve.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Account")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/login")
    public Account login(Account account) {
        Account userAccount = accountService.login(account.userName, account.password);
        if (userAccount == null) {
            return null;
        }
        userAccount.password = null;
        return userAccount;
    }
}
