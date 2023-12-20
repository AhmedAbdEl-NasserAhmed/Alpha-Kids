import supabase from "./Supabase";

export async function getVideos() {
  const { data, error } = await supabase.from("videos").select("*");

  if (error) throw new Error("couldn't get videos");

  return data;
}

export async function insertActiveChildVideos({ childId, watchedVideo }) {
  const { data, error } = await supabase
    .from("activeChildVideos")
    .insert([
      {
        childId: childId,
        videoId: watchedVideo.id,
        thumbnail: watchedVideo.thumbnail,
        src: watchedVideo.src,
      },
    ])
    .select();

  if (error) throw new Error("couldn't upload active child related videos");

  return data;
}

export async function getActiveChildVideos(id) {
  let { data, error } = await supabase
    .from("activeChildVideos")
    .select("*")
    .eq("childId", id);

  if (error) throw new Error("couldn't get active child related videos");

  return data;
}
