import { useEffect } from "react";
import { useUser } from "hooks/useUser";
import { useNavigate } from "react-router-dom";
import { storage } from "services/Storage";
import { AUTHENTICATION_TOKEN } from "constants/authenticationToken";
import Spinner from "./PagesSpinner/PagesSpinner";

function ProtectRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading } = useUser();

  useEffect(
    function () {
      let accessTokenObj = storage.getStorage(AUTHENTICATION_TOKEN);

      if (accessTokenObj?.user) {
        if (accessTokenObj.user?.user_metadata.userType) {
          navigate(
            `/${String(
              accessTokenObj.user?.user_metadata.userType
            ).toLocaleLowerCase()}`
          );
        } else if (window.location.pathname === "/") {
          navigate(-1);
        }
      } else {
        navigate("/");
      }
    },
    [isLoading, navigate]
  );

  if (isLoading) return <Spinner />;

  return children;
}

export default ProtectRoute;
