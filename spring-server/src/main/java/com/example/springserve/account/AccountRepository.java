package com.example.springserve.account;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
    public Account findByUserName(String username);
}
