import { Question } from "./QuestionInterface";

export interface Answer {
    text: string;
    isCorrect: boolean;
}
  
export interface NewQuestionAnnonce {
    question: Question;
    answers: Answer[];
}