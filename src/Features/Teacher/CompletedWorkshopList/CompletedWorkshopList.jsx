import styles from "./CompletedWorkshopList.module.scss";

function CompletedWorkshopList({ heading, workshops }) {
  return (
    <div>
      <h2 className="text-4xl mb-[1.5rem] font-semibold ">{heading}</h2>

      <ul className={styles["completed-workshop"]}>
        {workshops?.map((workshop) => (
          <li className={styles["completed-workshop__item"]} key={workshop.id}>
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

export default CompletedWorkshopList;
