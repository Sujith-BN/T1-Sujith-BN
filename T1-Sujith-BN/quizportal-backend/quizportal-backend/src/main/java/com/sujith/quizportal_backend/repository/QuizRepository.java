package com.sujith.quizportal_backend.repository;

import com.sujith.quizportal_backend.entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
}