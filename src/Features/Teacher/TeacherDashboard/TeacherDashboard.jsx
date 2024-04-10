import Button from "UI/Button";
import styles from "./TeacherDashboard.module.scss";
import Container from "UI/Container/Container";
import { useGetWorkshops } from "hooks/useGetWorkshops";
import { useState } from "react";
import InCompletedWorkshopsList from "../InCompletedWorkshopsList/InCompletedWorkshopsList";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import AddWorkshopForm from "components/Forms/AddWorkshopForm/AddWorkshopForm";
import CompletedWorkshopList from "../CompletedWorkshopList/CompletedWorkshopList";
import AddWorkshopExamForm from "components/Forms/AddWorkshopExamForm/AddWorkshopExamForm";

function TeacherDashboard() {
  const [showModal, setShowModal] = useState(false);

  const [currentWorkshop, setCurrentWorkshop] = useState({});

  const { workshops, isLoading } = useGetWorkshops();

  const completedWorkshops = workshops?.filter(
    (workshop) => workshop.isTestDone
  );

  // const inCompletedWorkshops = workshops?.filter(
  //   (workshop) => workshop.isTestDone
  // );

  if (isLoading) return <PagesSpinner />;

  return (
    <div className={styles["teacher-dashboard"]}>
      <AddWorkshopForm showModal={showModal} setShowModal={setShowModal} />
      <AddWorkshopExamForm
        currentWorkshop={currentWorkshop}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <Container variation="bg">
        <h2 className="text-[2.5rem] mb-[2.5rem]">Dashboard</h2>

        <Button onClick={() => setShowModal(true)} variation="primary--2">
          + Create Workshop
        </Button>

        <div className="flex flex-col gap-[4rem] mt-[4rem]">
          <CompletedWorkshopList
            heading="Completed Workshops"
            workshops={completedWorkshops}
          />

          <p className="text-2xl p-4 bg-cyan-400">
            These workshops wont be available {""}
            <strong>unless you create an exam for it ! </strong>
          </p>

          <InCompletedWorkshopsList
            setCurrentWorkshop={setCurrentWorkshop}
            currentWorkshop={currentWorkshop}
            heading="InCompleted Workshops"
            workshops={!completedWorkshops}
          />
        </div>
      </Container>
    </div>
  );
}

export default TeacherDashboard;
