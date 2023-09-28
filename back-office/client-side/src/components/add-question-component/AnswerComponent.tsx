import React from 'react';
import './stylequestion.css';

interface AnswerProps {
  answer: { text: string; isCorrect: boolean };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleCorrect: () => void;
  onRemove: () => void;
}

const AnswerComponent: React.FC<AnswerProps> = ({ answer, onChange, onToggleCorrect, onRemove }) => (
  <div className="mb-3">
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="..."
        value={answer.text}
        onChange={onChange}
      />
      <div className="input-group-append">
        <div className="input-group-text">
          <input
            type="checkbox"
            checked={answer.isCorrect}
            onChange={onToggleCorrect}
            className="form-check-input"
          />
        </div>
      </div>
      <div className="input-group-append">
        <button onClick={onRemove} className="btn custom-btn-danger">
          Supprimer
        </button>
      </div>
    </div>
  </div>
);

export default AnswerComponent;
