import React from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import AnswerComponent from './AnswerComponent';

interface QuestionProps {
  question: { text: string; answers: { text: string; isCorrect: boolean }[] };
  onQuestionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAnswerChange: (e: React.ChangeEvent<HTMLInputElement>, answerIndex: number) => void;
  onCorrectAnswerChange: (answerIndex: number) => void;
  onRemoveAnswer: (answerIndex: number) => void;
  onAddAnswer: () => void;
  onRemoveQuestion: () => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({
  question,
  onQuestionChange,
  onAnswerChange,
  onCorrectAnswerChange,
  onRemoveAnswer,
  onAddAnswer,
  onRemoveQuestion,
}) => (
  <div className="d-flex container flex-column mx-auto" style={{padding : '1%'}}>

    <div className='row'>
        <div className='col-md-3'>
            <h6>Question</h6>
            <input type="text" value={question.text} onChange={onQuestionChange} className="form-control" />
        </div>
        <div className='col-md-5'>
            <h6>Réponse(s)</h6>
            {question.answers.map((answer, answerIndex) => (
            <AnswerComponent
                key={answerIndex}
                answer={answer}
                onChange={(e) => onAnswerChange(e, answerIndex)}
                onToggleCorrect={() => onCorrectAnswerChange(answerIndex)}
                onRemove={() => onRemoveAnswer(answerIndex)}
            />
            ))}
        </div>
        <div className='col-md-4'>
            <h6>Action</h6>
            <div className='row'>
                <div className='col-md-5'>
                    <input type="text" className='form-control' disabled={true} value={"Réponse"} />
                </div>
                <div className="my-cirlce-btn" onClick={onAddAnswer} style={{backgroundColor : '#198754'}}>
                    <FaPlus className="icon" />
                </div>
            </div>
            <br />
            <div className='row'>
                <div className='col-md-5'>
                    <input type="text" className='form-control' disabled={true} value={"Question"} />
                </div>
                <div className="my-cirlce-btn" onClick={onRemoveQuestion} style={{backgroundColor : '#de1212'}}>
                    <FaTimes className='icon'/>
                </div>
            </div>
        </div>
    </div>

    <br />
  </div>
);

export default QuestionComponent;

