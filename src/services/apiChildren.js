import supabase from "./Supabase";

export async function createChild({ id, childName, childGender, childAvatar }) {
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

export async function setActiveChild({ id, childID }) {
  const { error } = await supabase
    .from("profiles")
    .update({ activeChild: childID })
    .eq("id", id);

  if (error) throw new Error("can't select child");
}

export async function getChildren(id) {
  let { data, error } = await supabase
    .from("children")
    .select("*")
    .eq("parentID", id);

  if (error) throw new Error("can't get children");

  return data;
}

export async function getActiveChild(id) {
  let { data, error } = await supabase
    .from("children")
    .select("*")
    .eq("id", id);

  if (error) throw new Error("can't get active child");

  return data;
}

export async function deleteChild(id) {
  const { error } = await supabase.from("children").delete().eq("id", id);

  if (error)
    throw new Error(
      "the child might be an active child or have already active videos or games or workshops "
    );
}
