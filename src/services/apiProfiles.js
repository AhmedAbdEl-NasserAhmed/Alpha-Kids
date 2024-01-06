import supabase from "./Supabase";

export async function getCurrentProfile(id) {
  let { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id);

  if (error) throw new Error("can't get current Profile");

  return data;
}
