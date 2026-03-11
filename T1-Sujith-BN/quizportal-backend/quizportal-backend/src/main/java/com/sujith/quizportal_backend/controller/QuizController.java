package com.sujith.quizportal_backend.controller;

import com.sujith.quizportal_backend.entity.Quiz;
import com.sujith.quizportal_backend.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
@CrossOrigin("*")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping
    public Quiz createQuiz(@RequestBody Quiz quiz) {
        return quizService.createQuiz(quiz);
    }

    @GetMapping
    public List<Quiz> getQuizzes() {
        return quizService.getAllQuizzes();
    }
}