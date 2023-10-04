import React, { useState } from 'react';
import AddQuestionComponent from '../../components/add-question-component/AddQuestionComponent';
import axiosInstance from '../../http-client-side/Axios';
import { Type_questionannonce } from '../../components/answer-question-component/TypeUtils';
import { Question } from '../../model/QuestionInterface';
import { NewQuestionAnnonce } from '../../model/UtilInterface';


const PageAddQuestion: React.FC = () => {

  const [questions, setQuestions] = useState<NewQuestionAnnonce[]>([]);

  const addAnswer = (questionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers.push({ text: "", isCorrect: false });
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: {id: 0 ,question:""}, answers: [] }]); // Ajoute une question vide à la liste des questions
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>, questionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].question.question = e.target.value;
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

  const [selectedLastQuestions, setSelectedLastQuestions] = useState<number[]>([]);
  const handleLastQuestionSelected_ = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idquestion = e.target.value;
    const updatedSelectedLastQuestions = [...selectedLastQuestions];
    if (updatedSelectedLastQuestions.includes( parseInt(idquestion) )) {
      updatedSelectedLastQuestions.splice(updatedSelectedLastQuestions.indexOf(parseInt(idquestion)));
    } else {
      updatedSelectedLastQuestions.push(parseInt(idquestion));
    }
    setSelectedLastQuestions(updatedSelectedLastQuestions);
  };

  const [idAnnonce , setIdAnnonce ] = useState<number>();
  const handleIdAnnonce_ = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIdAnnonce(parseInt(e.target.value));
  }

  const addNewQuestion = async (p_question: Question): Promise<Question> => {
    try{
      const { data } = await axiosInstance.post("/Question/save", { question : p_question.question });
      return data as Question;
    }
    catch(error){
      console.error('Error sending data:', error);
      throw error;
    }
  }

  const addQuestionAnnonce = async (data: {idannonce:number , idquestion:number }) => {
    try{
      await axiosInstance.post("/Questionannonce/save", data);
    }
    catch(error){
      console.error('Error sending data:', error);
      throw error;
    }
  }

  const addNewQuestionReponse = async (p_questionsannonce: NewQuestionAnnonce[], idannonce_: number) => {
    try{
      for (const questionreponse of p_questionsannonce) {
        const newQuestion = await addNewQuestion(questionreponse.question);

        for(const answer of questionreponse.answers){
          const newQuestionAnnonce = {question: newQuestion , reponse : answer.text , status : answer.isCorrect} as Type_questionannonce;
          await axiosInstance.post("/Questionreponse/save", newQuestionAnnonce);
        }

        await addQuestionAnnonce({idannonce : idannonce_ , idquestion : newQuestion.id });
      }
    }
    catch(error){
      console.error('Error sending data:', error);
    }
  }

  const submitQuestion = async () => {
    console.log("IdAnnonce:", idAnnonce);
    console.log("Questions:", questions);
    console.log("Last questions : ", selectedLastQuestions);
    try {
      if(idAnnonce)await addNewQuestionReponse(questions , idAnnonce);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <AddQuestionComponent
      questions={questions}
      handleIdAnnonce={handleIdAnnonce_}
      handleLastQuestionSelected={handleLastQuestionSelected_}
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