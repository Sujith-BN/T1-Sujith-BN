package com.sujith.quizportal_backend.controller;

import com.sujith.quizportal_backend.entity.User;
import com.sujith.quizportal_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
}