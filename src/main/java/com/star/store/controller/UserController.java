package com.star.store.controller;

import com.star.store.entities.Users;
import com.star.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<Users> getUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        Users user = userService.getUser(username);
        return ResponseEntity.ok(user);
    }
}
