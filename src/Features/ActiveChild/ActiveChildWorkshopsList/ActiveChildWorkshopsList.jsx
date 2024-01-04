import ShowExamResultsForm from "components/ShowExamResults/ShowExamResults";
import styles from "./ActiveChildWorkshopsList.module.scss";
import { useUpdateWorkshopExamFinished } from "hooks/useUpdateWorkshopExamFinished";
import { Link, useNavigate } from "react-router-dom";
import Button from "UI/Button";
import { useState } from "react";

function ActiveChildWorkshopsList({ activeWorkshops }) {
  const [showModal, setShowModal] = useState();

  const navigate = useNavigate();

  const { updataWorkshopExamFinished, isPending } =
    useUpdateWorkshopExamFinished();

  const [currentWorkshop, setCurrentWorkshop] = useState();

  if (!activeWorkshops?.length)
    return (
      <div>
        <h2
          className={`${styles["active-child-workshops__heading"]} mb-[2rem]`}
        >
          Finished Workshops
        </h2>
        <span className="text-2xl font-semibold">
          Start Studying Workshops -- {""}
          <span
            className={`cursor-pointer p-3 bg-cyan-500 rounded-md`}
            onClick={() => navigate("/workshops")}
          >
            Go to Workshops page &rarr;
          </span>
        </span>
      </div>
    );

  return (
    <>
      <div className={styles["active-child-workshops"]}>
        <h2 className={styles["active-child-workshops__heading"]}>
          Finished Workshops
        </h2>

        <ul className={styles["active-child-workshops__list"]}>
          {activeWorkshops?.map((workshop) => (
            <li
              className={styles["active-child-workshops__item"]}
              key={workshop?.id}
            >
              <Link to="/workshops">
                <img src={workshop?.imageUrl} alt="" />
              </Link>

              <div className="mt-[1.5rem] flex gap-4 ">
                <Button
                  disabled={isPending}
                  onClick={() => {
                    updataWorkshopExamFinished({ id: workshop.id });
                    navigate(`/workshops/${workshop.workshopId}`);
                  }}
                  variation="danger"
                >
                  Take Exam again
                </Button>
                <Button
                  onClick={() => {
                    setCurrentWorkshop(workshop);
                    setShowModal(true);
                  }}
                  disabled={isPending}
                  variation="primary--3"
                >
                  show Exam Result
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ShowExamResultsForm
        currentWorkshop={currentWorkshop}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default ActiveChildWorkshopsList;
