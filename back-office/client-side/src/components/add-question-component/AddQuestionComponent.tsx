import React, { useState } from 'react';
import QuestionComponent from './QuestionComponent';
import {FaPlus} from 'react-icons/fa';
import QuestionSelection from './QuestionSelection';

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

const testData = {
  annonceOptions: [
    { value: 'ing1', label: 'Ingénieur logiciel chez XYZ Corp' },
    { value: 'dev2', label: 'Développeur Full Stack chez ABC Company' },
    { value: 'pm3', label: 'Chef de projet IT chez DEF Ltd.' },
  ],
  titrePosteOptions: [
    { value: 'dev1', label: 'Développeur Front-end' },
    { value: 'eng2', label: 'Ingénieur de test logiciel' },
    { value: 'mgr3', label: 'Gestionnaire de projet technique' },
  ],
};


const alreadyUsedQuestions = [
  'Parlez-moi de vous et de votre expérience professionnelle.',
  'Quels sont vos points forts et vos points faibles ?',
  'Pouvez-vous me donner un exemple de situation où vous avez résolu un problème avec succès ?',
  'Comment travaillez-vous en équipe ?',
  'Où vous voyez-vous dans cinq ans ?',
];

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

  const NoAction  = () => {};

  return (
    <div className="container mt-4">
      <h2 className="questionnaire-title">Questionnaire</h2>
      <div className="container mt-5">
        
        <section className="mt-4">
          <h6>Titre du poste</h6>
          <div className='row'>
            <div className="col-md-6">
              <select className="form-select" aria-label="Sélectionnez un titre de poste">
                <option value="" disabled selected hidden>
                  Sélectionnez un titre de poste
                </option>
                {testData.titrePosteOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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
              {testData.annonceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <br />
        
        <div className="row mt-4 similar-question">
          <h6>Question similaire</h6>
          {alreadyUsedQuestions.map((question, index) => (
            <div className="col-md-6" key={index}>
              <QuestionSelection
                question={question}
                onSelect={handleQuestionSelect}
                selected={selectedQuestions.includes(question)}
              />
            </div>
          ))}
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
