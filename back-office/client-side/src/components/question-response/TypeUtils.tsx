import { Question } from "../../model/QuestionInterface";

export type Answer = {
    index : number;
    value : string;
    isChecked : boolean;
}
export type QuestionBlock = {
    question : string , 
    answers : Answer[]
}
export type Type_questionannonce = {
    question        : Question;
    reponse         : string;
    status          : boolean;   
}