import supabase from "./Supabase";

export async function getVideos() {
  const { data, error } = await supabase.from("videos").select("*");

  if (error) throw new Error("couldn't get games");

  return data;
}
