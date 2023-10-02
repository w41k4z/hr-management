import React, { useEffect, useState } from 'react';
import QuestionComponent from './QuestionComponent';
import {FaPlus} from 'react-icons/fa';
import QuestionSelection from './QuestionSelection';
import Poste from '../../model/PosteInterface';
import { V_besoinannonce } from '../../model/V_besoinannonce';
import { Question } from '../../model/QuestionInterface';

interface AddQuestionProps {
  questions: { text: string; answers: { text: string; isCorrect: boolean }[] }[];
  onQuestionChange: (e: React.ChangeEvent<HTMLInputElement>, questionIndex: number) => void;
  onAnswerChange: (e: React.ChangeEvent<HTMLInputElement>,questionIndex: number, answerIndex: number) => void;
  onCorrectAnswerChange: (questionIndex: number, answerIndex: number) => void;
  onRemoveAnswer: (questionIndex: number, answerIndex: number) => void;
  onAddAnswer: (questionIndex: number) => void;
  onRemoveQuestion: (questionIndex: number) => void;
  onAddQuestion: () => void;
  onSubmitQuestion: () => void;
}

const AddQuestionComponent: React.FC<AddQuestionProps> = ({
  questions,
  onQuestionChange,
  onAnswerChange,
  onCorrectAnswerChange,
  onRemoveAnswer,
  onAddAnswer,
  onRemoveQuestion,
  onAddQuestion,
  onSubmitQuestion,
}) => {
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [selectedPoste, setSelectedPoste] = useState(String);
  const [canChangeQuestion , setCanChangeQuestion] = useState(Boolean);

  const handleQuestionSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const question = e.target.value;
    const updatedSelectedQuestions = [...selectedQuestions];
    if (updatedSelectedQuestions.includes(question)) {
      updatedSelectedQuestions.splice(updatedSelectedQuestions.indexOf(question), 1);
    } else {
      updatedSelectedQuestions.push(question);
    }
    setSelectedQuestions(updatedSelectedQuestions);
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const idposte = e.target.value;
    setSelectedPoste(idposte);
    setCanChangeQuestion(true);
  }

  const [allPostes, setAllPoste] = useState<Poste[]>([]);
  useEffect(() => {
    if (allPostes.length === 0) {
      fetch("http://localhost:8080/Poste/getAll")
        .then((res) => res.json())
        .then((data) => setAllPoste(data));
    }
  }, [allPostes]);

  const [all_V_besoinannonce , setBesoinAnnonce] = useState<V_besoinannonce[]>([]);
  useEffect(() => {
    if(all_V_besoinannonce.length === 0){
      fetch("http://localhost:8080/V_besoinannonce/getAll")
        .then((res) => res.json())
        .then((data) => setBesoinAnnonce(data));
    }
  } , [all_V_besoinannonce]);

  const [alreadyUsedQuestions , setAlreadyUsedQuestion] = useState<Question[]>([]);
  useEffect(() => {
    if(selectedPoste.length === 0)setSelectedPoste("0");
    if(canChangeQuestion === true){
      setCanChangeQuestion(false);
      fetch(`http://localhost:8080/Question/getLastQuestionByPostId/${selectedPoste}`)
        .then((res) => res.json())
        .then((data) => setAlreadyUsedQuestion(data));
    }
  } , [canChangeQuestion, selectedPoste, alreadyUsedQuestions]);

  const NoAction  = () => {};

  return (
    <div className="container mt-4">
      <h2 className="questionnaire-title">Questionnaire</h2>
      <div className="container mt-5">
        
        <section className="mt-4">
          <h6>Titre du poste</h6>
          <div className='row'>
            <div className="col-md-6">
              <select className="form-select" onChange={handleChangeSelect} aria-label="Sélectionnez un titre de poste">
                <option value="" disabled selected hidden>
                  Sélectionnez un titre de poste
                </option>
                {
                  allPostes.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.nom}
                    </option>
                  ))
                }
              </select>
            </div>
            <div className="col-md-4">
              <button onClick={NoAction} className="btn btn-primary">Voir dernière question</button>
            </div>
          </div>
        </section>
        
        <br />
        
        <div className='row'>
          <div className='col-md-3'>
            <h6>Annonce</h6>
          </div>
          <div>
            <select className="form-select" aria-label="Sélectionnez une annonce">
              <option value="" disabled selected hidden>
                Sélectionnez une annonce
              </option>
              {all_V_besoinannonce.map((option) => (
                <option key={option.idannonce} value={option.idannonce}>
                  {option.description}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <br />
        
        <div className="row mt-4 similar-question">
          <h6>Question similaire</h6>
          <div id="already-in-use">
            {alreadyUsedQuestions.map((usedquestion, index) => (
              <div className="col-md-6" key={index}>
                <QuestionSelection
                  question={usedquestion.question}
                  onSelect={handleQuestionSelect}
                  selected={selectedQuestions.includes(usedquestion.question)}
                />
              </div>
            ))}
          </div>
        </div>
      
      </div>

      <br /><br />
      
      {questions.map((question, questionIndex) => (
        <QuestionComponent
          key={questionIndex}
          question={question}
          onQuestionChange={(e) => onQuestionChange(e, questionIndex)}
          onAnswerChange={(e, answerIndex) => onAnswerChange(e, questionIndex, answerIndex)}
          onCorrectAnswerChange={(answerIndex) => onCorrectAnswerChange(questionIndex, answerIndex)}
          onRemoveAnswer={(answerIndex) => onRemoveAnswer(questionIndex, answerIndex)}
          onAddAnswer={() => onAddAnswer(questionIndex)}
          onRemoveQuestion={() => onRemoveQuestion(questionIndex)}
        />
      ))}

      <div className='row'>
        <div className='col-md-3 offset-md-2'>
          <input type="text" className='form-control' disabled={true} value={"Ajouter une question"} />
        </div>
        <div className="my-cirlce-btn col-md-2" onClick={onAddQuestion} style={{backgroundColor : '#198754'}}>
          <FaPlus className="icon" />
        </div>
        <button className="btn btn-success col-md-3 offset-md-2" onClick={onSubmitQuestion} style={{backgroundColor : 'green'}}>
          Soumettre les questions
        </button>
      </div>  

    </div>
  );

};

export default AddQuestionComponent;