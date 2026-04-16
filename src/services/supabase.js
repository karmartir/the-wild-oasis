import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://enhfappxejbmorklkuth.supabase.co";
// its a safe to publish this key, placed intentionally!
const publishableKey = "sb_publishable_gusnO3F7yzTfpLlrhlwL1g_JpbnzIbg";
const supabase = createClient(supabaseUrl, publishableKey);

export default supabase;
