import supabase from "./Supabase";

export async function getWorkshops() {
  let { data: workshops, error } = await supabase.from("workshops").select("*");

  if (error) throw new Error("couldn't get workshops");

  return workshops;
}

export async function addWorkshop({ workshopName, workshopImageUrl, lessons }) {
  const { data, error } = await supabase
    .from("workshops")
    .insert({
      workshopName,
      workshopImageUrl,
      lessons,
    })
    .select();

  if (error) throw new Error("couldn't upload workshop");

  return data;
}

export async function updataWorkshopExam({ id, questionsData }) {
  const { data, error } = await supabase

    .from("workshops")
    .update({ isTestDone: true, examQuestions: questionsData })
    .eq("id", id)
    .select();

  if (error) throw new Error("couldn't update workshop");

  return data;
}

export async function updataWorkshopLessonsFinished(id) {
  const { data, error } = await supabase

    .from("workshops")
    .update({ isExamFinished: true })
    .eq("id", id)
    .select();

  if (error) throw new Error("couldn't update workshop");

  return data;
}

export async function updataWorkshopExamFinished({ id }) {
  const { data, error } = await supabase

    .from("activeChildWorkshops")
    .update({
      examQuestions: [],
      examScore: 0,
      allLessonsFinished: false,
      isExamFinished: false,
    })
    .eq("id", id)
    .select();

  if (error) throw new Error("couldn't update workshop");

  return data;
}

export async function updateInsertActiveChildWorkshops({
  workshopId,
  childId,
  imageUrl,
  examScore,
  examQuestions,
  workshopName,
}) {
  let query = supabase.from("activeChildWorkshops").select();

  const { data, error } = await query;

  const uploadedWokrshop = data.find(
    (uploadedWorkshop) =>
      uploadedWorkshop.workshopId === workshopId &&
      uploadedWorkshop.childId === childId
  );

  if (uploadedWokrshop) {
    query = await supabase
      .from("activeChildWorkshops")
      .update({
        allLessonsFinished: true,
        isExamFinished: true,
        examScore,
        examQuestions,
        workshopName,
      })
      .eq("id", uploadedWokrshop.id)
      .select();
  } else {
    query = await supabase
      .from("activeChildWorkshops")
      .insert([
        {
          workshopName,
          workshopId,
          childId,
          imageUrl,
          allLessonsFinished: true,
          isExamFinished: true,
          examScore,
          examQuestions,
        },
      ])
      .select();
  }

  if (error) throw new Error("couldn't insert active workshop");

  return data;
}

export async function getActiveChildWorkshops(id) {
  let { data, error } = await supabase
    .from("activeChildWorkshops")
    .select("*")
    .eq("childId", id);

  if (error) throw new Error("couldn't get active child workshops");

  return data;
}
