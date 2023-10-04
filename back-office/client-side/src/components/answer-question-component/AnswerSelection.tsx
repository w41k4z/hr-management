import React from "react";
import { QuestionReponse } from "../../model/QuestionReponseInterface";

interface AnswerSelectionProps{
    questionreponse: QuestionReponse;
    onToggleCorrect : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AnswerSelection : React.FC<AnswerSelectionProps> = ({questionreponse , onToggleCorrect}) => {
    return (
        <>
        <div className="input-group mb-4">
            <div className="input-group-append">
                <div className="input-group-text">
                    {/* <h2>{questionreponse.status}</h2> */}
                    <input
                        type="checkbox"
                        onChange={onToggleCorrect}
                        className="form-check-input"
                        checked={questionreponse.change !== undefined}
                    />
                </div>
            </div>
            <textarea
                placeholder={questionreponse.reponse}
                disabled={true}
                className="form-control"
                rows={2} // Vous pouvez ajuster le nombre de lignes selon vos besoins
            />
        </div>
        </>
    );
}

export default AnswerSelection;