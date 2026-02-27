import { createClient } from "@/lib/supabase/server";

export async function getCurrentUserId(): Promise<string> {
  const supabase = await createClient();
  
  const {
    data: { user },
  } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error("User not authenticated");
  }

  return user.id;
}
