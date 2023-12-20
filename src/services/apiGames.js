import supabase from "./Supabase";

export async function getGames() {
  const { data, error } = await supabase.from("games").select("*");

  if (error) throw new Error("couldn't get games");

  return data;
}

export async function insertActiveChildGames({ childId, watchedGame }) {
  const { data, error } = await supabase
    .from("activeChildGames")
    .insert([
      {
        childId: childId,
        gameId: watchedGame.id,
        thumbnail: watchedGame.thumbnail,
        src: watchedGame.src,
      },
    ])
    .select();

  if (error) throw new Error("couldn't upload active child related videos");

  return data;
}

export async function getActiveChildGames(id) {
  let { data, error } = await supabase
    .from("activeChildGames")
    .select("*")
    .eq("childId", id);

  if (error) throw new Error("couldn't get active child related Games");

  return data;
}
