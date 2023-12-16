function Container({ children, variation }) {
  const styles = {
    bg: "max-w-[100rem] my-0 mx-auto  ",
    md: "max-w-[125rem] my-0 mx-auto  ",
  };

  return <div className={styles[variation]}>{children}</div>;
}

export default Container;
