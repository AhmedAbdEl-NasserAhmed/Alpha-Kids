import { useForm } from "react-hook-form";
import { storage } from "services/Storage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { emailPattern, passwordPattern, checkUserType } from "utils/userTypes";
import { userNameMaxLength, userTypes } from "constants/user";

import Button from "UI/Button";
import Input from "UI/Input";
import Styles from "./RegisterForm.module.scss";
import SelectOptions from "UI/SelectOptions";

import { useSignup } from "hooks/useSignup";
import Loader from "UI/Loader/Loader";

function RegisterForm({ flip, setFlip }) {
  let accessTokenObj = storage.getStorage();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (accessTokenObj?.user) {
        if (accessTokenObj.user?.user_metadata.userType) {
          navigate(`/${accessTokenObj.user?.user_metadata.userType}`);
        }
      }
    },
    [
      navigate,
      accessTokenObj?.user,
      accessTokenObj?.user?.user_metadata?.userType,
    ]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const formData = watch();

  const { signup, isPending } = useSignup();

  function onSubmit({ userName, email, password, userType }) {
    signup(
      { userName, userType, email, password },
      {
        onSuccess: () => setFlip(false),

        onSettled: () => reset(),
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${Styles["form"]} ${
        flip ? "rotate-orgin " : "rotate-reverse "
      }`}
    >
      <h1 className={Styles["main-title"]}>Sign up</h1>

      <Input
        className={
          formData?.userName?.length >= userNameMaxLength
            ? "bg-green-100 border-solid border-2 border-green-400 focus:ring-offset-1 focus:ring-green-400"
            : ""
        }
        disabled={isPending}
        errors={errors}
        label="Username"
        id="userName"
        type="text"
        variation="login"
        register={register}
        validationOptions={{
          required: {
            value: true,
            message: `The user name is required`,
          },
          minLength: {
            value: userNameMaxLength,
            message: "The user name must be at least 6 characters",
          },
        }}
      />

      <Input
        className={
          formData?.email && !errors?.email
            ? "bg-green-100 border-solid border-2 border-green-400 focus:ring-offset-1 focus:ring-green-400"
            : ""
        }
        disabled={isPending}
        errors={errors}
        id="email"
        label="Email Address"
        type="email"
        variation="login"
        register={register}
        validationOptions={{
          required: {
            value: true,
            message: `The Email address is required`,
          },
          pattern: {
            value: emailPattern,
            message: "invalid email address",
          },
        }}
      />

      <Input
        className={
          formData?.password && !errors?.password
            ? "bg-green-100 border-solid border-2 border-green-400 focus:ring-offset-1 focus:ring-green-400"
            : ""
        }
        disabled={isPending}
        errors={errors}
        id="password"
        label="Password"
        type="password"
        variation="login"
        register={register}
        validationOptions={{
          required: {
            value: true,
            message: `The password is required`,
          },
          pattern: {
            value: passwordPattern,
            message: "invalid Password Format",
          },
        }}
      />
      <Input
        className={
          formData?.password &&
          formData?.password === formData?.passwordVerfication
            ? "bg-green-100 border-solid border-2 border-green-400 focus:ring-offset-1 focus:ring-green-400"
            : ""
        }
        disabled={isPending}
        errors={errors}
        id="passwordVerfication"
        label="Re-Password"
        type="password"
        variation="login"
        register={register}
        validationOptions={{
          required: "Password does not match",
          validate: (value) =>
            value === getValues().password || "Password does not match",
        }}
      />

      <div>
        <SelectOptions
          disabled={isPending}
          id="userType"
          errors={errors}
          defaultValue="Please Select User Type"
          type="registerType"
          name="userType"
          options={userTypes}
          register={register}
          validationOptions={{
            required: {
              value: true,
              message: "Please Select User Type",
            },
            validate: (value) => {
              if (!checkUserType(value)) return "Please Select a valid Type";
            },
          }}
        />
      </div>

      <div className="flex justify-center gap-3 m-4 sm:m-3 md:m-2 sm:gap-0 sm:justify-between items-center flex-wrap">
        <Button disabled={isPending} type="submit" variation="primary">
          {isPending ? <Loader /> : "Sign Up"}
        </Button>
        <h2
          className="text-xl text-sky-500 cursor-pointer"
          onClick={() => {
            setFlip(() => false);
            reset();
          }}
        >
          Already have an account ?
        </h2>
      </div>
    </form>
  );
}

export default RegisterForm;
