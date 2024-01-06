import { HiLockClosed } from "react-icons/hi";
import styles from "./ExamItem.module.scss";
import { useState } from "react";
import { useGetActiveChildWorkshops } from "hooks/useGetActiveChildWorkshops";

function ExamItem({ setShowExamQuestions, areAllLessonsFinished, workshop }) {
  const [addStyles, setAddStyles] = useState(true);

  const { data: activeWorkshops } = useGetActiveChildWorkshops();

  const currentActiveWorkshop = activeWorkshops?.find(
    (currentWorkshop) => currentWorkshop?.workshopId === workshop?.id
  );

  return (
    <div
      onClick={
        currentActiveWorkshop?.allLessonsFinished || areAllLessonsFinished
          ? () => {
              setShowExamQuestions(true);
              setAddStyles(false);
            }
          : () => {}
      }
      className={`${styles["exam-item"]} ${
        areAllLessonsFinished && addStyles
          ? `${styles["exam-item__active"]} exam-popup`
          : ""
      }${
        currentActiveWorkshop?.isExamFinished
          ? `${styles["exam-item__finished"]} `
          : ""
      } `}
    >
      <span>
        {currentActiveWorkshop?.allLessonsFinished || areAllLessonsFinished ? (
          ""
        ) : (
          <HiLockClosed />
        )}
      </span>
      <span>Exam</span>
    </div>
  );
}

export default ExamItem;
