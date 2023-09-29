import React, { useState, useEffect } from "react";
import QuestionAnswer from "../../components/question-response/question-answer";
import {QuestionBlock} from '../../components/question-response/TypeUtils';

const data: QuestionBlock[] = [
    {
      question: "Pouvez-vous décrire votre expérience professionnelle antérieure et comment elle vous a préparé pour ce poste?",
      answers: [
        {
          index: 0,
          value: "J'ai travaillé pendant [nombre d'années] en tant que [votre rôle précédent] chez [nom de l'entreprise].",
          isChecked: false,
        },
        {
          index: 1,
          value: "Mon expérience précédente m'a permis de développer des compétences solides dans [domaines pertinents au poste actuel].",
          isChecked: false,
        },
      ],
    },
    {
      question: "Comment restez-vous à jour sur les dernières tendances et développements dans votre domaine?",
      answers: [
        {
          index: 0,
          value: "Je suis actif sur des plateformes professionnelles comme LinkedIn et je participe régulièrement à des webinaires et des conférences.",
          isChecked: false,
        },
        {
          index: 1,
          value: "Je suis abonné à des publications spécialisées et je participe à des groupes de discussion pour rester informé des dernières tendances.",
          isChecked: false,
        },
      ],
    },
];
  

const PageAnswerQuestion = () => {
    const [questions , setQuestions] = useState<QuestionBlock[]>([]);
    useEffect( () => {  setQuestions(data); }, []); // Le tableau vide signifie que cette dépendance s'exécute uniquement une fois au montage

    const finalCheck = (questionIndex : number , answerIndex : number) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].answers.forEach((answer, i) => {
          if (i === answerIndex) {
            answer.isChecked = !answer.isChecked;
          }
        });
        setQuestions(updatedQuestions);
    }

    return (
        <QuestionAnswer questions={questions} handleAnswerSelect={finalCheck}/>
    );
};

export default PageAnswerQuestion;