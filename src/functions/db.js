import { supabase } from './supabase';

export async function LoadProjects() {
  const { data } = await supabase
    .from('Projects')
    .select()
    .order('id', { ascending: false });
  return data;
}

export async function LoadProjectById(id) {
  const { data } = await supabase
    .from('Projects')
    .select()
    .eq('id', id)
    .single();
  return data;
}
