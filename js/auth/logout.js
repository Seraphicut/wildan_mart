import { supabase } from "../config/supabase.js";

export async function logout(){

    await supabaseClient

    .auth

    .signOut();

    location.reload();

}