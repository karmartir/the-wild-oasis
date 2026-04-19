import supabase from "./supabase";
export async function getCabins() {
  try {
    const { data, error } = await supabase.from("cabins").select("*");
    if (error) {
      console.error("Supabase error", error);
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
}
export async function createCabin(newCabin) {
  // REMEMBER Change RLS POLICIES in db after creating authorization!!!
  try {
    const { data, error } = await supabase.from("cabins").insert([newCabin]);
    if (error) {
      console.error("Supabase error", error);
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
}
export async function deleteCabin(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}
