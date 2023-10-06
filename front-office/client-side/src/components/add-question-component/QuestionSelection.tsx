import LastQuestion from "../../datamanipulator/lastquestion";

interface QuestionSelectionProps {
    lastquestion        : LastQuestion;
    onSelect        : (e: React.ChangeEvent<HTMLInputElement>) => void;
}
  
const QuestionSelection: React.FC<QuestionSelectionProps> = ({ lastquestion, onSelect }) => {
    return (
        <div className="form-check">
            <input
            className="form-check-input"
            type="checkbox"
            value={lastquestion.id}
            onChange={onSelect}
            />
            <label className="form-check-label">{lastquestion.question}</label>
        </div>
    );
}

export default QuestionSelection;