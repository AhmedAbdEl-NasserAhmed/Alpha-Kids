import Modal from "UI/Modal/Modal";
import styles from "./ShowExamResults.module.scss";
import { useUser } from "hooks/useUser";
import { useGetActiveChild } from "hooks/useGetActiveChild";

function ShowExamResultsForm({
  currentWorkshop = {},
  showModal,
  setShowModal,
}) {
  const { examQuestions, examScore, workshopName, isExamFinished } =
    currentWorkshop;

  const { user } = useUser();

  const { data: currentActiveChild } = useGetActiveChild();

  const totalExamScore = 10 * examQuestions?.length;

  const isPassed = examScore >= totalExamScore / 2;

  const userName = user?.user_metadata?.userName;

  const childName = currentActiveChild[0]?.childName;

  if (!isExamFinished)
    return (
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div
          className={`${styles["exam-results"]} ${
            showModal ? "move-down" : ""
          }`}
        >
          <p className="text-3xl text-center">
            {childName} did not Finish workshop Exam yet 👋
          </p>
        </div>
      </Modal>
    );

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <div
        className={`${styles["exam-results"]} ${showModal ? "move-down" : ""}`}
      >
        <div className={styles["exam-results__heading"]}>
          <h2>Exam Summary</h2>
          <p>
            Hello <span>{userName}</span> ,{" "}
            {isPassed ? "congratulations" : "unfortunately"} {""}
            your Kid <span>{childName}</span>{" "}
            {isPassed ? "has passed" : "has failed"} in the{" "}
            <span> {workshopName}</span> workshop Exam
          </p>
        </div>
        <ul className={styles["questions-list"]}>
          <h2 className={styles["questions-list__heading"]}>Exam Review</h2>
          {examQuestions?.map((question, index) => (
            <li key={question.id}>
              <h2 className={styles["questions-list__question"]}>
                {`Q:${index + 1}`} {question[`question-${index + 1}-name`]}
              </h2>
              <p
                className={`${styles["questions-list__answer"]}  ${
                  question.isAnswerCorrect ? "text-lime-500" : "text-red-500"
                }`}
              >
                {question.isAnswerCorrect
                  ? "correct Answer 😊"
                  : "Wrong Answer 😢"}
              </p>
            </li>
          ))}
          <h2 className={styles["questions-list__score"]}>
            Total Score: {examScore} of {totalExamScore}
          </h2>
        </ul>
        <span className={styles["exam-results__emoji"]}>
          {isPassed ? "😊" : "😢"}
        </span>
      </div>
    </Modal>
  );
}

export default ShowExamResultsForm;
