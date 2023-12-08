import supabase from "./supabase";

export async function createChild({ id, childName, childGender, childAvatar }) {
  console.log("childName", childName);

  console.log("gender", childGender);

  try {
    const { data, error } = await supabase.from("children").insert([
      {
        parentID: id,
        childName: childName,
        childGender: childGender,
        childAvatar: childAvatar,
      },
    ]);
    if (error) throw new Error("can't add a child");

    return data;
  } catch (err) {
    console.log(err);
  }
}
