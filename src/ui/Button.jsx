function Button({ children, variation, type, onClick, disabled }) {
  const styles = {
    primary:
      "md:px-6 md:py-2 px-2 py-1 text-xl sm:text-2xl md:text-3xl text-white bg-sky-500",

    "primary--2":
      " text-white bg-sky-400 font-semibold text-xl p-[0.75rem]  sm:p-5 rounded-lg",

    "primary--3": "text-white bg-sky-400 font-semibold text-lg p-2 rounded-md",

    danger: "text-white bg-red-500 font-semibold text-lg p-2 rounded-md",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type || "button"}
      className={styles[variation]}
    >
      {children}
    </button>
  );
}

export default Button;
