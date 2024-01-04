import SubNav from "layouts/SubNav/SubNav";
import Nav from "layouts/Nav/Nav";
import TeacherDashboard from "../TeacherDashboard/TeacherDashboard";

function TeacherProfile() {
  return (
    <div>
      <Nav />
      <SubNav />
      <TeacherDashboard />
    </div>
  );
}

export default TeacherProfile;
