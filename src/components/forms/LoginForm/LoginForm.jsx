import Styles from "./LoginForm.module.scss";
import Button from "UI/Button";
import Loader from "UI/Loader/Loader";
import Input from "UI/Input";
import { useLogin } from "hooks/useLogin";
import { useForm } from "react-hook-form";
import { emailPattern, passwordPattern } from "utils/userTypes";

function LoginForm({ flip, setFlip }) {
  const {
    reset,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { login, isPending } = useLogin();

  function onSubmit({ email, password }) {
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  const formData = watch();

  return (
    <form
      aria-label="form"
      onSubmit={handleSubmit(onSubmit)}
      className={`${Styles["form"]} ${
        flip ? "rotate-reverse " : "rotate-orgin rotate-reverse-animation"
      }`}
    >
      <h1 className={Styles["main-title"]}>Login</h1>

      {/* S(O)LID PRINCIPLES
OPEN-CLOSED principle
OPEN FOR EXTENSION
CLOSED FOR MODIFICATION */}

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
            message: "password must contains: A-z , 0-9 , @ #...",
          },
        }}
      />

      <div className="flex md:justify-between gap-4 text-center justify-center sm:justify-center items-center flex-wrap">
        <Button disabled={isPending} type="submit" variation="primary">
          {isPending ? <Loader /> : "Login"}
        </Button>
        <h2
          className="text-xl text-sky-500 cursor-pointer"
          onClick={() => setFlip(() => true)}
        >
          Create a new account
        </h2>
      </div>
    </form>
  );
}

export default LoginForm;
