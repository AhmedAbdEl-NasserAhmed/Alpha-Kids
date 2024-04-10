import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { location } = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

export default ScrollToTop;
