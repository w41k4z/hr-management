import React, { useEffect, useState } from "react";
import AnswerSelection from "./AnswerSelection";
import { V_besoinannonce } from "../../model/V_besoinannonce";
import { Question } from "../../model/QuestionInterface";
import { QuestionReponse } from "../../model/QuestionReponseInterface";
import { ReponseTest } from "../../model/ResponseTest";
import { Cv } from "../../model/CvInterface";
import axiosInstance from "../../http-client-side/Axios";
import {
  h6,
  myAnswer,
  questionnaireTitle,
} from "../../assets/css/rounded-circle-adding";

const QuestionAnswer = () => {
  const reinitialiserPage = () => {
    setV_besoinannonce([]);
    setIsPageLoad(false);
    setAllTesteur([]);
    setIdAnnonce(-1);
    setChangeQuestions([]);
    setQuestionsWithAnswer([]);
    setIdCv(-1);
    setReponseTest(undefined);
  };

  const [v_besoinannonce, setV_besoinannonce] = useState<V_besoinannonce[]>([]);
  const [isPageLoad, setIsPageLoad] = useState<boolean>();
  const [allTesteur, setAllTesteur] = useState<Cv[]>([]);
  useEffect(() => {
    if (!isPageLoad) {
      setIsPageLoad(true);
      fetch("http://localhost:8080/V_besoinannonce/getAll")
        .then((response) => response.json())
        .then((data) => setV_besoinannonce(data));

      fetch("http://localhost:8080/Cv/getAll")
        .then((response) => response.json())
        .then((data) => setAllTesteur(data));
    }
  }, [isPageLoad]);

  const [idannonce, setIdAnnonce] = useState<number>(0);
  const handleSelectedAnnonce = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIdAnnonce(parseInt(e.target.value));
  };

  const [changequestions, setChangeQuestions] = useState<Question[]>([]);
  const [questionsWithAnswer, setQuestionsWithAnswer] = useState<
    { Oquestion: Question; questionreponses: QuestionReponse[] }[]
  >([]);
  useEffect(() => {
    fetch(
      "http://localhost:8080/Questionannonce/getQuestionsByIdAnnonce/" +
        idannonce
    )
      .then((response) => response.json())
      .then((data) => setChangeQuestions(data));
  }, [idannonce]);

  useEffect(() => {
    fetchDataForAllQuestions();
  }, [changequestions]);

  const fetchDataForAllQuestions = async () => {
    try {
      const updatequestionswithanswer: {
        Oquestion: Question;
        questionreponses: QuestionReponse[];
      }[] = [];
      await Promise.all(
        changequestions.map(async (quest) => {
          const response = await fetch(
            "http://localhost/8080/Questionreponse/getByIdQuestion/" + quest.id
          );
          const data = await response.json();
          updatequestionswithanswer.push({
            Oquestion: quest,
            questionreponses: data as QuestionReponse[],
          });
        })
      );
      setQuestionsWithAnswer(updatequestionswithanswer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAnswerSelect = (question_id: number, reponse: string) => {
    const updatedQuestions = [...questionsWithAnswer];

    const questionIndex = updatedQuestions.findIndex(
      (questionBlock) => questionBlock.Oquestion.id === question_id
    );

    const answerIndex = updatedQuestions[
      questionIndex
    ].questionreponses.findIndex(
      (questionReponse) => questionReponse.reponse === reponse
    );

    if (
      updatedQuestions[questionIndex].questionreponses[answerIndex].change ===
      undefined
    ) {
      updatedQuestions[questionIndex].questionreponses[answerIndex].change =
        true;
    } else {
      updatedQuestions[questionIndex].questionreponses[answerIndex].change =
        !updatedQuestions[questionIndex].questionreponses[answerIndex].change;
    }
    setQuestionsWithAnswer(updatedQuestions);
  };

  const calculateScore = () => {
    var point_total = 0;
    var point_obtenu = 0;
    for (const questionBlock of questionsWithAnswer) {
      for (const questionreponse of questionBlock.questionreponses) {
        point_total += 1;
        if (questionreponse.change === undefined)
          questionreponse.change = false;
        if (String(questionreponse.status) == String(questionreponse.change)) {
          point_obtenu += 1;
        }
      }
    }
    return (point_obtenu * 100) / point_total;
  };

  const [idCv, setIdCv] = useState<number>(-1);
  const handleSelectedCv = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIdCv(parseInt(e.target.value));
  };

  const [reponseTest, setReponseTest] = useState<ReponseTest>();
  const saveScore = async () => {
    try {
      const score = calculateScore();
      setReponseTest({
        idcv: idCv,
        idannonce: idannonce,
        point: score,
      });
      console.log(reponseTest);
      await axiosInstance.post("/ReponseTest/save", reponseTest);
      alert("Teste sauvegarder");
      reinitialiserPage();
    } catch (error) {
      alert("Erreur " + error);
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "90%" }}>
      <h2 style={questionnaireTitle}>
        Veuillez décochez le(s) fausses reponses
      </h2>

      <section className="mt-4">
        <h6 style={h6}>Cv postulé</h6>
        <div className="row">
          <div className="col-md-6">
            <select
              defaultValue={0}
              onChange={handleSelectedCv}
              className="form-select"
              aria-label="Sélectionnez le cv postulé"
            >
              <option value={0} disabled>
                Cv postulé
              </option>
              {allTesteur.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.nom + " " + option.prenom}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-5">
            <button className="btn btn-primary">
              Sélectionner le cv postulé
            </button>
          </div>
        </div>
      </section>

      <div className="containre mt-5 form-input">
        <select
          defaultValue={0}
          onChange={handleSelectedAnnonce}
          className="form-control form-select"
        >
          <option disabled value={0}>
            Sélectionnez l` annonce origine
          </option>
          {v_besoinannonce.map((annonce, index) => (
            <option value={annonce.idannonce} key={annonce.idannonce}>
              {annonce.description}
            </option>
          ))}
        </select>
      </div>

      <div className="container mt-5">
        {questionsWithAnswer.map((questionblock, index) => (
          <React.Fragment key={index}>
            <h6 style={{ marginBottom: "3%" }}>
              {index + 1} - {questionblock.Oquestion.question}
            </h6>
            <div style={myAnswer}>
              {questionblock.questionreponses.map(
                (questionreponse, answerIndex) => (
                  <AnswerSelection
                    key={answerIndex}
                    questionreponse={questionreponse}
                    onToggleCorrect={() =>
                      handleAnswerSelect(
                        questionblock.Oquestion.id,
                        questionreponse.reponse
                      )
                    }
                  />
                )
              )}
            </div>
            <br />
          </React.Fragment>
        ))}
      </div>
      <button
        onClick={saveScore}
        className="btn btn-success col-md-3 offset-md-8"
      >
        Valider
      </button>
    </div>
  );
};

export default QuestionAnswer;
