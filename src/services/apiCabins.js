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
