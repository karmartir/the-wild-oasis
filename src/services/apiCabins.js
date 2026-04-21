import supabase, { supabaseUrl } from "./supabase";

// Get all cabins
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

// Create Cabin
export async function createCabin(newCabin) {
  // REMEMBER Change RLS POLICIES in db after creating authorization!!!
  // Generate a random name for the image
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // https://enhfappxejbmorklkuth.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  try {
    // 1. Create cabin
    const { data, error } = await supabase
      .from("cabins")
      .insert([{ ...newCabin, image: imagePath }]);
    if (error) {
      console.error("Supabase error", error);
      throw new Error(error.message);
    }
    // // 2. Upload image (only if create cabin was successful)
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    // 3. Delete the cabin if upload fails
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error("Image could not be uploaded - Cabin was not created");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
}

// Delete Cabin
export async function deleteCabin(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}
