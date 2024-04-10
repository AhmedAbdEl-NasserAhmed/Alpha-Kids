import AddWorkshopExamForm from "components/Forms/AddWorkshopExamForm/AddWorkshopExamForm";
import styles from "./InCompletedWorkshopsList.module.scss";
import { useState } from "react";

function InCompletedWorkshopsList({
  setCurrentWorkshop,
  heading,
  workshops,
  currentWorkshop,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h2 className="text-4xl mb-[1.5rem] font-semibold ">{heading}</h2>
      <ul className={styles["incompleted-workshop"]}>
        {workshops?.map((workshop) => (
          <li
            className={styles["incompleted-workshop__item"]}
            key={workshop.id}
            onClick={() => {
              setShowModal(true);
              setCurrentWorkshop(workshop);
            }}
          >
            <img src={workshop.workshopImageUrl} alt="url" />
            <h2 className="text-2xl font-semibold">
              {workshop.workshopName}
              {""} workshop
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InCompletedWorkshopsList;

/**
 *
 * // // // //
 * // // // //
 *
 */
