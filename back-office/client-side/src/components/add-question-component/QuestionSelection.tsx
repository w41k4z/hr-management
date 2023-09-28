interface QuestionSelectionProps {
    question: string;
    onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selected: boolean;
}
  
const QuestionSelection: React.FC<QuestionSelectionProps> = ({ question, onSelect, selected }) => (
    <div className="form-check">
        <input
        className="form-check-input"
        type="checkbox"
        value={question}
        checked={selected}
        onChange={onSelect}
        />
        <label className="form-check-label">{question}</label>
    </div>
);

export default QuestionSelection;