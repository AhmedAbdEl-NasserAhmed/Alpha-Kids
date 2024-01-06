import { useGetActiveChildWorkshops } from "hooks/useGetActiveChildWorkshops";
import styles from "./LessonItem.module.scss";

function LessonItem({
  index,
  workshop,
  currentLesson,
  setCurrentLesson,
  lesson,
  setShowExamQuestions,
  lessons,
}) {
  const isAlreadyFinished = lessons.find(
    (finishedLesson) =>
      finishedLesson.isFinished && finishedLesson.id === lesson.id
  );

  const { data: activeWorkshops } = useGetActiveChildWorkshops();

  const currentActiveWorkshop = activeWorkshops?.find(
    (currentWorkshop) => currentWorkshop?.workshopId === workshop?.id
  );

  return (
    <li
      onClick={() => {
        setShowExamQuestions(false);
        setCurrentLesson(lesson);
      }}
      className={`${styles["lesson-item"]} ${
        currentLesson.id === lesson.id ? styles["lesson-item__active"] : ""
      } ${
        currentActiveWorkshop?.allLessonsFinished || isAlreadyFinished
          ? styles["lesson-item__finished"]
          : ""
      }  `}
    >
      {lesson[`lesson-${index + 1}-name`]}
    </li>
  );
}

export default LessonItem;
