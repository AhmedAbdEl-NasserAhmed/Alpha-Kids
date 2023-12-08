import ParentNav from "components/Parent/ParentNav/ParentNav";
import ParentSubNav from "components/Parent/ParentSubNav/ParentSubNav";
import AddChildForm from "components/forms/AddChildForm/AddChildForm";

function ParentProfile() {
  return (
    <div>
      <ParentNav />
      <ParentSubNav />
      {/* <ParentChildList /> */}
      <AddChildForm />
    </div>
  );
}

export default ParentProfile;
