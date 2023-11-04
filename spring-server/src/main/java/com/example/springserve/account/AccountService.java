package com.example.springserve.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired(required = false)
    private AccountRepository accountRepository;

    public Account saveAccount(Account account) {
        return accountRepository.save(account);
    }

    public Account getAccountById(Long id) {
        return accountRepository.findById(id).orElse(null);
    }

    public void deleteAccount(Long id) {
        accountRepository.deleteById(id);
    }

    public Account updateAccount(Account account) {
        Account existingAccount = accountRepository.findById(account.id).orElse(null);
        existingAccount.userName = account.userName;
        existingAccount.password = account.password;
        existingAccount.privilege = account.privilege;
        return accountRepository.save(existingAccount);
    }

    public Account login(String userName, String password) {
        Account existingAccount = accountRepository.findByUserName(userName);
        if (existingAccount != null && existingAccount.password.equals(password)) {
            return existingAccount;
        }
        return null;
    }
}
