import { useCreateChild } from "hooks/useCreateChild";
import { useUser } from "hooks/useUser";
import { useMemo, useState } from "react";
import PagesSpinner from "ui/PagesSpinner/PagesSpinner";
import { images } from "../../../assets/index";
import Modal from "ui/Modal/Modal";
import Input from "ui/Input";
import { useForm } from "react-hook-form";

function ParentChildList() {
  const { createChild, isPending: isCreating } = useCreateChild();

  const {
    register,
    formState: { errors },
  } = useForm();

  const randomNumber = useMemo(() => Math.trunc(Math.random() * 3) + 1, []);

  console.log(randomNumber);

  const { user } = useUser();

  const [name, setName] = useState("");

  const [gender, setGender] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name && !gender && !user.id) return;

    createChild({ id: user.id, name, gender });
  }

  if (isCreating) return <PagesSpinner />;

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <img src={images.profiles[`f${randomNumber}`]} alt="logo" />

        <div className="flex items-center gap-4">
          <Input
            name="gender"
            variation="radio"
            type="radio"
            id="Female"
            label="Female"
            register={register}
            errors={errors}
          />

          <Input
            name="gender"
            variation="radio"
            type="radio"
            id="Male"
            label="Male"
            register={register}
            errors={errors}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </Modal>
  );
}

export default ParentChildList;
