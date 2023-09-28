import React, { useState } from 'react';
import AddQuestionComponent from '../../components/add-question-component/AddQuestionComponent';

interface Answer {
  text: string;
  isCorrect: boolean;
}

interface Question {
  text: string;
  answers: Answer[];
}

const PageAddQuestion: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const addAnswer = (questionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers.push({ text: "", isCorrect: false });
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { text: "", answers: [] }]); // Ajoute une question vide à la liste des questions
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>, questionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].text = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    questionIndex: number,
    answerIndex: number
  ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers[answerIndex].text = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex: number, answerIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers.forEach((answer, i) => {
      if (i === answerIndex) {
        answer.isCorrect = !answer.isCorrect;
      }
    });
    setQuestions(updatedQuestions);
  };

  const removeAnswer = (questionIndex: number, answerIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers.splice(answerIndex, 1);
    setQuestions(updatedQuestions);
  };

  const removeQuestion = (questionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const submitQuestion = () => {
    console.log("Questions:", questions);

    const data = {
      questions: questions,
      jobTitle: "Repair Technician",
      employmentType: "Full-time",
      required: true
    };

    console.log("Data:", data);
  };

  return (
    <AddQuestionComponent
      questions={questions}
      onQuestionChange={handleQuestionChange}
      onAnswerChange={handleAnswerChange}
      onCorrectAnswerChange={handleCorrectAnswerChange}
      onRemoveAnswer={removeAnswer}
      onAddAnswer={addAnswer}
      onRemoveQuestion={removeQuestion}
      onAddQuestion={addQuestion}
      onSubmitQuestion={submitQuestion}
    />
  );
};

export default PageAddQuestion;