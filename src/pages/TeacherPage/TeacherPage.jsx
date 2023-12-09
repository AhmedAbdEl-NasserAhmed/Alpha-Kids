import { useLogout } from "hooks/useLogout";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";

function TeacherPage() {
  const { logout, isPending } = useLogout();

  if (isPending) return <PagesSpinner />;

  return (
    <>
      <div className="text-3xl">Hello Teacher</div>
      <button disabled={isPending} onClick={logout}>
        Logout
      </button>
    </>
  );
}

export default TeacherPage;
