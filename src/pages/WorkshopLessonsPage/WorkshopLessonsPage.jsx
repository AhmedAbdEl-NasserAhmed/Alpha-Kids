import Container from "UI/Container/Container";
import LessonsList from "components/LessonsList/LessonsList";
import WorkshopExam from "components/WorkshopExam/WorkshopExam";
import { useGetWorkshops } from "hooks/useGetWorkshops";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";

function WorkshopExamPage() {
  const [width, setWidth] = useState(window.innerWidth);

  const [height, setHeight] = useState(window.innerHeight);

  const { id } = useParams();

  const { workshops, isPending } = useGetWorkshops();

  const currentWorkshop = workshops?.find(
    (workShop) => workShop.id === Number(id)
  );

  const [showExamQuestions, setShowExamQuestions] = useState(false);

  const [index, setIndex] = useState(0);

  const [currentLesson, setCurrentLesson] = useState(
    currentWorkshop?.lessons[index]
  );

  const lessons = currentWorkshop?.lessons;

  const areAllLessonsFinished = lessons?.every((lesson) => lesson.isFinished);

  useEffect(() => {
    if (index >= lessons.length) return;

    setCurrentLesson(currentWorkshop?.lessons[index]);
  }, [index, currentWorkshop, lessons]);

  function handleEndedLesson() {
    setTimeout(() => {
      setIndex(index + 1);
    }, 1000);

    currentLesson.isFinished = true;
  }

  useEffect(() => {
    function upadteWindowDimensions() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWidth(width);

      setHeight(height);
    }

    window.addEventListener("resize", upadteWindowDimensions);

    return () => window.removeEventListener("resize", upadteWindowDimensions);
  }, [width]);

  const opts = {
    width: `${width > 870 ? "1000" : "300"}`,
    height: `${height < 500 ? "300" : "450"}`,
    playerVars: {
      origin: "'https://localhost:3000'",
      autoplay: 1,
      playsinline: 1,
    },
  };

  const videoSrc = Object.keys(currentLesson).filter((key) =>
    key.endsWith("video")
  );

  if (isPending || !currentWorkshop) return <PagesSpinner />;

  return (
    <>
      <div className="bg-yellow-400 p-[2rem]">
        <Container variation="bg">
          <LessonsList
            workshop={currentWorkshop}
            areAllLessonsFinished={areAllLessonsFinished}
            setShowExamQuestions={setShowExamQuestions}
            currentWorkshop={currentWorkshop}
            currentLesson={currentLesson}
            setCurrentLesson={setCurrentLesson}
            lessons={lessons}
          />
        </Container>
      </div>

      <div className="bg-cyan-500 p-[5rem]">
        <Container variation="bg">
          {!showExamQuestions ? (
            <YouTube
              opts={opts}
              onEnd={handleEndedLesson}
              videoId={String(currentLesson[videoSrc]).slice(32, 43)}
            />
          ) : (
            <WorkshopExam lessons={lessons} workShop={currentWorkshop} />
          )}
        </Container>
      </div>
    </>
  );
}

export default WorkshopExamPage;
