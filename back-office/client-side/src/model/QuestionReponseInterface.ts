import { Question } from "./QuestionInterface";

export interface QuestionReponse{
    id         : number;
    question   : Question;
    reponse    : string;
    status     : string;
}