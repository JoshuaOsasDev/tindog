import supabase from "./supabase_client";

export async function getTeamMembers() {
  const { data, error } = await supabase.from("teamMembers").select("*");

  if (error) throw new Error("could not load team members");
  //   console.log(data, error, "data");
  return data;
}

export async function getDogs() {
  const { data, error } = await supabase
    .from("dogs")
    .select("id,name, age, breed, bio, likes, adopt, image, state, country")
    .limit(100);

  if (error) throw new Error("could not load team members");
  // console.log(data, error, "data");
  return data;
}

export async function updateDogsLikes(id, obj) {
  const { data, error } = await supabase
    .from("dogs")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error("could not update like");
  console.log(data, error, "data");
  return data;
}

export async function getBlogPosts() {
  const { data, error } = await supabase.from("blogPost").select("*");
  if (error) throw new Error("could not load posts");

  console.log(data, error, "data");
  return data;
}

export async function getPost(id) {
  let { data, error } = await supabase
    .from("blogPost")
    .select("content")
    .eq("id", id)
    .single();

  if (error) throw new Error("could not load post");

  console.log(data, error, "data");

  return data;
}
