package com.sujith.quizportal_backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long quizId;

    private String questionText;

    private String option1;

    private String option2;

    private String option3;

    private String option4;

    private int correctAnswerIndex;
}