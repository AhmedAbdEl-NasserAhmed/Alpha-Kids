import { useCreateChild } from "hooks/useCreateChild";
import { useUser } from "hooks/useUser";
import { useMemo } from "react";
import Loader from "ui/Loader/Loader";
import { images } from "../../../assets/index";
import Modal from "ui/Modal/Modal";
import Input from "ui/Input";
import { useForm } from "react-hook-form";
import styles from "./AddChildForm.module.scss";
import Button from "ui/Button";
import { userNameMaxLength } from "constants/user";

function AddChildForm() {
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

  //   console.log(randomNumber);

  const childAvatar =
    formData.gender === "male"
      ? images.profiles[`m${randomNumber}`]
      : images.profiles[`f${randomNumber}`];

  const { user } = useUser();

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
        onSuccess: reset(),
      }
    );
  }

  return (
    <Modal>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles["form__heading"]}>Add New profile</h2>
        <img className={styles["form__img"]} src={childAvatar} alt="logo" />

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
        <Button variation="login" type="submit">
          {isCreating ? <Loader /> : "Add a child"}
        </Button>
      </form>
    </Modal>
  );
}

export default AddChildForm;
