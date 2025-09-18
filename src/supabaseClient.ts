import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase-types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_DATABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabaseUrl = "https://fimemmreoptvrdzirjki.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpbWVtbXJlb3B0dnJkemlyamtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MzQ0NTgsImV4cCI6MjAyNjAxMDQ1OH0.fv1f8fhA_FlZ0nzltnu8ao4TAhiJtp_sPkCv0v3LVV8";
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

