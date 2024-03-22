import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://stayykjeggegewwvxsdd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0YXl5a2plZ2dlZ2V3d3Z4c2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwOTYxMTksImV4cCI6MjAyNjY3MjExOX0.jX0j28k2zQzOvEHjq3V9qn8rHT2FWbhysH6yfCrMQ8o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
