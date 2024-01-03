import { useEffect, useState } from "react";
import styles from "./WorkshopExam.module.scss";
import { useGetActiveChild } from "hooks/useGetActiveChild";
import { useGetActiveChildWorkshops } from "hooks/useGetActiveChildWorkshops";
import { useUpdateInsertActiveWorkshops } from "hooks/useUpdateInsertActiveWorkshops";
import { useNavigate } from "react-router-dom";

function WorkshopExam({ workShop }) {
  const [index, setIndex] = useState(0);

  const { data: activeWorkshops } = useGetActiveChildWorkshops();

  const currentActiveWorkshop = activeWorkshops?.find(
    (currentWorkshop) => currentWorkshop?.workshopId === workShop?.id
  );

  const navigate = useNavigate();

  const { examQuestions, workshopName } = workShop;

  const { updateInsertActiveChildWorkshops, isPending } =
    useUpdateInsertActiveWorkshops();

  const { data: currentActiveChild } = useGetActiveChild();

  const [correctAnswer, setCorrectAnswer] = useState("");

  const currentQuestion = examQuestions[index];

  const answers = currentQuestion.answers;

  const isTheRightAnswer =
    correctAnswer === currentQuestion[`question-${index + 1}-rightAnswer`];

  const currentQuestionIndex = examQuestions.findIndex(
    (question) => question?.id === currentQuestion?.id
  );

  const [examScore, setExamScore] = useState();

  function checkNextQuestion() {
    setIndex((index) => index + 1);
  }

  useEffect(() => {
    if (isTheRightAnswer) {
      currentQuestion.questionScore = 10;
      currentQuestion.isAnswerCorrect = true;
    } else {
      currentQuestion.questionScore = 0;
      currentQuestion.isAnswerCorrect = false;
    }

    setExamScore(
      examQuestions.reduce((acc, currValue) => acc + currValue.questionScore, 0)
    );
  }, [examQuestions, isTheRightAnswer, currentQuestion]);

  function handleSubmit() {
    updateInsertActiveChildWorkshops({
      workshopId: workShop.id,
      childId: currentActiveChild[0]?.id,
      imageUrl: workShop.workshopImageUrl,
      examScore,
      examQuestions,
      workshopName,
    });
    navigate("/parent/profile");
  }

  const isLastQuestion = currentQuestionIndex === examQuestions.length - 1;

  if (index === examQuestions.length || currentActiveWorkshop?.isExamFinished)
    return (
      <p className={styles["current-question__paragraph"]}>
        {`Thanks for having ${workshopName} exam`} ☺
      </p>
    );

  return (
    <div>
      <div className={styles["current-question"]}>
        <div className="flex justify-between text-center col-span-full ">
          <h2 className={styles["current-question__heading"]}>
            Q: {currentQuestion[`question-${index + 1}-name`]}
          </h2>
          <p className="text-3xl">
            Question: {currentQuestionIndex + 1} of {examQuestions.length}
          </p>
        </div>

        <ul className={styles["current-question__list"]}>
          {answers.map((answer, index) => (
            <li
              key={answer}
              onClick={() => {
                setCorrectAnswer(answer);
              }}
            >
              <span
                className={
                  answer === correctAnswer
                    ? ` ${styles["current-question__active-answer"]}`
                    : ""
                }
              >
                {index + 1} : {answer}
              </span>
            </li>
          ))}
        </ul>

        <div className=" flex flex-col justify-self-end">
          <button
            disabled={isPending}
            className={styles["current-question__button"]}
            onClick={() =>
              isLastQuestion ? handleSubmit() : checkNextQuestion()
            }
          >
            {isLastQuestion ? "Submit" : `Next Question`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkshopExam;
