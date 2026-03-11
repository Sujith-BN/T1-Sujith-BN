package com.sujith.quizportal_backend.service;

import com.sujith.quizportal_backend.entity.Attempt;
import com.sujith.quizportal_backend.entity.Question;
import com.sujith.quizportal_backend.repository.AttemptRepository;
import com.sujith.quizportal_backend.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AttemptService {

    @Autowired
    private AttemptRepository attemptRepository;

    @Autowired
    private QuestionRepository questionRepository;

    public Attempt submitAttempt(Attempt attempt) {

        List<Question> questions = questionRepository.findByQuizId(attempt.getQuizId());

        String[] userAnswers = attempt.getAnswers().split(",");

        int score = 0;

        for (int i = 0; i < questions.size(); i++) {

            int correctAnswer = questions.get(i).getCorrectAnswerIndex();
            int userAnswer = Integer.parseInt(userAnswers[i]);

            if (correctAnswer == userAnswer) {
                score++;
            }
        }

        attempt.setScore(score);
        attempt.setSubmittedAt(LocalDateTime.now());

        return attemptRepository.save(attempt);
    }

    public List<Attempt> getUserResults(Long userId) {
        return attemptRepository.findByUserId(userId);
    }
}