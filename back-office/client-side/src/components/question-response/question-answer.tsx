import React from "react";
import AnswerSelection from "./AnswerSelection";
import './stylequestionresponse.css';
import {QuestionBlock} from './TypeUtils';

interface ToPage {
    questions : QuestionBlock[];
    handleAnswerSelect : (questionIndex : number , answerIndex : number) => void;
}

const QuestionAnswer : React.FC<ToPage> = ({questions , handleAnswerSelect}) => {

    return (
        <div className="container mt-4" style={{maxWidth : '90%'}}>
            <h2 className="questionnaire-title">Veuillez cochez le(s) reponses</h2>

                <div className="container mt-5">
                    {questions.map((questionblock, questionIndex) => (
                        <>
                            <h6 style={{marginBottom : '3%'}}>{questionIndex + 1} - {questionblock.question}</h6>
                            <div className="my-answer">
                                {questionblock.answers.map((answerData , answerIndex) => (
                                    <AnswerSelection
                                        answer = { answerData }
                                        onToggleCorrect = { () => handleAnswerSelect(questionIndex , answerIndex)}
                                    />
                                ))}
                            </div>
                            <br />
                        </>
                    ))}
                </div>

                <button className="btn btn-success col-md-3 offset-md-8">Valider</button>
        </div>
    );
};

export default QuestionAnswer;