import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAddWorkshop } from "hooks/useAddWorkshop";
import { imageUrlPattern, urlPattern } from "utils/userTypes";

import Modal from "UI/Modal/Modal";
import styles from "./AddWorkshopForm.module.scss";
import Button from "UI/Button";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import Input from "UI/Input";
import Form from "UI/Form/Form";
import toast from "react-hot-toast";

function AddWorkshopForm({ showModal, setShowModal }) {
  const {
    register,
    watch,
    getValues,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const { addWorkshop, isPending } = useAddWorkshop();

  const [lessons, setLessons] = useState([1]);

  const formData = watch();

  useEffect(() => {
    setLessons([1]);
    reset();
  }, [showModal, reset]);

  function handleAddLesson() {
    for (const [key, value] of Object.entries(getValues())) {
      if (value === "" || key.includes("lesson-name" || "lesson-video")) {
        toast.error("please fill the lesson data");
        return;
      }
    }

    setLessons((lessons) => [...lessons, 1]);
  }

  function onSubmit() {
    const data = lessons.map((_, index) => {
      const dataObjects = Object.fromEntries(
        Object.entries(formData).filter(([key]) =>
          key.startsWith(`lesson-${index + 1}`)
        )
      );

      return {
        id: crypto.randomUUID(),
        ...dataObjects,
        isFinished: false,
      };
    });

    addWorkshop(
      {
        workshopName: formData.workshopName,
        workshopImageUrl: formData.ImageURL,
        lessons: data,
      },
      {
        onSettled: () => {
          reset();
          setShowModal(false);
        },
      }
    );
  }

  if (isPending) return <PagesSpinner />;

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <Form
        variation="big"
        showModal={showModal}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={styles["heading"]}>Add New Workshop</h2>

        <div className={styles["container"]}>
          <div className="flex flex-col gap-[1.5rem] ">
            <Input
              className={
                formData?.workshopName && !errors?.workshopName
                  ? "bg-green-100 border-solid border-2 border-green-400 focus:ring-offset-1 focus:ring-green-400"
                  : ""
              }
              errors={errors}
              variation="login"
              label="WorkShop Name"
              id="workshopName"
              type="text"
              register={register}
              validationOptions={{
                required: {
                  value: true,
                  message: `The Workshop Name is required`,
                },
                minLength: {
                  value: 5,
                  message: "The Workshop name must be at least 5 characters",
                },
              }}
            />

            <Input
              className={
                formData?.ImageURL && !errors?.ImageURL
                  ? "bg-green-100 border-solid border-2 border-green-400 focus:ring-offset-1 focus:ring-green-400"
                  : ""
              }
              errors={errors}
              variation="login"
              label=" WorkShop Image URL"
              id="ImageURL"
              type="text"
              register={register}
              validationOptions={{
                required: {
                  value: true,
                  message: `The Workshop Image URl is required`,
                },
                pattern: {
                  value: imageUrlPattern,
                  message: "Please enter a valid URl",
                },
                minLength: {
                  value: 5,
                  message: "The Workshop URL Must be at least 5 characters",
                },
              }}
            />
            <p className="text-2xl"> Lessons {lessons.length}</p>
          </div>

          <div
            className={`${styles["lessons-container"]}  ${
              lessons.length >= 2 ? "overflow-y-scroll" : ""
            }`}
          >
            {lessons.map((_, index) => (
              <div className="flex flex-col  gap-[2.5rem]  " key={index}>
                <Input
                  type="text"
                  name="lessonName"
                  errors={errors}
                  register={register}
                  validationOptions={{
                    required: {
                      value: true,
                      message: `The Lesson Name is required`,
                    },
                  }}
                  variation="login"
                  id={`lesson-${index + 1}-name`}
                  label={`lesson  ${index + 1} Name`}
                />

                <Input
                  type="text"
                  name="lessonVideo"
                  errors={errors}
                  variation="login"
                  register={register}
                  validationOptions={{
                    required: {
                      value: true,
                      message: `The Lesson video is required`,
                    },
                    pattern: {
                      value: urlPattern,
                      message: "Please enter a valid URl",
                    },
                    minLength: {
                      value: 5,
                      message: "The Workshop URL Must be at least 5 characters",
                    },
                  }}
                  id={`lesson-${index + 1}-video`}
                  label={`lesson  ${index + 1} Video`}
                  title="Add a youtube video"
                />
              </div>
            ))}
          </div>

          <div className={styles["btn-container"]}>
            <Button
              disabled={isPending}
              onClick={handleAddLesson}
              variation="primary--2"
            >
              + Add a new Lesson
            </Button>

            <Button disabled={isPending} type="submit" variation="primary--2">
              Add workshop
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  );
}

export default AddWorkshopForm;
