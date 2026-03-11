package com.sujith.quizportal_backend.controller;

import com.sujith.quizportal_backend.entity.Attempt;
import com.sujith.quizportal_backend.service.AttemptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class AttemptController {

    @Autowired
    private AttemptService attemptService;

    @PostMapping("/attempt")
    public Attempt submitQuiz(@RequestBody Attempt attempt) {
        return attemptService.submitAttempt(attempt);
    }

    @GetMapping("/results/{userId}")
    public List<Attempt> getResults(@PathVariable Long userId) {
        return attemptService.getUserResults(userId);
    }
}