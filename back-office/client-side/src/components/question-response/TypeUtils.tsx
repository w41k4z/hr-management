export type Answer = {
    index : number;
    value : string;
    isChecked : boolean;
}
export type QuestionBlock = {
    question : string , 
    answers : Answer[]
}

