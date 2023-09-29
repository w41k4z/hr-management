import React from "react";

interface AnswerSelectionProps{
    answer: { value: string; isChecked: boolean };
    onToggleCorrect : () => void;
}

const AnswerSelection : React.FC<AnswerSelectionProps> = ({answer , onToggleCorrect}) => {
    return (
        <>
        <div className="input-group mb-4">

            <div className="input-group-append">
                <div className="input-group-text">
                    <input
                        type="checkbox"
                        checked={answer.isChecked}
                        onChange={onToggleCorrect}
                        className="form-check-input"
                    />
                </div>
            </div>
            <textarea
                placeholder={answer.value}
                disabled={true}
                className="form-control"
                rows={2} // Vous pouvez ajuster le nombre de lignes selon vos besoins
            />
        </div>

        </>
    );
}

export default AnswerSelection;