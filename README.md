# Quiz Portal – Full Stack Application

## Project Overview

This project is a Quiz Portal where users can log in, view available quizzes, attempt quizzes, and see their results. The system allows an admin to create quizzes with multiple choice questions. Users can start a quiz, answer questions within a time limit, and submit their responses. The backend calculates the score and stores the attempt history in the database.

The application is built using a React frontend and a Spring Boot backend with MySQL as the database.

---

## Tech Stack

Frontend
React + TypeScript (Vite)

Backend
Spring Boot (REST APIs)

Database
MySQL

Version Control
Git + GitHub

---

## Project Structure

```
T1-Sujith-BN
│
├── src                 → React frontend source code
├── public              → Static frontend files
├── quizportal-backend  → Spring Boot backend
├── screens             → UI screenshots
├── README.md
├── package.json
└── index.html
```

---

## Features Implemented

User login interface
View available quizzes
Start quiz
Multiple choice questions (4 options)
Timer countdown for quiz
Auto submit when timer expires
Submit answers
Score calculated by backend
View quiz result
Attempt history stored in database

---

## Backend API Endpoints

User APIs

POST /api/users/login
Creates or retrieves user in the database.

Quiz APIs

POST /api/quizzes
Create a new quiz.

GET /api/quizzes
Fetch all quizzes.

Question APIs

POST /api/questions
Add questions to a quiz.

GET /api/questions/{quizId}
Fetch questions for a specific quiz.

Attempt APIs

POST /api/attempt
Submit quiz answers.

GET /api/results/{userId}
Fetch quiz attempt history.

---

## Database Structure

Users

id
name
email
photoUrl
createdAt

Quizzes

id
title
description
timeLimit
createdBy
createdAt

Questions

id
quizId
questionText
option1
option2
option3
option4
correctAnswerIndex

Attempts

id
quizId
userId
answers
score
submittedAt

---

## Backend Setup (Spring Boot)

Open the backend project in IntelliJ.

Configure MySQL in:

```
quizportal-backend/src/main/resources/application.properties
```

Example configuration:

```
spring.datasource.url=jdbc:mysql://localhost:3306/quiz_portal
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Run the Spring Boot application.

Backend will start on:

```
http://localhost:8080
```

---

## Frontend Setup (React)

Open the frontend folder and run:

```
npm install
```

Start the development server:

```
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```
---

## Screenshots

Screenshots of the application UI are available in the `/screens` folder.

Login Page
Dashboard Page
Quiz Page
Result Page

---

## Important Notes

Score calculation is performed on the backend to prevent client-side manipulation.
All quiz attempts are stored in the database for result tracking.

---


