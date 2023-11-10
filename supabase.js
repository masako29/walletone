import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_SECRET_KEY;

if (!supabaseUrl && !supabaseKey)
  throw new Error(
    "Please define the NEXT_PUBLIC_SUPABASE_URL & SUPABASE_SERVICE_SECRET_KEY environment variable inside .env.local"
  );

export const supabase = createClient(supabaseUrl, supabaseKey);
