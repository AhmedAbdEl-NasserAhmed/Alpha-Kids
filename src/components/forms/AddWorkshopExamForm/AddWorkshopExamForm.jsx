import Modal from "UI/Modal/Modal";
import styles from "./AddWorkshopExamForm.module.scss";
import { useEffect, useState } from "react";
import Button from "UI/Button";
import Input from "UI/Input";
import { useUpdateWokrshopExam } from "hooks/useUpdateWorkshopExam";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function AddWorkshopExamForm({ showModal, setShowModal, currentWorkshop }) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const formData = watch();

  const [questions, setQuestions] = useState([1]);

  useEffect(() => {
    setQuestions([1]);
    reset();
  }, [showModal, reset]);

  const { updateWorkshopExam, isPending } = useUpdateWokrshopExam();

  function handleAddAnotherQuestion() {
    for (const [key, value] of Object.entries(getValues())) {
      if (
        (!key.includes("image") && value === "") ||
        value === "Choose the right Answer"
      ) {
        toast.error("Please fill the question Data");
        return;
      }
    }

    setQuestions([...questions, 1]);
  }

  function onSubmit() {
    const questionObjects = questions.map((_, index) => {
      const questionData = Object.fromEntries(
        Object.entries(formData).filter(
          ([key]) =>
            key.startsWith(`question-${index + 1}`) &&
            !key.includes(`question-${index + 1}-Answer`)
        )
      );

      const answers = Object.keys(formData)
        .filter((key) => key.startsWith(`question-${index + 1}-Answer`))
        .map((key) => formData[key]);

      return {
        id: crypto.randomUUID().slice(15),
        ...questionData,
        isAnswerCorrect: false,
        questionScore: 0,
        answers,
      };
    });

    updateWorkshopExam(
      { id: currentWorkshop.id, questionsData: questionObjects },
      {
        onSettled: () => {
          setShowModal(false);
          reset();
        },
      }
    );
  }

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles["add-exam-form"]} ${showModal ? "move-down" : ""}`}
      >
        <div>
          <h2 className={styles["add-exam-form__heading"]}>
            Add Exam To{" "}
            <span className="text-cyan-500">
              {currentWorkshop.workshopName}
            </span>{" "}
            Workshop
          </h2>

          <div
            className={`${styles["add-exam-form__container"]} ${
              questions.length >= 2 ? "overflow-y-scroll" : ""
            }`}
          >
            {questions.map((_, index) => {
              return (
                <div className="flex flex-col gap-2" key={index}>
                  <Input
                    label={`Question${index + 1} Name`}
                    variation="examInput"
                    id={`question-${index + 1}-name`}
                    register={register}
                    validationOptions={{
                      required: {
                        value: true,
                      },
                    }}
                    errors={errors}
                  />
                  <Input
                    className="examInput"
                    label={`Question${index + 1} Image [optional]`}
                    id={`question-${index + 1}-image`}
                    type="text"
                    variation="examInput"
                    disabled={isPending}
                    register={register}
                    errors={errors}
                  />

                  <Input
                    className="examInput"
                    label="Answer A"
                    variation="examInput"
                    id={`question-${index + 1}-AnswerA`}
                    type="text"
                    disabled={isPending}
                    register={register}
                    errors={errors}
                    validationOptions={{
                      required: {
                        value: true,
                      },
                    }}
                  />

                  <Input
                    className="examInput"
                    label="Answer B"
                    variation="examInput"
                    id={`question-${index + 1}-AnswerB`}
                    type="text"
                    disabled={isPending}
                    register={register}
                    errors={errors}
                    validationOptions={{
                      required: {
                        value: true,
                      },
                    }}
                  />

                  <Input
                    className="examInput"
                    label="Answer C"
                    variation="examInput"
                    id={`question-${index + 1}-AnswerC`}
                    type="text"
                    disabled={isPending}
                    register={register}
                    errors={errors}
                    validationOptions={{
                      required: {
                        value: true,
                      },
                    }}
                  />

                  <label
                    className="text-2xl 2xl:mt-3 mb-0 mt-3 md:mt-1 sm:mt-1 block sm:mb-1 md:mb-1 lg:mb-3"
                    htmlFor="RightAnswer"
                  >
                    Right Answer
                  </label>

                  <select
                    className=" w-full  p-2 rounded-sm text-2xl border-solid border-2  focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 border-sky-200"
                    id={`question-${index + 1}-rightAnswer`}
                    name="rightAnswer"
                    disabled={isPending}
                    {...register(`question-${index + 1}-rightAnswer`, {
                      required: {
                        value: true,
                      },
                      validate(value) {
                        if (value === "Choose the right Answer")
                          return "choose right answer";
                      },
                    })}
                  >
                    <option>Choose the right Answer</option>
                    <option>{formData[`question-${index + 1}-AnswerA`]}</option>
                    <option>{formData[`question-${index + 1}-AnswerB`]}</option>
                    <option>{formData[`question-${index + 1}-AnswerC`]}</option>
                  </select>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between mt-[3rem]">
            <Button
              disabled={isPending}
              variation="workshop"
              onClick={handleAddAnotherQuestion}
            >
              Add another Question
            </Button>
            <Button disabled={isPending} variation="workshop" type="submit">
              Submit The Questions
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default AddWorkshopExamForm;
