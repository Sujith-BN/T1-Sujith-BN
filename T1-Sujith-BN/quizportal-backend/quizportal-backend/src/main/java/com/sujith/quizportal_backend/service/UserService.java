package com.sujith.quizportal_backend.service;

import com.sujith.quizportal_backend.entity.User;
import com.sujith.quizportal_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {

        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if(existingUser.isPresent()) {
            return existingUser.get();
        }

        user.setCreatedAt(LocalDateTime.now().toString());

        return userRepository.save(user);
    }
}