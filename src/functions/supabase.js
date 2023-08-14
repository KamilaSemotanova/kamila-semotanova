import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://mnhblnolsyfbbqgccrgm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uaGJsbm9sc3lmYmJxZ2NjcmdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwMjc0ODcsImV4cCI6MjAwNzYwMzQ4N30.HUWhBryT4-5Jb3Pne1lo513msMVBZqKNWlhDIP5kCfs',
);
