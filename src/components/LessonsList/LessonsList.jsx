import styles from "./LessonsList.module.scss";

import LessonItem from "./LessonItem/LessonItem";
import ExamItem from "./ExamItem/ExamItem";

function LessonsList({
  workshop,
  currentLesson,
  setCurrentLesson,
  setShowExamQuestions,
  areAllLessonsFinished,
  lessons,
}) {
  return (
    <ul className={styles["lessons-list"]}>
      {lessons.map((lesson, index) => (
        <LessonItem
          workshop={workshop}
          index={index}
          lessons={lessons}
          setShowExamQuestions={setShowExamQuestions}
          currentLesson={currentLesson}
          setCurrentLesson={setCurrentLesson}
          key={lesson.id}
          lesson={lesson}
        />
      ))}
      <ExamItem
        workshop={workshop}
        areAllLessonsFinished={areAllLessonsFinished}
        setShowExamQuestions={setShowExamQuestions}
      />
    </ul>
  );
}

export default LessonsList;
