package com.star.store.service;

import com.star.store.entities.Users;
import com.star.store.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService  {
    @Autowired
    private UserRepository userRepository;
    public Users getUser(String username) {
        return userRepository.findByUsername(username);
    }
}
