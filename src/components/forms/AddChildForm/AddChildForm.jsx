import { useCreateChild } from "hooks/useCreateChild";
import { useUser } from "hooks/useUser";
import { useMemo } from "react";
import Loader from "UI/Loader/Loader";
import { images } from "../../../assets/index";
import Modal from "UI/Modal/Modal";
import Input from "UI/Input";
import Form from "UI/Form/Form";
import { useForm } from "react-hook-form";
import styles from "./AddChildForm.module.scss";
import Button from "UI/Button";
import { userNameMaxLength } from "constants/user";
import { useGetChildren } from "hooks/useGetChildren";

function AddChildForm({ showModal, setShowModal }) {
  const { createChild, isPending: isCreating } = useCreateChild();

  const {
    reset,
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: "male",
    },
    mode: "onChange",
  });

  const formData = watch();

  const randomNumber = useMemo(() => Math.trunc(Math.random() * 3) + 1, []);

  const childAvatar =
    formData.gender === "male"
      ? images.profiles[`m${randomNumber}`]
      : images.profiles[`f${randomNumber}`];

  const { user } = useUser();

  const { refetch } = useGetChildren();

  function onSubmit({ childName, gender }) {
    if (formData.childName === "" && !formData.gender) return;

    createChild(
      {
        id: user.id,
        childName: childName,
        childGender: gender,
        childAvatar: childAvatar,
      },
      {
        onSuccess: () => {
          refetch();
          setShowModal(false);
          reset();
        },
      }
    );
  }

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <Form
        variation="small"
        showModal={showModal}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={styles["heading"]}>Add New Child Profile</h2>
        <img className={styles["img"]} src={childAvatar} alt="logo" />

        <Input
          type="text"
          id="childName"
          label="Child Name"
          variation="login"
          errors={errors}
          register={register}
          validationOptions={{
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: userNameMaxLength,
              message: "The user name must be at least 6 characters",
            },
          }}
        />

        <div className="flex items-center gap-4">
          <Input
            value="male"
            name="gender"
            variation="radio"
            type="radio"
            id="Male"
            label="Male"
            register={register}
            errors={errors}
          />
          <Input
            value="female"
            name="gender"
            variation="radio"
            type="radio"
            id="Female"
            label="Female"
            register={register}
            errors={errors}
          />
        </div>
        <Button disabled={isCreating} variation="primary" type="submit">
          {isCreating ? <Loader /> : "Add a child"}
        </Button>
      </Form>
    </Modal>
  );
}

export default AddChildForm;
