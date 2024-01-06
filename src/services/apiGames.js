import supabase from "./Supabase";

export async function getGames() {
  const { data, error } = await supabase.from("games").select("*");

  if (error) throw new Error("couldn't get games");

  return data;
}

export async function insertActiveChildGames({ childId, watchedGame }) {
  let query = supabase.from("activeChildGames").select("*");

  const { data, error } = await query;

  const uploadedGame = data.find(
    (game) => game.gameId === watchedGame.id && game.childId === childId
  );

  if (uploadedGame) return;

  query = await supabase
    .from("activeChildGames")
    .insert({
      childId: childId,
      gameId: watchedGame.id,
      thumbnail: watchedGame.thumbnail,
      src: watchedGame.src,
    })
    .select();

  if (error) throw new Error("couldn't upload active child related games");

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
