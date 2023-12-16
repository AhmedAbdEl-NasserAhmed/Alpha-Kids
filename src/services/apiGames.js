import supabase from "./Supabase";

export async function getGames() {
  const { data, error } = await supabase.from("games").select("*");

  if (error) throw new Error("couldn't get games");

  return data;
}
